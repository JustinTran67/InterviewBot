# 🤖 InterviewBot

A full-stack AI-powered mock interview platform that generates tailored interview questions, provides text-to-speech capabilities, and delivers comprehensive performance analysis using OpenAI's API.

## 🚀 Features

- **AI-Generated Questions**: Dynamically generates 5-7 role-specific interview questions using OpenAI's GPT-4o-mini
- **Text-to-Speech Integration**: Interactive bot avatar that reads questions aloud using OpenAI's TTS API
- **Intelligent Analysis**: Comprehensive feedback on interview responses with scoring across multiple dimensions:
  - Clarity
  - Relevance to role
  - Sentiment
  - Overall performance (1-10 scale)
- **Interactive UI**: Smooth navigation between questions with visual feedback
- **Real-time Feedback**: Detailed strengths, areas for improvement, and actionable insights

## 🛠️ Tech Stack

### Frontend
- **React** 19.2.0 - Component-based UI framework
- **React Router DOM** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **JavaScript**

### Backend
- **Django** 6.0 - Python web framework
- **Django REST Framework** - RESTful API development
- **OpenAI API** - AI question generation, response analysis, and TTS

## 📁 Project Structure

```
InterviewBot/
├── frontend/                # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Home.jsx
│   │   │   ├── Question.jsx
│   │   │   ├── Analysis.jsx
│   │   │   └── PlayAudio.jsx
│   │   ├── pages/          # Route-based page components
│   │   ├── assets/         # Images and icons
│   │   └── App.jsx         # Main app component
│   └── package.json
│
├── backend/                 # Django backend API
│   ├── api/
│   │   └── views.py        # API endpoints
│   ├── backend/
│   │   ├── settings.py     # Django configuration
│   │   └── urls.py         # URL routing
│   ├── manage.py
│   └── requirements.txt
│
└── README.md
```

## 🎯 How It Works

1. **Job Role Input**: User enters their desired job role (e.g., "Senior Software Engineer")
2. **Question Generation**: Backend sends role to OpenAI API, which generates relevant interview questions
3. **Interactive Interview**: User navigates through questions, with optional TTS playback
4. **Response Submission**: User answers are sent to backend for AI analysis
5. **Comprehensive Analysis**: AI evaluates responses across multiple dimensions and provides detailed feedback

## 🔧 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/generate-questions/` | POST | Generates interview questions for specified job role |
| `/api/analyze-response/` | POST | Analyzes user responses and returns feedback |
| `/api/tts/` | POST | Converts text to speech and returns audio file |

## 📦 Installation

### Prerequisites
- Node.js (v14+)
- Python (v3.8+)
- OpenAI API Key

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the backend directory:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

5. Run migrations:
```bash
python manage.py migrate
```

6. Start the development server:
```bash
python manage.py runserver
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory:
```env
VITE_API_BASE=http://localhost:8000
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 💡 Key Implementation Highlights

- **RESTful API Design**: Clean separation between frontend and backend with Django REST Framework
- **Error Handling**: Comprehensive try-catch blocks and user feedback for failed API calls
- **State Management**: React hooks (useState, useEffect) for managing application state
- **Dynamic Routing**: React Router for seamless navigation between pages
- **Audio Playback**: Custom component with visual feedback for TTS functionality

## 🎨 UI/UX Features

- Smooth fade-in animations on page load
- Color-coded scoring system (green/yellow/red) for quick visual feedback
- Loading states for asynchronous operations
- Disabled states for navigation controls
- Interactive bot avatar with speaking animations
- Responsive layout for mobile and desktop

## 👤 Developer

**Justin Tran**
- GitHub: [@JustinTran67](https://github.com/JustinTran67)
- LinkedIn: [justin-tin-tran](https://www.linkedin.com/in/justin-tin-tran/)

## 🙏 Acknowledgments

- OpenAI for providing the GPT and TTS APIs

