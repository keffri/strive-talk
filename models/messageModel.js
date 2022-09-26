const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { DateTime } = require('luxon');

const MessageSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  subject: { type: String, minLength: 1, maxLength: 30, required: true },
  message: { type: String, minLength: 1, maxLength: 140, required: true },
  date: { type: Date, default: Date.now, required: true },
});

MessageSchema.virtual('messageDate').get(function () {
  return DateTime.fromJSDate(this.date).toFormat('DDDD, h:mm:ss, a');
});

module.exports = mongoose.model('Message', MessageSchema);
