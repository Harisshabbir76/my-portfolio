import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
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

  const httpServer = createServer(app);

  return httpServer;
}
