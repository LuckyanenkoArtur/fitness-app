#!/bin/bash
set -e

echo "--------------------------------Edhooo----------------------------------------"

# Wait for PostgreSQL to be ready
until pg_isready -U "$POSTGRES_USER" -d "$POSTGRES_DB"; do
  echo "Waiting for PostgreSQL to be ready..."
  sleep 2
done

echo "Restoring database..."
pg_restore -U "$POSTGRES_USER" -d "$POSTGRES_DB" -v --clean --if-exists /docker-entrypoint-initdb.d/fit_today.sql

if [ $? -eq 0 ]; then
    echo "----------Database restored successfully.--------------------------"
else
    echo "Database restoration failed."
    exit 1
fi