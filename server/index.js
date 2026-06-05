const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");
require("dotenv").config({ path: "../.env" });

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  try {
    // Filter out the initial assistant greeting if it's the first message
    // Gemini API requires the conversation history to start with a 'user' message
    let filteredMessages = messages;
    if (filteredMessages.length > 0 && filteredMessages[0].role === "assistant") {
      filteredMessages = filteredMessages.slice(1);
    }

    // Map the remaining messages to the Gemini contents structure
    const contents = filteredMessages.map(msg => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        systemInstruction: "You are a helpful, friendly AI assistant."
      }
    });

    res.json({ reply: response.text });
  } catch (error) {
    console.error("Gemini error:", error.message);
    res.status(500).json({ error: error.message || "Something went wrong." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(Server running on http://localhost:));