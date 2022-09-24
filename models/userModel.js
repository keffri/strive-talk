const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, minLength: 3, maxLength: 16, required: true },
  password: { type: String, minLength: 8, required: true },
  isMember: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  character: {
    type: String,
    required: true,
    enum: [
      'testament',
      'jack-o',
      'nagoriyuki',
      'millia',
      'chipp',
      'sol',
      'ky',
      'may',
      'zato-1',
      'i-no',
      'chaos',
      'baiken',
      'anji',
      'leo',
      'faust',
      'axl',
      'potemkin',
      'ramlethal',
      'giovanna',
      'goldlewis',
      'bridget',
    ],
    default: 'sol',
  },
});

module.exports = mongoose.model('User', UserSchema);
