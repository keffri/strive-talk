const express = require('express');
const router = express.Router();

const signup_controller = require('../controllers/signupController');
const login_controller = require('../controllers/loginController');
const logout_controller = require('../controllers/logoutController');

// HOME PAGE
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Strive Talk', user: req.user });
});

// SIGN-UP
router.get('/sign-up', signup_controller.signup_get);
router.post('/sign-up', signup_controller.signup_post);

//LOG IN
router.get('/log-in', login_controller.login_get);
router.post('/log-in', login_controller.login_post);

//LOG OUT
router.get('/log-out', logout_controller.logout_get);

module.exports = router;
