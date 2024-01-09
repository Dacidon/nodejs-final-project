import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
  senderId: {
    type: String,
  },
  recipientId: {
    type: String,
  },
  text: {
    type: String,
  }
});

export const MessageModel = model('message', messageSchema);