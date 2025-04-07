import { VercelRequest, VercelResponse } from '@vercel/node';
import { contactFormSchema } from '../shared/schema';
import { z } from 'zod';

// Simple serverless contact form handler for Vercel
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate the incoming data
    const formData = contactFormSchema.parse(req.body);

    // In a real-world scenario, you would:
    // 1. Save the message to a database
    // 2. Send an email notification
    // 3. Or integrate with a service like SendGrid, Mailchimp, etc.
    
    console.log('Contact form submission:', formData);

    // For now, just acknowledge receipt
    return res.status(200).json({ 
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });
  } catch (error) {
    console.error('Contact form validation error:', error);
    
    // If it's a Zod validation error, return the formatted errors
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        errors: error.errors 
      });
    }
    
    // For any other error
    return res.status(500).json({ 
      success: false,
      message: 'Something went wrong. Please try again later.'
    });
  }
}