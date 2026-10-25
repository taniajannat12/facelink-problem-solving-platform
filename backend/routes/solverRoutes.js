
const express = require("express");
const router = express.Router();

const profile = {
  id: "C221001",
  name: "Rahim Hasan",
  email: "rahim@example.com",
  role: "Solver",
  title: "Full Stack Developer · Web Problem Solver",
  verified: true,
  available: true,
  about:
    "Rahim helps developers understand difficult technical issues, debug errors, and find practical solutions. His focus is on clear explanations rather than simply giving an answer.",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
  ],
  problemsSolved: 42,
  satisfaction: 86,
  fullySatisfied: 24,
  satisfied: 10,
  partial: 3,
  peopleHelped: 31,
  joined: "September 2026",
};

const problems = [
  {
    id: "SP001",
    title: "Next.js authentication issue",
    category: "Authentication",
    satisfaction: 100,
    seeker: "Nabila Hasan",
  },
  {
    id: "SP002",
    title: "MongoDB connection problem",
    category: "Database",
    satisfaction: 60,
    seeker: "Tanvir Ahmed",
  },
  {
    id: "SP003",
    title: "React state management issue",
    category: "React",
    satisfaction: 100,
    seeker: "Nusrat Jahan",
  },
];

router.get("/profile", (req, res) => {
  res.json({
    success: true,
    profile,
    problems,
  });
});

module.exports = router;
