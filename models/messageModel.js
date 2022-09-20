const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: User, required: true },
  subject: { type: String, minLength: 4, maxLength: 30, required: true },
  message: { type: String, minLength: 4, maxLength: 140, required: true },
  date: { type: Date, default: Date.name(), required: true },
});

module.exports = mongoose.model('Message', MessageSchema);
