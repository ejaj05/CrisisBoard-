const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  incident: { type: mongoose.Schema.Types.ObjectId, ref: 'Incident' }, // optional context
  message: { type: String, required: true },
  seen: { type: Boolean, default: false }
}, { timestamps: true });
const Chat = mongoose.model('Chat', chatSchema);
module.exports = {
    Chat
}
