require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/userModel');

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

afterAll((done) => {
  mongoose.connection.close();
  done();
});
