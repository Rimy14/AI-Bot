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

## Production Deployment (Vercel)

This application is fully pre-configured to deploy on **Vercel** for free with **zero credit card required**.

### Step 1: Deploy the Backend
1. Sign in to your [Vercel Dashboard](https://vercel.com/) and click **Add New...** > **Project**.
2. Import this repository.
3. Name the project (e.g., `ai-bot-backend`) and set the **Root Directory** to `server`.
4. In **Environment Variables**, add:
   - **Key:** `GEMINI_API_KEY`
   - **Value:** *[Your actual Gemini API Key]*
5. Click **Deploy**.
6. Copy the deployed live backend URL (e.g., `https://ai-bot-backend.vercel.app`).

### Step 2: Link Frontend to Backend
1. In [`client/src/App.jsx`](client/src/App.jsx), update the fetch URL on line 26:
   ```javascript
   const res = await fetch("https://your-backend-name.vercel.app/api/chat", {
   ```
2. Commit and push this change to your GitHub repository:
   ```bash
   git add client/src/App.jsx
   git commit -m "chore: point client to production vercel API URL"
   git push origin main
   ```

### Step 3: Deploy the Frontend
1. Back on Vercel, click **Add New...** > **Project** and import this repository again.
2. Name the project (e.g., `ai-bot-frontend`) and set the **Root Directory** to `client`.
3. Click **Deploy**. Vercel will automatically build the static assets and serve your live chatbot!
