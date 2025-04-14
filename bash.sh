#!/usr/bin/env bash

npm i express mongoose dotenv cors class-validator http-errors http-status-codes helmet winston cookie-parser express-rate-limit
npm i --save-dev typescript ts-node @types/node @types/express @types/mongoose @types/cors @types/cookie-parser @types/helmet @types/http-errors @types/http-status-codes @types/express-rate-limit @types/winston

if [ ! -f .env ] && [ -f .env.example ]; then
  cp .env.example .env
  echo ".env file created from .env.example ✅"
elif [ -f .env ]; then
  echo ".env already exists ✅"
else
  echo "❌ .env.example not found!"
fi