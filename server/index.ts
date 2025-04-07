import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { getMySQLDB } from "./mysql-db";
import * as dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Add CORS support for Vercel deployment
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Database initialization function
const initializeDatabase = async () => {
  // Initialize MySQL database connection if MYSQL_DATABASE_URL is available
  if (process.env.MYSQL_DATABASE_URL) {
    try {
      const mysqlDb = await getMySQLDB();
      if (mysqlDb) {
        log("MySQL database connected successfully");
      } else {
        log("Failed to connect to MySQL database");
      }
    } catch (error) {
      log(`MySQL database connection error: ${error}`);
    }
  }
};

// Setup error handling
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({ message });
  console.error(err);
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  (async () => {
    await initializeDatabase();
    const server = await registerRoutes(app);

    // Development server setup
    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    // Local server (not used in Vercel)
    const port = process.env.PORT || 5000;
    server.listen({
      port,
      host: "0.0.0.0",
      reusePort: true,
    }, () => {
      log(`serving on port ${port}`);
    });
  })();
} else {
  // Initialize database
  initializeDatabase();
  // Register API routes
  registerRoutes(app);
}

// Export the Express app for Vercel serverless function
export default app;
