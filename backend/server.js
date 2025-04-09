require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000'; // Fallback to localhost
if (!process.env.FRONTEND_URL) {
    console.warn('FRONTEND_URL is not set in the environment variables. Defaulting to http://localhost:3000');
}

const corsOptions = {
    origin: frontendUrl, // Set your frontend URL in env file
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/interview', (req, res) => {
        res.send('Hello World!');
    }   
);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
    }
);

