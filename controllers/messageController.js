const Message = require('../models/messageModel');
const { body, validationResult } = require('express-validator');
const { nextTick } = require('async');

exports.message_get = (req, res, next) => {
  if (!res.locals.currentUser) {
    return res.render('message', {
      noUser: 'Sign up or login before creating a message.',
    });
  }
  return res.render('message', { user: res.locals.currentUser });
};

exports.message_post = [
  body('subject')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage('Please enter a subject.')
    .isLength({ max: 30 })
    .escape()
    .withMessage('Subject contains too many characters. (Max: 30)'),
  body('message')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage('Please enter a message.')
    .isLength({ max: 140 })
    .escape()
    .withMessage('Message contains too many characters. (Max: 140)'),
  (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors.errors);
    if (!errors.isEmpty()) {
      return res.render('message', { errors: errors.errors });
    }

    new Message({
      user: res.locals.currentUser,
      subject: req.body.subject,
      message: req.body.message,
    }).save((err) => {
      if (err) {
        return next(err);
      }
      res.redirect('/');
    });
  },
];

exports.message_delete_post = (req, res, next) => {
  Message.findByIdAndRemove(req.body.messageid, (err) => {
    if (err) {
      return next(err);
    }

    res.redirect('/');
  });
};
