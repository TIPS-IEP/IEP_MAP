var express = require('express');
var router = express.Router();
const passport = require('passport');

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

router.get('/login', function(req, res, next) {
  res.render('test/testlogin', {formaData: {}, errors: {}});
});

router.get('/signup', function(req, res, next) {
  res.render('test/testsignup', {formaData: {}, errors: {}});
});

router.post('/login', function(req, res, next) {
  
})

router.get('/logout', (req, res) => {
  console.log("is logged out");
  req.session = null;
  req.logout();
  res.redirect('/');
})


router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, red) => {
    resizeBy.redirect('/')
});



module.exports = router;

