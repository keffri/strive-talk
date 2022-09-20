const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.signup_get = (req, res, next) => {
  res.render('signup');
};

exports.signup_post = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    new User({
      username: req.body.username,
      password: hashedPassword,
    }).save((err) => {
      if (err) {
        return next(err);
      }
      res.redirect('/');
    });
  });
};
