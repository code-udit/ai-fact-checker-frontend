# AI Fact Checker Frontend

### 👨‍💻 Developed By

**Udit U Gunagi**

The AI Fact Checker frontend is a modern web application built to analyze text or URLs and determine whether the content is True, Misleading, or False.

It provides:

- A clean and intuitive UI
- Real-time analysis results
- Visual trust score representation
- Detailed claim-by-claim breakdown
- Detection of manipulation patterns like clickbait, fear, and exaggeration

---

## 🔗 Links

### 🌐 Live Demo
https://ai-fact-checker-frontend.vercel.app/

### 💻 Frontend Repository
https://github.com/code-udit/ai-fact-checker-frontend.git

### ⚙️ Backend Repository
https://github.com/code-udit/ai-fact-checker-backend.git

---

🎯 Key Features

- Text & URL Input
  Users can paste content or provide a URL for analysis.

- AI-Based Verdict System
  Displays verdict (True / False / Misleading) with a trust score.

- Claims Analysis
  Breaks content into individual claims and explains each verdict.

- Pattern Detection
  Identifies manipulation techniques:
  
  - Clickbait
  - Fear-based language
  - Exaggeration

- Highlighted Text
  Important phrases are visually highlighted for quick understanding.

- Clean UI & UX
  
  - Minimal design (non-AI-looking interface)
  - Smooth transitions
  - Responsive layout

---

🧱 Tech Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- HTTP Client: Axios
- UI Components: React Circular Progressbar

---

📂 Project Structure

app/
 ├── page.tsx

components/
 ├── ResultCard.tsx
 ├── ClaimsList.tsx
 ├── PatternsList.tsx
 ├── HighlightedText.tsx

services/
 ├── api.ts

types/
 ├── index.ts

---

⚙️ Setup Instructions

1. Clone the repository

git clone <repo-url>
cd <project-folder>

2. Install dependencies

npm install

3. Run the development server

npm run dev

4. Open in browser

http://localhost:3000

---

🔗 Backend Integration

The frontend connects to a FastAPI backend:

http://127.0.0.1:8000/api/analyze

Make sure the backend server is running before testing.

---

🧠 How It Works

1. User inputs text or URL
2. Request is sent to backend API
3. Backend processes:
   - Claim extraction
   - LLM-based verification
   - Pattern detection
4. Frontend displays:
   - Verdict + score
   - Claims analysis
   - Detected patterns
   - Highlighted content

---

💡 Highlights of the Project

- Combines AI + rule-based detection (hybrid system)
- Handles false positives using context-aware logic
- Designed with real-world misinformation scenarios
- Clean modular architecture for scalability

---

📌 Future Improvements

- Dark/Light theme toggle
- Save analysis history
- Export reports (PDF)
- Real-time news verification

---

## 👨‍💻 Author

Developed by **Udit U Gunagi**

---

✅ Conclusion

This frontend focuses on delivering a simple, fast, and visually clear fact-checking experience, making complex AI analysis easy to understand for users.

