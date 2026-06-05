# AI Chatbot 🤖

A full-stack AI chatbot built with React + Node.js + OpenAI.

## Project Structure
```
ai-chatbot/
├── client/        # React frontend (Vite)
├── server/        # Node.js + Express backend
└── .env           # API keys (never commit this!)
```

## Setup & Run

### 1. Add your OpenAI API key
Edit `.env` and replace `your_openai_api_key_here` with your real key from https://platform.openai.com

### 2. Start the backend
```bash
cd server
npm install
npm run dev
```
Server runs on http://localhost:5000

### 3. Start the frontend
```bash
cd client
npm install
npm run dev
```
Frontend runs on http://localhost:3000

## Tech Stack
- **Frontend**: React 18, Vite, CSS
- **Backend**: Node.js, Express
- **AI**: OpenAI GPT-3.5-turbo

## Features
- Real-time AI responses
- Typing indicator
- Chat history in session
- Clean responsive UI
