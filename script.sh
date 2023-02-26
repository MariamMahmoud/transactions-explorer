#!/bin/bash
set -e

echo "Waiting for Postgres to start..."
# until  psql --help  2>/dev/null; do
#   sleep 1
# done

until PGPASSWORD=mysecretpassword psql -d "$POSTGRES_DB" -h "$POSTGRES_HOST" -U "$POSTGRES_USER" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done
echo "Postgres is up and running!"

echo "Creating user and database..."

PGPASSWORD=$POSTGRES_PASSWORD psql -v ON_ERROR_STOP=1 -d "$POSTGRES_DB" -h "$POSTGRES_HOST" -U "$POSTGRES_USER"  <<-EOSQL
    CREATE USER myAdmin WITH PASSWORD 'mysecretpassword';
    CREATE DATABASE transactionsDB;
    GRANT ALL PRIVILEGES ON DATABASE transactionsDB TO myAdmin;
EOSQL

echo "User and database created!"



#Install dependencies
npm install
# Generate prisma client, types
npm run prisma-generate

echo "Running Migrations"
npm run db:migrate

echo "Seeding Database"
npm run db:seed

# Start the Node.js application
npm start
