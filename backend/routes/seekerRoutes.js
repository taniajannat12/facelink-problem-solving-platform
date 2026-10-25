
const express = require("express");
const router = express.Router();

let profile = {
  id: "C221002",
  name: "Arpita Rahman",
  email: "arpita@example.com",
  role: "Seeker",
  location: "Chattogram, Bangladesh",
  joined: "September 2026",
  bio: "I use FaceLink to connect with people who can help me understand technical problems, learn from real discussions and find practical solutions.",
  about:
    "Currently exploring full-stack web development and building projects with React, Next.js, Node.js and MongoDB.",
  interests: ["Web Development", "Next.js", "React", "MongoDB", "Learning"],
  connections: 8,
};

const problems = [
  {
    id: "P001",
    title: "Next.js Authentication Problem",
    category: "Next.js",
    status: "In Progress",
    solver: "Arif Hasan",
  },
  {
    id: "P002",
    title: "MongoDB Connection Error",
    category: "MongoDB",
    status: "Solved",
    solver: "Rahim Hasan",
  },
  {
    id: "P003",
    title: "React State Management",
    category: "React",
    status: "Solved",
    solver: "FaceLink AI",
  },
];

router.get("/profile", (req, res) => {
  res.json({
    success: true,
    profile,
    stats: {
      totalProblems: 18,
      solvedProblems: 15,
      connections: profile.connections,
    },
    problems,
  });
});

router.put("/profile", (req, res) => {
  const { name, email, location, bio, about, interests } = req.body;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !email.trim()
  ) {
    return res.status(400).json({
      success: false,
      message: "Name and email are required.",
    });
  }

  if (
    location !== undefined && typeof location !== "string" ||
    bio !== undefined && typeof bio !== "string" ||
    about !== undefined && typeof about !== "string" ||
    interests !== undefined &&
      (!Array.isArray(interests) ||
        !interests.every((item) => typeof item === "string"))
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid profile data.",
    });
  }

  profile = {
    ...profile,
    name: name.trim(),
    email: email.trim(),
    location: location?.trim() ?? profile.location,
    bio: bio?.trim() ?? profile.bio,
    about: about?.trim() ?? profile.about,
    interests: interests
      ? interests.map((item) => item.trim()).filter(Boolean)
      : profile.interests,
  };

  res.json({
    success: true,
    message: "Profile updated successfully.",
    profile,
  });
});

module.exports = router;
