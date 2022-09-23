const Message = require('../models/messageModel');

exports.home_get = (req, res, next) => {
  Message.find({}, ['subject', 'message', 'date'])
    .sort({ date: -1 })
    .populate('user')
    .exec(function (err, messages_list) {
      if (err) {
        return next(err);
      }
      return res.render('index', {
        title: 'Strive Talk',
        user: req.user,
        messages: messages_list,
      });
    });
};
