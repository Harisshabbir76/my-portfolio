import { users, type User, type InsertUser, type ContactMessage, type InsertContact } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactMessage(contact: InsertContact): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  currentUserId: number;
  currentContactId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveContactMessage(contactData: InsertContact): Promise<ContactMessage> {
    const id = this.currentContactId++;
    const createdAt = new Date();
    const contact: ContactMessage = { 
      ...contactData, 
      id, 
      createdAt 
    };
    this.contactMessages.set(id, contact);
    console.log('Contact message saved:', contact);
    return contact;
  }
}

export const storage = new MemStorage();
