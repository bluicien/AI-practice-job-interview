require("dotenv").config(); // Load environment variables from .env file
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }); // Initialize GoogleGenAI with API key


async function sendMessageToAi() {
    const prompt = buildAiPrompt("Software Engineer"); // Build the AI prompt for a Software Engineer role
    
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });
    console.log(response)
    return response;
}

function buildAiPrompt(chatHistory) {
    let aiPrompt = `You are an expert interviewer simulating a job interview for a ${jobTitle} at a small startup company. 
        Your job is to ask the user common questions relevant to the role, evaluate their response provide feedback and ask either a new question or a question relevant to the user's response. 
        You can ask questions about the user questions about themselves to evaluate their personality or you can ask questions related to the role, but do not ask personal questions. 
        If the user answers in a single word or sentence, you can ask them to explain more. Keep the interview formal and do not go off-topic. Keep track of the conversation history and do not repeat the same or similar questions.
        Respond to me in the following Schema:

        JobTitle = string
        Message = { id: number, name: string, message: string }
        ChatHistory = {
            jobTitle: JobTitle,
            messageHistory: Message[]
        }
        Return: ChatHistory

        Your response should add to the messageHistory in the provided object below:
        ${chatHistory}
        `;

    return aiPrompt;
}

const chatHistory = {
    "jobTitle": "${jobTitle}",
    "messageHistory": [
        {
            "id": 1,
            "name": "Interviewer",
            "message": "What is your greatest strength?"
        },
        {
            "id": 2,
            "name": "User",
            "message": "My greatest strength is my problem-solving skills."
        },
        {
            "id": 3,
            "name": "Interviewer",
            "message": "That's great to hear. Could you describe a specific situation where your problem-solving skills were crucial in overcoming a significant challenge, and what was the outcome?"
        },
        {
            "id": 4,
            "name": "User",
            "message": "In my last project, we faced a major bug that caused the application to crash. I quickly identified the root cause and implemented a fix within hours, preventing a potential delay in our release schedule."
        }
    ]
}

module.exports = {
    sendMessageToAi
};