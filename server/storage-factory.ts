import { IStorage } from './storage';
import { storage as postgresStorage } from './storage';
import { mysqlStorage } from './mysql-storage';

// Environment variable to switch between storage types
// STORAGE_TYPE=mysql or STORAGE_TYPE=postgres
const storageType = process.env.STORAGE_TYPE || 'postgres';

// Get the appropriate storage implementation based on environment variable
export function getStorage(): IStorage {
  if (storageType.toLowerCase() === 'mysql') {
    console.log('Using MySQL storage implementation');
    return mysqlStorage;
  } else {
    console.log('Using PostgreSQL storage implementation');
    return postgresStorage;
  }
}