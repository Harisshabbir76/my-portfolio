import type { Express } from "express";
import { createServer, type Server } from "http";
import { getStorage } from "./storage-factory";
import { z } from "zod";
import { contactFormSchema } from "@shared/schema";

// Get the appropriate storage implementation - lazy load for better serverless performance
let storageInstance: ReturnType<typeof getStorage> | null = null;

const getStorageInstance = () => {
  if (!storageInstance) {
    storageInstance = getStorage();
  }
  return storageInstance;
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint for Vercel
  app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const storage = getStorageInstance();
      const validation = contactFormSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: validation.error.format() 
        });
      }
      
      const { name, email, message } = validation.data;
      
      const contact = await storage.saveContactMessage({
        name,
        email,
        message
      });
      
      return res.status(200).json({ 
        message: "Contact message sent successfully",
        contact 
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      return res.status(500).json({ message: "Server error. Please try again later." });
    }
  });

  // Create HTTP server (for development only)
  const httpServer = createServer(app);

  return httpServer;
}
