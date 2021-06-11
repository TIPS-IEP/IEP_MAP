var express = require('express');
var router = express.Router();
const passport = require('passport');

//controllers
const indexController = require('../controller/index')
const usersController = require('../controller/users')
const mapController = require('../controller/map')

const {ensureAuth, ensureGuest} = require('../middleware/auth')
const {ensureSuper} = require('../middleware/super')
const {ensureAdmin} = require('../middleware/admin')

//database
var mongoose = require('mongoose');
var Alumni = require('../models/Alumni');
var Universities = require('../models/Universities')

//Show Home
router.get('/', ensureGuest, indexController.index);
router.get('/about', indexController.showAbout);
router.get('/contact', indexController.showContact);

// Login and out
router.get('/login', ensureGuest, indexController.showLogin);

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'https://www.googleapis.com/auth/userinfo.email'] 
}));

router.get(
  '/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login/login' }), 
  (req, res) => {
    res.redirect('/user')
  }
);
router.get('/logout', usersController.logout)

// show user
router.get('/user', ensureAuth, usersController.showUser)
router.get('/profile', ensureAuth, usersController.showProfile)
router.get('/add', ensureAuth, usersController.showAdd)
router.post('/add', ensureAuth, usersController.add)
router.post('/remove/:email', ensureAdmin, usersController.remove)
router.post('/confirm/:email', ensureAdmin, usersController.confirm)

router.post('/alumiRemove/:email', ensureAdmin, usersController.alumiRemove)

router.get('/admin', ensureAdmin, usersController.admin)
router.get('/adminA', ensureAdmin, usersController.adminA)

// router.get('/temp', usersController.temp)
// router.post('/admin', usersController.addAdmin)

// GET map page
router.get('/map', mapController.showMap);

module.exports = router;


