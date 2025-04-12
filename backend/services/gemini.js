require("dotenv").config(); // Load environment variables from .env file
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }); // Initialize GoogleGenAI with API key

async function sendMessageToAi() {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: "Explain how AI works",
    });
    console.log(response)
    return response;
}

module.exports = {
    sendMessageToAi
};