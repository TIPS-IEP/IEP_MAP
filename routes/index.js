var express = require('express');
var router = express.Router();
const passport = require('passport');
const {ensureAuth, ensureGuest} = require('../middleware/auth')

const users = []

//Alumni
var Alumni = require('../models/Alumni');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET map page. */
router.get('/map', function(req, res, next) {
  res.render('map');
});

/* GET mongodb test pages. */
router.get('/add-alumni', (req,res) => {
  const alumni = new Alumni({
    EnglishName:'Alan',
    Email:'alanhou911222@gmail.com',
    InstagramUsername:'alanhou.987',
    GraduationYear: '2021',
    Major: 'Computer Science'
  });
  alumni.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    })
})

router.get('/all-alumni', (req,res) => {
  Alumni.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
})

router.get('/findalan', (req,res) => {
  Alumni.findById('60adf1cf39218d31133e8659')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
})

//login and out

router.get('/login', ensureGuest, function(req, res, next) {
  res.render('login');
});

router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
router.get(
  '/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }), 
  (req, res) => {
    res.redirect('/')
  }
);

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

// for testing
// router.get('/test', ensureAuth, (req, res) => {
//   res.render('map');
// })
module.exports = router;

