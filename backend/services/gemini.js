require("dotenv").config(); // Load environment variables from .env file
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }); // Initialize GoogleGenAI with API key


async function sendMessageToAi(chatHistory) {
    const prompt = buildAiPrompt(chatHistory); // Build the AI prompt for a Software Engineer role
    
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });
    return response;
}

function buildAiPrompt(chatHistory) {
    const nextId = chatHistory.messageHistory.length > 0
    ? chatHistory.messageHistory[chatHistory.messageHistory.length - 1].id + 1 // Get the next message ID
    : 1; // Start from 1 if no messages exist

    const chatHistoryString = JSON.stringify(chatHistory, null, 2); // Convert chat history to a formatted string

    let aiPrompt = `
        You are an AI language model acting as an expert interviewer.
        Your task is to simulate **one single turn** of a job interview for the role of "${chatHistory.jobTitle}" at a small startup company.
        
        **Core Task:**
        Generate the interviewer's **immediate next response** based on the user's last message in the provided 'chatHistory' JSON object below.
        
        **Instructions:**
        
        1.  **Analyze Input:** Examine the 'chatHistory' JSON object, focusing on the **last message** from the 'User'.
        2.  **Generate Interviewer's Single Response:** Based *only* on the user's last message and the conversation context:
            *   Formulate **one single, relevant message** as the 'Interviewer'.
            *   This response should be either:
                *   A brief evaluation/acknowledgment followed by a pertinent follow-up question.
                *   A new, common interview question appropriate for the '${chatHistory.jobTitle}' role.
            *   If the user's last answer was very short/vague, ask for clarification or elaboration in this single response.
            *   Maintain a professional, formal, and encouraging tone.
            *   Do NOT repeat questions already present in the 'messageHistory'.
            *   Do NOT ask overly personal questions.
            *   **Crucially: Generate ONLY this single interviewer message for this turn. Do not add any further dialogue, user predictions, or subsequent interviewer questions within this response.**
        3.  **Construct Output Object:**
            *   Take the original 'chatHistory' object provided in the input.
            *   Create a *new* message object for your **single** response with:
                *   \`id\`: ${nextId}
                *   \`name\`: "Interviewer"
                *   \`message\`: The single response text generated in step 2.
            *   Append **only this single new message object** to the *end* of the 'messageHistory' array.
        4.  **Format Output:**
            *   Your **entire output** MUST be **only** the complete, updated 'chatHistory' object (containing exactly one new message from the Interviewer), formatted as a single, valid JSON string.
            *   Do **NOT** include *any* extra text, explanations, apologies, summaries, or markdown formatting like \`\`\`json ... \`\`\` around the JSON object. The response must start with \`{\` and end with \`}\`.
        
        **Input Data Schema:**
        ChatHistory = {
            jobTitle: string,
            messageHistory: Array<{
                id: number,
                name: string, // "Interviewer" or "User"
                message: string
            }>
        }
        
        **Input Data:**
        \`\`\`json
        ${chatHistoryString}
        \`\`\`
        
        Now, perform the **single turn**: generate the interviewer's next message, append it correctly, and return the complete, updated ChatHistory object as a valid JSON string. **Your task is complete after generating this single response and returning the updated JSON.**
        `;
    
    return aiPrompt;
}
module.exports = {
    sendMessageToAi
};