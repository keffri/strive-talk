const User = require('../models/userModel');

exports.signup_get = (req, res, next) => {
  res.render('signup');
};

exports.signup_post = (req, res, next) => {
  new User({
    username: req.body.username,
    password: req.body.password,
  }).save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};
