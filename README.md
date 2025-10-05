# Simple Inventory Management System - Starter Project

## Overview
This is a starter ExpressJS + Mongoose project for the "Simple Inventory Management System" assignment.

## Requirements
- Node.js (v14+)
- MongoDB (Atlas or local)

## Setup
1. Clone the repo.
2. Install dependencies:
```
npm install
```
3. Set environment variable `MONGO_URI` if using MongoDB Atlas. Example:
```
export MONGO_URI='your-mongodb-connection-string'
```
4. Start the server:
```
npm start
```
Server runs on port 3000 by default.

## Endpoints
- `GET /`  
  Response: `Inventory API is Running`

- `GET /health`  
  Response: `{ status: 'ok', uptime: <seconds> }`

- `POST /items`  
  Body JSON: `{ "name": "Item name", "quantity": 10, "price": 99.99 }`  
  Adds a new item.

- `GET /items`  
  Returns list of items.

## Testing with Postman
A sample Postman collection is included as `postman_collection.json`. Import it into Postman and run the requests.

## Submission
- Upload the project to GitHub.
- Include exported Postman collection or screenshots.
