// Imports and configuration
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { interview } = require('./controller/interview.js');

// Initialize the Express application
const app = express();

// Get the base URL for frontend from environment variables or use a default value.
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000'; // Fallback to localhost
if (!process.env.FRONTEND_URL) {
    console.warn('FRONTEND_URL is not set in the environment variables. Defaulting to http://localhost:3000');
}

const corsOptions = {
    origin: frontendUrl, // Set your frontend URL in env file
};

app.use(cors(corsOptions)); // Set CORS options to allow requests from the frontend URL
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.post('/api/interview', interview); // Endpoint for interview

app.get('/', (req, res) => {
    res.send('Welcome to the Interview API!'); // Basic welcome message for the root endpoint
});

// Running the server
app.listen(process.env.PORT || 3000, () => {
    const port = process.env.PORT || 3000;
    console.log(`Server is running on http://localhost:${port}`); // Log the correct server URL
});

