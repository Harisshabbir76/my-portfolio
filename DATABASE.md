# Database Switching Instructions

This portfolio application supports both PostgreSQL and MySQL databases.

## Using PostgreSQL (Default)

The application uses PostgreSQL by default, which is provided by Replit. 
No additional configuration is needed.

## Switching to MySQL

To switch to MySQL:

1. Create a MySQL database server (locally or using a cloud provider)
2. Copy .env.mysql to .env and update the MySQL connection URL:
   ```
   cp .env.mysql .env
   ```
3. Edit the .env file with your MySQL connection details
4. Restart the application

## Migrating MySQL Database Schema

To create/update the MySQL database schema:
```
./mysql-migrate.sh
```

This will generate and run the migration SQL for the MySQL database.

## Environment Variables

- STORAGE_TYPE: Set to "postgres" or "mysql" to select the database type
- MYSQL_DATABASE_URL: MySQL connection URL (when using MySQL)

