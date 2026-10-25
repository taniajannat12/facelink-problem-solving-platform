const express = require("express");
const router = express.Router();

const conversations = new Map();

function getConversation(conversationId) {
  if (!conversations.has(conversationId)) {
    conversations.set(conversationId, []);
  }

  return conversations.get(conversationId);
}

router.get("/:conversationId/messages", (req, res) => {
  const { conversationId } = req.params;
  const messages = getConversation(conversationId);

  res.json({
    success: true,
    conversationId,
    messages,
  });
});

router.post("/:conversationId/messages", (req, res) => {
  const { conversationId } = req.params;
  const { senderId, senderRole, senderName, text } = req.body;

  if (!senderId || !senderRole || !senderName || !text?.trim()) {
    return res.status(400).json({
      success: false,
      message: "senderId, senderRole, senderName and text are required.",
    });
  }

  if (!["seeker", "solver"].includes(senderRole)) {
    return res.status(400).json({
      success: false,
      message: "senderRole must be seeker or solver.",
    });
  }

  const messages = getConversation(conversationId);

  const newMessage = {
    id: Date.now().toString(),
    conversationId,
    senderId,
    senderRole,
    senderName,
    text: text.trim(),
    createdAt: new Date().toISOString(),
  };

  messages.push(newMessage);

  return res.status(201).json({
    success: true,
    message: "Message sent successfully.",
    data: newMessage,
  });
});

module.exports = router;