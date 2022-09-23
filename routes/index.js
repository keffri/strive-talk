const express = require('express');
const router = express.Router();

const home_controller = require('../controllers/homeController');
const signup_controller = require('../controllers/signupController');
const login_controller = require('../controllers/loginController');
const logout_controller = require('../controllers/logoutController');
const access_controller = require('../controllers/accessController');
const message_controller = require('../controllers/messageController');

// HOME PAGE
router.get('/', home_controller.home_get);

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

// MESSAGE
router.get('/new-message', message_controller.message_get);
router.post('/new-message', message_controller.message_post);

module.exports = router;
