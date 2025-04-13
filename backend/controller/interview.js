const { sendMessageToAi } = require("../services/gemini");

const interview = async (req, res) => {
    const requestBody = req.body; // Get the request body from the client
    console.log(requestBody); // Log the request body for debugging
    
    try {
        const responseMessage = await sendMessageToAi(requestBody); // Send the request body to the AI service
        let message = responseMessage.candidates[0].content.parts[0].text
        console.log(message);
        
        message = message.replace(/```json\n|```/g, ""); // Remove code block markers

        const startOfJson = message.indexOf("{"); // Find the start of the JSON object
        const endOfJson = message.lastIndexOf("}") + 1; // Find the end of the JSON object and add 1 to include the closing brace
        const jsonString = message.substring(startOfJson, endOfJson); // Remove any excess content from Gemini response that is not JSON.
        
        const cleanAiResponse = JSON.parse(jsonString); // Parse the JSON string to an object
        res.status(200).json({ message: cleanAiResponse });
    }
    catch (error) {
        console.error("Error in interview controller:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    interview
}