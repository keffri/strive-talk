const User = require('../models/userModel');
const { body, validationResult } = require('express-validator');
const { reset } = require('nodemon');

exports.member_get = (req, res, next) => {
  if (!res.locals.currentUser) {
    return res.render('member', {
      noUser: 'Please log in before proceeding.',
    });
  }
  return res.render('member', { user: res.locals.currentUser });
};

exports.member_post = [
  body('memberCode')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage('You must enter a password.'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render('member', {
        user: res.locals.currentUser,
        errors: errors.array(),
      });
    } else if (req.body.memberCode !== process.env.MEMBER_PASSWORD) {
      return res.render('member', {
        user: res.locals.currentUser,
        passwordFail: 'Incorrect password.',
      });
    }

    const user = new User(res.locals.currentUser);
    user.isMember = true;

    User.findByIdAndUpdate(res.locals.currentUser._id, user, {}, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/member');
    });
  },
];

exports.admin_get = (req, res, next) => {
  if (!res.locals.currentUser) {
    return res.render('admin', {
      noUser: 'Please log in before proceeding.',
    });
  }
  return res.render('admin', { user: res.locals.currentUser });
};

exports.admin_post = [
  body('adminCode')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage('You must enter a password.'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render('admin', {
        user: res.locals.currentUser,
        errors: errors.array(),
      });
    } else if (req.body.adminCode !== process.env.ADMIN_PASSWORD) {
      return res.render('admin', {
        user: res.locals.currentUser,
        passwordFail: 'Incorrect password.',
      });
    }

    const user = new User(res.locals.currentUser);
    user.isAdmin = true;

    User.findByIdAndUpdate(res.locals.currentUser._id, user, {}, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/admin');
    });
  },
];
