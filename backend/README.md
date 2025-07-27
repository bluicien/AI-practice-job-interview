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
│   ├── models/       # Database models
│   ├── routes/       # Express routes
│   ├── services/     # Business logic/services
│   └── app.js        # Express app entry
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
JWT_SECRET=<your-jwt-secret>
```
- `PORT`: Port for the server (default: 3000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret for JWT authentication

### 3. Start the server
```bash
npm start
```

## API Overview

### Authentication
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive a JWT

### Jobs
- `GET /api/jobs` — List all jobs
- `GET /api/jobs/:id` — Get job details

### Applications
- `POST /api/applications` — Submit a job application
- `GET /api/applications/:userId` — Get applications for a user

### Interviews
- `POST /api/interviews` — Schedule an interview
- `GET /api/interviews/:userId` — Get interviews for a user

> **Note:** All endpoints requiring authentication expect a JWT in the `Authorization` header.

## Services
- User management
- Job and application management
- Interview scheduling

## License
[Specify your license here]
