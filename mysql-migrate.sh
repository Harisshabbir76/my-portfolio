#!/bin/bash

# Generate migration SQL
echo "Generating MySQL migration SQL..."
npx tsx -r dotenv/config ./node_modules/drizzle-kit/bin.cjs generate:mysql --config=drizzle-mysql.config.ts

# Apply migrations to database
echo "Applying migrations to MySQL database..."
npx tsx -r dotenv/config ./node_modules/drizzle-kit/bin.cjs push:mysql --config=drizzle-mysql.config.ts

echo "MySQL migration complete!"
