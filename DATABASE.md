# Database Switching Instructions

This portfolio application supports both PostgreSQL and MySQL databases.

## Using PostgreSQL (Default)

The application uses PostgreSQL by default, which is provided by Replit. 
To use PostgreSQL, set `STORAGE_TYPE=postgres` in your .env file.

## Using MySQL

To use MySQL:

1. Create a MySQL database server (locally or using a cloud provider)
2. Edit the .env file with your MySQL connection details:
   ```
   STORAGE_TYPE=mysql
   MYSQL_HOST=your-mysql-host
   MYSQL_PORT=3306
   MYSQL_USER=your-username
   MYSQL_PASSWORD=your-password
   MYSQL_DATABASE=portfolio
   MYSQL_DATABASE_URL=mysql://your-username:your-password@your-mysql-host:3306/portfolio
   ```
3. Run the MySQL migration script to create the database schema:
   ```
   ./mysql-migrate.sh
   ```
4. Restart the application

## Database Schema Migration

The MySQL migration script will generate and run the migration SQL for your MySQL database:
```
./mysql-migrate.sh
```

## Important Notes

- Always update both the individual MySQL connection parameters AND the MYSQL_DATABASE_URL
- For PostgreSQL, the connection is automatically handled by Replit
- The storage type can be switched by changing STORAGE_TYPE in the .env file

