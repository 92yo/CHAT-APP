const mongoose = require("mongoose");

const { Schema } = mongoose;

const messageSchema = new Schema({
  chatroom: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Chatroom",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  message: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("Messages", messageSchema);

module.exports = Message;
