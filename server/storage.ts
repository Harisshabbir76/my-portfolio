import { users, contactMessages, type User, type InsertUser, type ContactMessage, type InsertContact } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// Define storage interface
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactMessage(contact: InsertContact): Promise<ContactMessage>;
}

// Database storage implementation
export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async saveContactMessage(contactData: InsertContact): Promise<ContactMessage> {
    const [contact] = await db.insert(contactMessages).values(contactData).returning();
    console.log('Contact message saved to database:', contact);
    return contact;
  }
}

// Use Database Storage
export const storage = new DatabaseStorage();
