const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  username: { type: String, minLength: 4, maxLength: 16, required: true },
  password: { type: String, minLength: 8, required: true },
  isMember: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  avatar: {
    type: String,
    required: true,
    enum: [
      'testament',
      'jack-o',
      'nagoriyuki',
      'millia rage',
      'chipp zanuff',
      'sol badguy',
      'ky kiske',
      'may',
      'zato-1',
      'i-no',
      'baiken',
      'anji',
      'leo whitefang',
      'faust',
      'axl low',
      'potemkin',
      'ramlethal valentine',
      'giovanna',
      'goldlewis dickinson',
      'bridget',
    ],
    default: 'sol badguy',
  },
});

module.exports = mongoose.model('User', UserSchema);
