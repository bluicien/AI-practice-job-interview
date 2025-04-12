const { sendMessageToAi } = require("../services/gemini");

const interview = async (req, res) => {
    // const requestBody = req.body; // Get the request body from the client
    // const { jobTitle, messageHistory } = requestBody; // Destructure the job title and message history from the request body

    try {
        const responseMessage = await sendMessageToAi();
        let message = responseMessage.candidates[0].content.parts[0].text
        
        message = message.replace(/```json\n|```/g, "");
        // Remove any excess content from Gemini response that is not JSON.
        const startOfJson = message.indexOf("{"); // Find the start of the JSON object
        const endOfJson = message.lastIndexOf("}") + 1; // Find the end of the JSON object and add 1 to include the closing brace
        const jsonString = message.substring(startOfJson, endOfJson);

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