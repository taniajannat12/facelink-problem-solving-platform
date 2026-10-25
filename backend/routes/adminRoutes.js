
const express = require("express");
const router = express.Router();

const users = [
  { id: "C221001", name: "Rahim Hasan", email: "rahim@example.com", role: "Solver", status: "Active", joined: "2026-10-01" },
  { id: "C221002", name: "Nusrat Jahan", email: "nusrat@example.com", role: "Seeker", status: "Active", joined: "2026-10-05" },
  { id: "C221003", name: "Arif Hasan", email: "arif@example.com", role: "Solver", status: "Active", joined: "2026-10-10" }
];

const problems = [
  { id: "P001", title: "React Authentication Issue", seeker: "Nusrat Jahan", technology: "React", status: "Solved", date: "2026-10-10", description: "Help with React authentication." },
  { id: "P002", title: "Next.js API Integration", seeker: "Rahim Hasan", technology: "Next.js", status: "Pending", date: "2026-10-12", description: "Help connecting a Next.js application to an API." },
  { id: "P003", title: "MongoDB Connection Problem", seeker: "Arif Hasan", technology: "MongoDB", status: "In Progress", date: "2026-10-15", description: "Troubleshooting a database connection." },
  { id: "P004", title: "Firebase Authentication", seeker: "Nusrat Jahan", technology: "Firebase", status: "Solved", date: "2026-10-17", description: "Help with Firebase login." },
  { id: "P005", title: "Responsive Tailwind Layout", seeker: "Rahim Hasan", technology: "Tailwind CSS", status: "Pending", date: "2026-10-19", description: "Help fixing a responsive layout." }
];

const reports = {
  summary: {
    totalUsers: 1248,
    totalProblems: 324,
    solvedProblems: 253,
    pendingProblems: 47
  },
  monthlyUsers: [
    { month: "May", users: 320 },
    { month: "Jun", users: 450 },
    { month: "Jul", users: 390 },
    { month: "Aug", users: 580 },
    { month: "Sep", users: 650 },
    { month: "Oct", users: 720 }
  ],
  problemStatus: {
    solved: 253,
    inProgress: 24,
    pending: 47
  },
  technologies: [
    { name: "React", count: 86, percent: 86 },
    { name: "Next.js", count: 72, percent: 72 },
    { name: "MongoDB", count: 58, percent: 58 },
    { name: "Firebase", count: 44, percent: 44 },
    { name: "Tailwind CSS", count: 32, percent: 32 }
  ],
  topSolvers: [
    { name: "Rahim Hasan", role: "Full Stack Developer", solved: 48, rating: 4.9 },
    { name: "Arif Hasan", role: "React Developer", solved: 41, rating: 4.8 },
    { name: "Nabil Ahmed", role: "Backend Developer", solved: 37, rating: 4.7 }
  ]
};

let settings = {
  profile: {
    name: "Admin User",
    email: "admin@facelink.com",
    role: "Super Admin"
  },
  notifications: {
    newUsers: true,
    newProblems: true,
    reports: false
  },
  security: {
    twoFactor: false,
    loginAlerts: true
  },
  platform: {
    siteName: "FaceLink",
    maintenanceMode: false,
    allowRegistration: true
  }
};

const sendError = (res, status, message) => {
  return res.status(status).json({
    success: false,
    message
  });
};

router.get("/dashboard", (req, res) => {
  res.json({
    success: true,
    stats: {
      totalUsers: users.length,
      totalSeekers: users.filter(user => user.role === "Seeker").length,
      totalSolvers: users.filter(user => user.role === "Solver").length,
      totalProblems: problems.length,
      solvedProblems: problems.filter(problem => problem.status === "Solved").length,
      pendingProblems: problems.filter(problem => problem.status === "Pending").length,
      inProgressProblems: problems.filter(problem => problem.status === "In Progress").length
    },
    recentUsers: users.slice(-5).reverse(),
    recentProblems: problems.slice(-5).reverse()
  });
});

router.get("/users", (req, res) => {
  const { search, role, status } = req.query;
  let result = [...users];

  if (search) {
    const query = String(search).toLowerCase();
    result = result.filter(user =>
      user.id.toLowerCase().includes(query) ||
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
  }

  if (role && role !== "All") {
    result = result.filter(user => user.role === role);
  }

  if (status && status !== "All") {
    result = result.filter(user => user.status === status);
  }

  res.json({
    success: true,
    total: result.length,
    users: result
  });
});

router.get("/users/:id", (req, res) => {
  const user = users.find(item => item.id === req.params.id);

  if (!user) {
    return sendError(res, 404, "User not found");
  }

  res.json({ success: true, user });
});

router.patch("/users/:id/status", (req, res) => {
  const user = users.find(item => item.id === req.params.id);

  if (!user) {
    return sendError(res, 404, "User not found");
  }

  const { status } = req.body;

  if (!["Active", "Inactive"].includes(status)) {
    return sendError(res, 400, "Status must be Active or Inactive");
  }

  user.status = status;

  res.json({
    success: true,
    message: "User status updated successfully",
    user
  });
});

router.get("/problems", (req, res) => {
  const { search, status, technology } = req.query;
  let result = [...problems];

  if (search) {
    const query = String(search).toLowerCase();
    result = result.filter(problem =>
      problem.id.toLowerCase().includes(query) ||
      problem.title.toLowerCase().includes(query) ||
      problem.seeker.toLowerCase().includes(query) ||
      problem.technology.toLowerCase().includes(query)
    );
  }

  if (status && status !== "All") {
    result = result.filter(problem => problem.status === status);
  }

  if (technology && technology !== "All") {
    result = result.filter(problem => problem.technology === technology);
  }

  res.json({
    success: true,
    total: result.length,
    problems: result
  });
});

router.get("/problems/:id", (req, res) => {
  const problem = problems.find(item => item.id === req.params.id);

  if (!problem) {
    return sendError(res, 404, "Problem not found");
  }

  res.json({ success: true, problem });
});

router.patch("/problems/:id/status", (req, res) => {
  const problem = problems.find(item => item.id === req.params.id);

  if (!problem) {
    return sendError(res, 404, "Problem not found");
  }

  const { status } = req.body;

  if (!["Pending", "In Progress", "Solved"].includes(status)) {
    return sendError(res, 400, "Invalid problem status");
  }

  problem.status = status;

  res.json({
    success: true,
    message: "Problem status updated successfully",
    problem
  });
});

router.get("/reports", (req, res) => {
  res.json({
    success: true,
    reports
  });
});

router.get("/settings", (req, res) => {
  res.json({
    success: true,
    settings
  });
});

router.put("/settings", (req, res) => {
  const body = req.body;

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return sendError(res, 400, "Invalid settings data");
  }

  const sections = ["profile", "notifications", "security", "platform"];

  for (const section of sections) {
    if (
      body[section] !== undefined &&
      (!body[section] ||
        typeof body[section] !== "object" ||
        Array.isArray(body[section]))
    ) {
      return sendError(res, 400, `Invalid ${section} settings`);
    }
  }

  settings = {
    profile: { ...settings.profile, ...(body.profile || {}) },
    notifications: { ...settings.notifications, ...(body.notifications || {}) },
    security: { ...settings.security, ...(body.security || {}) },
    platform: { ...settings.platform, ...(body.platform || {}) }
  };

  res.json({
    success: true,
    message: "Settings saved successfully",
    settings
  });
});

module.exports = router;
