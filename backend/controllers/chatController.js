import asyncHandler from "express-async-handler";
import Chatroom from "../models/chatModel.js";

// @desc    Create Chat room
// @route   POST /api/chatroom
// @access  Public
const createChatroom = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(name))
    throw new Error("Chatroom name can contain only alphabets.");

  const chatroomExists = await Chatroom.findOne({ name });

  if (chatroomExists)
    throw new Error("Chatroom with that name already exists!");

  const chatroom = await Chatroom.create({
    name,
  });

  if (chatroom) {
    await chatroom.save();
    res.status(201).json({
      message: "Chatroom created!",
    });
  } else {
    res.status(401);
    throw new Error("Chatroom already exists");
  }
});

// @desc    get all Chat rooms
// @route   GET /api/chatroom/rooms
// @access  Public
const getAllChatrooms = asyncHandler(async (req, res) => {
  const chatrooms = await Chatroom.find({});

  res.json(chatrooms);
});

export { createChatroom, getAllChatrooms };
