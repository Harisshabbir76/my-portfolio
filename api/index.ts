import { VercelRequest, VercelResponse } from '@vercel/node';

// Main API endpoint for Vercel
export default function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Basic API info
  res.status(200).json({
    name: "Haris Shabbir Portfolio API",
    version: "1.0.0",
    endpoints: [
      {
        path: "/api",
        method: "GET",
        description: "API information"
      },
      {
        path: "/api/contact",
        method: "POST",
        description: "Submit contact form"
      },
      {
        path: "/api/health",
        method: "GET",
        description: "Health check endpoint"
      }
    ],
    message: "Welcome to the Haris Shabbir Portfolio API!"
  });
}