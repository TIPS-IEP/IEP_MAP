var express = require('express');
var router = express.Router();
const passport = require('passport');

//controllers
const indexController = require('../controller/index')
const usersController = require('../controller/users')
const mapController = require('../controller/map')

//middleware
const {ensureAuth, ensureGuest} = require('../middleware/auth')
const {ensureSuper} = require('../middleware/super')
const {ensureAdmin} = require('../middleware/admin')

//database
var mongoose = require('mongoose');
var Alumni = require('../models/Alumni');
var Universities = require('../models/Universities')

router.get('/', ensureGuest, indexController.index);
router.get('/about', indexController.showAbout);
router.get('/contact', indexController.showContact);

router.get('/login', ensureGuest, indexController.showLogin);
router.get('/logout', usersController.logout)
router.get('/auth/google', usersController.googleAuthetication);
router.get('/auth/google/callback', usersController.googleAutheticationCallBack, usersController.googleAutheticationRedirect);

router.get('/board', indexController.showBoard)
router.get('/share', indexController.showShare)
router.get('/events', indexController.showEvents)
router.get('/map', mapController.showMap);
router.get('/loggedin', ensureAuth, usersController.showLoggedInPage)
router.get('/profile', ensureAuth, usersController.showProfile)

router.get('/add', ensureAuth, usersController.showAdd)
router.post('/add', ensureAuth, usersController.add)

router.post('/confirm/:email', ensureAdmin, usersController.confirmUnAuthUser)
router.post('/alumiRemove', ensureAdmin, usersController.alumiRemove)
router.get('/unAuth', ensureAdmin, usersController.showUnAuthUsers)
router.get('/auth', ensureAdmin, usersController.showAuthUsers)
router.get('/error', indexController.showError)


module.exports = router;


