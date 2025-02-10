const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS to allow requests from any origin
const corsOptions = {
  origin: "*", // Allow all origins (For production, replace * with specific domains)
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));
app.use(express.json());

// Middleware to set CSP Headers
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "connect-src 'self' https://qodeways-mock-apis.onrender.com"
  );
  next();
});

// Mock Jobs API
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp Solutions",
    location: "Pune, India",
    salary: "₹6 LPA",
    type: "Full-Time",
    experience: "0-2 years",
    skills: ["React.js", "JavaScript", "CSS", "Redux"],
  },
  {
    id: 2,
    title: "React Developer",
    company: "WebSolutions Pvt Ltd",
    location: "Mumbai, India",
    salary: "₹5.5 LPA",
    type: "Full-Time",
    experience: "1-3 years",
    skills: ["React.js", "Next.js", "TypeScript"],
  },
];

// API route to fetch job listings
app.get("/api/jobs", (req, res) => {
  res.json(jobs);
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
