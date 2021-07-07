var express = require('express');
var router = express.Router();

const indexController = require('../controller/index')
const usersController = require('../controller/users')
const mapController = require('../controller/map')
const loginoutController = require('../controller/loginout')
const showUsersInfoController = require('../controller/showUsersInfo')
const contactController = require('../controller/contactUs')
const blogController = require("../controller/blog")

//middleware
const {ensureAuth, ensureGuest} = require('../middleware/auth')
const {ensureSuper} = require('../middleware/super')
const {ensureAdmin} = require('../middleware/admin')

//database
var mongoose = require('mongoose');
var Alumni = require('../models/Alumni');
var Universities = require('../models/Universities')

router.get('/', indexController.newIndex);
router.get('/iep', indexController.index);
router.get('/about', indexController.showAbout);
router.get('/contact', indexController.showContact);
router.get('/board', indexController.showBoard)
router.get('/share', indexController.showShare)
router.get('/events', indexController.showEvents)
router.get('/error', indexController.showError)
router.get('/wiki', indexController.showWiki)
router.get('/blog', indexController.showBlog)
router.get('/writeblog', indexController.showWriteBlog)

router.post('/contactUs', contactController.sendForm)

router.post('/add', ensureAuth, usersController.add)
router.post('/confirm/:email', ensureAdmin, usersController.confirmUnAuthUser)
router.post('/alumiRemove', ensureAdmin, usersController.alumiRemove)

router.get('/login', ensureGuest, loginoutController.showLogin);
router.get('/logout', loginoutController.logout)
router.get('/loggedin', ensureAuth, loginoutController.showLoggedInPage)
router.get('/auth/google', loginoutController.googleAuthetication);
router.get('/auth/google/callback', loginoutController.googleAutheticationCallBack, loginoutController.googleAutheticationRedirect);

router.get('/profile', ensureAuth, showUsersInfoController.showProfile)
router.get('/add', ensureAuth, showUsersInfoController.showAdd)
router.get('/unAuth', ensureAdmin, showUsersInfoController.showUnAuthUsers)
router.get('/auth', ensureAdmin, showUsersInfoController.showAuthUsers)

router.get('/map', mapController.showMap);

router.get('/dashboard', blogController.showDashboard);
router.post('/blog', ensureAuth, blogController.addBlog);
router.get('/blog/:blog_id/edit', blogController.editBlog)
router.post('/blog/:blog_id/save', blogController.saveBlog)


module.exports = router;


