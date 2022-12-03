require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/userModel');
const Message = require('../models/messageModel');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_APPCODE, {
    useNewUrlParser: true,
  });
});

describe('checking user doc within users collectin', () => {
  it('kymain user doc is within the users collection', async () => {
    const kymain = await User.findOne({ username: 'kymain' });

    expect(kymain).toBeDefined();
  });

  it('keffri user doc is within the users collection', async () => {
    const keffri = await User.findOne({
      username: 'keffri',
    });

    expect(keffri).toBeDefined();
  });
});

describe('checks messages by users from messages collection', () => {
  it('user potemkin posted "we live in a society" message.', async () => {
    const potemkin = await User.findOne({ username: 'potemkin' }).populate(
      '_id'
    );

    expect(potemkin).toBeDefined();

    const message = await Message.findOne({
      message: 'WE LIVE IN A SOCIETY!',
    }).populate('user');

    expect(message).toBeDefined();

    expect(message.user._id).toEqual(potemkin._id);
  });
});

afterAll((done) => {
  mongoose.connection.close();
  done();
});
