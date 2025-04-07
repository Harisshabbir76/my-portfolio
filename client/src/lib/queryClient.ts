import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Helper function to get the base API URL depending on environment
export const getApiBaseUrl = (): string => {
  if (import.meta.env.PROD) {
    // In production on Vercel, use relative URLs (same domain)
    return '';
  }
  // In development, use the localhost URL
  return 'http://localhost:5000';
};

// Helper to construct a full API URL
export const getApiUrl = (path: string): string => {
  // Make sure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${getApiBaseUrl()}${normalizedPath}`;
};

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Ensure URL is properly formatted with API base URL
  const fullUrl = url.startsWith('http') ? url : getApiUrl(url);
  
  const res = await fetch(fullUrl, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    // Ensure query key URL is properly formatted
    const queryKeyPath = queryKey[0] as string;
    const fullUrl = queryKeyPath.startsWith('http') 
      ? queryKeyPath 
      : getApiUrl(queryKeyPath);
    
    const res = await fetch(fullUrl, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
