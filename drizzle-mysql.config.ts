import { defineConfig } from "drizzle-kit";
import * as dotenv from 'dotenv';

dotenv.config();

// Check for MySQL database URL
const connectionString = process.env.MYSQL_DATABASE_URL || 'mysql://root:password@localhost:3306/portfolio';

// Export drizzle configuration
export default defineConfig({
  dialect: "mysql",
  out: "./mysql-migrations",
  schema: "./shared/mysql-schema.ts",
  // Using mysql2 as the driver
  driver: "mysql2" as any,
  // Using MySQL connection string 
  dbCredentials: {
    // @ts-ignore - Force connection string to work with type system
    connectionString,
  } as any,
});