const express = require('express');
const router = express.Router();

const signup_controller = require('../controllers/signupController');
const login_controller = require('../controllers/loginController');
const logout_controller = require('../controllers/logoutController');
const access_controller = require('../controllers/accessController');

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

// MEMBER ACCESS
router.get('/member', access_controller.member_get);
router.post('/member', access_controller.member_post);

// ADMIN ACCESS
router.get('/admin', access_controller.admin_get);
router.post('/admin', access_controller.admin_post);

module.exports = router;
