import mysql from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';
import * as schema from '../shared/mysql-schema';

// MySQL connection configuration
const connectionConfig = {
  uri: process.env.MYSQL_DATABASE_URL || 'mysql://root:password@localhost:3306/portfolio'
};

let connection: mysql.Pool | null = null;
let db: ReturnType<typeof drizzle<typeof schema>> | null = null;

// Create MySQL connection
export const createMySQLConnection = async () => {
  if (!connection) {
    connection = mysql.createPool(connectionConfig.uri);
    console.log('MySQL connection pool created');
  }
  return connection;
};

// Get MySQL database instance
export const getMySQLDB = async () => {
  if (!db) {
    try {
      const conn = await createMySQLConnection();
      // Specify mode as 'default' to fix the DrizzleError
      db = drizzle(conn, { schema, mode: 'default' });
      console.log('MySQL Drizzle instance created');
    } catch (error) {
      console.error('Failed to initialize MySQL connection:', error);
      return null;
    }
  }
  return db;
};