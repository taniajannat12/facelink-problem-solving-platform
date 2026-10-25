
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const adminRoutes = require("./routes/adminRoutes");
const seekerRoutes = require("./routes/seekerRoutes");
const solverRoutes = require("./routes/solverRoutes");
const chatRoutes = require("./routes/chatRoutes");

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "FaceLink backend is running!",
  });
});

app.get("/test-chat", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Test route working",
  });
});

app.use("/api/chat", chatRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/seeker", seekerRoutes);
app.use("/api/solver", solverRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`FaceLink backend running on port ${PORT}`);
});
