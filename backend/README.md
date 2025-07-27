# Backend (Express.js API)

This is the backend server for the Mock Job Interview Application. It provides RESTful API endpoints to support the interview simulation process, including user authentication, job listings, application submissions, and interview management.

## Features
- User authentication (register, login)
- Job listings and details
- Application submission and status tracking
- Interview scheduling and management
- API endpoints for client consumption

## Project Structure
```
backend/
├── src/            # Source code
│   ├── controllers/  # Route controllers
│   └── server.js     # Express app entry
├── .env            # Environment variables
├── package.json    # Dependencies and scripts
└── ...
```

## Setup & Running

### 1. Install dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the `backend/` directory. Example variables:
```
PORT=3000
MONGODB_URI=<your-mongodb-connection-string>
```
- `PORT`: Port for the server (default: 3000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret for JWT authentication

### 3. Start the server
```bash
npm start
```

## API Overview

### Interviews
- `POST /api/interviews` — Send and receive messages to AI API

## Services
- Gemini AI Chat 

## License
MIT
