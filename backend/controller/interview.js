const { sendMessageToAi } = require("../services/gemini");
console.log(sendMessageToAi); // This should log the function definition

const interview = async (req, res) => {
    try {
        const responseMeessage = await sendMessageToAi();
        res.status(200).json({ message: responseMeessage });
    }
    catch (error) {
        console.error("Error in interview controller:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    interview
}