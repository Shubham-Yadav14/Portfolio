export const projects = [
  {
    name: "CVMindAi",
    description: "An AI-powered resume builder with customizable LaTeX templates, live PDF preview, source-code editing, and direct PDF download.",
    features: [
      "Built an AI-powered resume builder with customizable LaTeX templates, live PDF preview, source-code editing, and direct PDF download",
      "Developed an AI chat interface that streams LaTeX code updates in real time from natural-language requests and dynamically updates the compiled resume preview",
      "Engineered resume project lifecycle management with archive, restore, soft delete, hard delete, and persistent project storage",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "LaTeX", "OpenAI API", "OAuth", "JWT", "Tailwind CSS"],
    liveUrl: "https://cvmindai.netlify.app/",
    githubUrl: "https://github.com/Shubham-Yadav14/CVMindAi",
  },
  {
    name: "QuizMind AI",
    description: "Real-time AI quiz answering system handling concurrent requests with sub-second response times using FastAPI and asynchronous execution.",
    features: [
      "Built a real-time AI quiz answering system handling concurrent requests with sub-second response times using FastAPI and asynchronous execution",
      "Implemented MCQ-aware prompt engineering with subject-context optimization to generate accurate option-only responses",
      "Designed a stateless and scalable backend architecture with REST APIs and AI orchestration using OpenAI and Gemini APIs",
    ],
    technologies: ["Next.js", "TypeScript", "FastAPI", "OpenAI API", "Gemini API"],
    liveUrl: "https://answermyquiz.netlify.app/",
    githubUrl: "https://github.com/Shubham-Yadav14/QuizMinds-AI",
  },
];
