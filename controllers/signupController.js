const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

exports.signup_get = (req, res, next) => {
  res.render('signup');
};

exports.signup_post = [
  body('username')
    .trim()
    .isLength({ min: 4, max: 16 })
    .escape()
    .withMessage('Username must be at least 4 characters.'),
  body('password')
    .trim()
    .isLength({ min: 8 })
    .escape()
    .withMessage('Password must be at least 8 characters.'),
  body('confirmPassword')
    .trim()
    .isLength({ min: 8 })
    .escape()
    .withMessage('Password must be at least 8 characters.')
    .custom(async (value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // Errors are present
      return res.render('signup', { passwordFail: 'Passwords do not match.' });
    }

    try {
      const existingUser = await User.find({ username: req.body.username });
      if (existingUser.length > 0) {
        return res.render('signup', {
          userFail: 'Username is already being used.',
        });
      }
      bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        new User({
          username: req.body.username,
          password: hashedPassword,
          character: req.body.character,
        }).save((err) => {
          if (err) {
            return next(err);
          }
          res.redirect('/');
        });
      });
    } catch (err) {
      return next(err);
    }
  },
];
