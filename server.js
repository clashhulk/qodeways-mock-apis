const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Pune",
    salary: "₹6 LPA",
  },
  {
    id: 2,
    title: "React Developer",
    company: "WebSolutions",
    location: "Mumbai",
    salary: "₹5 LPA",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignX",
    location: "Bangalore",
    salary: "₹7 LPA",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Innovate Inc",
    location: "Delhi",
    salary: "₹8 LPA",
  },
];

app.get("/api/jobs", (req, res) => {
  res.json(jobs);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
