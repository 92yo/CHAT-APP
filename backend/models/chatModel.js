import mongoose from "mongoose";

const { Schema } = mongoose;

const chatSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Chat = mongoose.model("Chatroom", chatSchema);

export default Chat;
