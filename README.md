# AI Chatbot 🤖

A full-stack, responsive AI chatbot built with a **React** (Vite) frontend and a **Node.js + Express** backend, powered by the **Google Gemini API** (`gemini-2.5-flash`). It features dynamic date grounding, connection failure alerts, custom retry logic, and a premium glassmorphic dark-mode interface.

---

## Features

- **Google Gemini Integration**: Uses the new official `@google/genai` SDK and runs on `gemini-2.5-flash` for fast, cost-effective, and smart responses.
- **Dynamic Grounding**: Automatically injects current system dates into the instructions so the AI assistant always knows the current date and stays up-to-date with current affairs.
- **Error Resiliency**: Features custom exponential backoff retry logic (up to 3 retries) on the backend specifically to handle transient `503 Service Unavailable` API spikes on Gemini's free tier.
- **Improved Error Visibility**: The UI catches fetch failures and details actual API error states (like invalid API keys) instead of failing silently.
- **Premium UI/UX Overhaul**: Built with the sleek `Plus Jakarta Sans` font, featuring a premium space-gradient backdrop, a dark glassmorphism card layout, message fade-in slide animations, and floating avatar micro-interactions.

---

## Project Structure

```text
ai-chatbot/
├── client/        # React frontend (Vite)
├── server/        # Node.js + Express backend (Vercel Serverless ready)
└── .env           # Environment credentials (never commit this!)
```

---

## Local Development Setup

### 1. Configure Environment Variables
Create or open your root `.env` file and configure your API key:
```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
```
*Note: You can get a free Gemini API key from [Google AI Studio](https://aistudio.google.com).*

### 2. Start the Backend
```bash
cd server
npm install
npm run dev
```
The server will run locally on `http://localhost:5000`.

### 3. Start the Frontend
```bash
cd client
npm install
npm run dev
```
The client will run locally on `http://localhost:3001` (or `http://localhost:3000`).

---

