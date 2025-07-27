# Frontend (React + Vite)

This is the client-side application for the Mock Job Interview Application. It provides a user-friendly interface for job seekers to browse job listings, apply for jobs, and manage their interview process.

## Features
- User registration and login
- Browse and search job listings
- View job details
- Submit job applications
- Track application status
- View and manage interview schedules

## Site Flow
1. **Authentication**: Users can register or log in to access the platform.
2. **Job Listings**: After login, users can browse available jobs and view details.
3. **Application**: Users can apply for jobs directly from the job details page.
4. **Application Tracking**: Users can view the status of their applications.
5. **Interviews**: If selected, users can view and manage their interview schedule.

## Project Structure
```
frontend/
├── src/            # React source code
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page components
│   ├── services/     # API calls and utilities
│   └── main.jsx      # App entry point
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
Create a `.env` file in the `frontend/` directory. Example variables:
```
VITE_API_URL=http://localhost:3000
```
- `VITE_API_URL`: The base URL for the backend API (default: http://localhost:3000)

### 3. Start the development server
```bash
npm run dev
```

The app will be available at http://localhost:5173 by default.

## License
[Specify your license here]
