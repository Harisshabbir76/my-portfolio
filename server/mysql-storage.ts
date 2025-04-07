import { users, contactMessages, type User, type InsertUser, type ContactMessage, type InsertContact } from "../shared/mysql-schema";
import { getMySQLDB } from "./mysql-db";
import { eq } from "drizzle-orm";
import { IStorage } from "./storage";

// MySQL storage implementation
export class MySQLStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const db = await getMySQLDB();
    if (!db) throw new Error("MySQL database connection failed");
    
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const db = await getMySQLDB();
    if (!db) throw new Error("MySQL database connection failed");
    
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const db = await getMySQLDB();
    if (!db) throw new Error("MySQL database connection failed");
    
    // Insert the user and get the ID
    const result = await db.insert(users).values(insertUser);
    // MySQL inserts return metadata differently
    const insertIdResult = (result as unknown as { insertId: number });
    const userId = insertIdResult.insertId;
    
    // Fetch the newly created user
    const [user] = await db.select().from(users).where(eq(users.id, userId));
    
    if (!user) throw new Error("Failed to create user");
    return user;
  }

  async saveContactMessage(contactData: InsertContact): Promise<ContactMessage> {
    const db = await getMySQLDB();
    if (!db) throw new Error("MySQL database connection failed");
    
    // Insert the contact message and get the ID
    const result = await db.insert(contactMessages).values(contactData);
    // MySQL inserts return metadata differently
    const insertIdResult = (result as unknown as { insertId: number });
    const contactId = insertIdResult.insertId;
    
    // Fetch the newly created contact message
    const [contact] = await db.select().from(contactMessages).where(eq(contactMessages.id, contactId));
    
    if (!contact) throw new Error("Failed to save contact message");
    console.log('Contact message saved to MySQL database:', contact);
    return contact;
  }
}

// Create an instance of MySQL storage
export const mysqlStorage = new MySQLStorage();