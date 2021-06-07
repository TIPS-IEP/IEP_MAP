var express = require('express');
var router = express.Router();
const passport = require('passport');
const {ensureAuth, ensureGuest} = require('../middleware/auth')
const {ensureSuper} = require('../middleware/super')

//database
var mongoose = require('mongoose');

var Alumni = require('../models/Alumni');
var Universities = require('../models/Universities')


/* GET home page. */
router.get('/', ensureGuest, function(req, res, next) {
  res.render('index', { 
    title: 'Express' 
  });
});

/* GET map page. */
router.get('/map', async function(req, res) {
  var uniItems = await Universities.find().lean();
  var length = uniItems.length;
  var universityName = [];
  var universityLat = [];
  var universityLng = [];
  const uniImages = [];
  uniItems.forEach(function(item){
    universityName.push(item.university);
    universityLat.push(item.lat);
    universityLng.push(item.lng);
  });
  res.render('map',{
    length: length,
    universityName: universityName,
    universityLat: universityLat,
    universityLng: universityLng,
  });
});

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about');
});

/* GET about page. */
router.get('/contact', function(req, res) {
  res.render('contact');
});

router.get('/testmongoose', function(req, res) {
  // console.log(University.find());
  mongoose.model('Universities').findOne(function(err,Universities){
    res.send(Universities);
  });
});


/* GET mongodb test pages. */
router.get('/add-alumni', (req,res) => {
  const alumni = new Alumni({
    EnglishName:'test',
    Email:'test@gmail.com',
    InstagramUsername:'test.987',
    GraduationYear: 'test',
    Major: 'test Science'
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
router.get('/all-University', (req,res) => {
  Universities.find()
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
  res.render('login/login');
});

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'https://www.googleapis.com/auth/userinfo.email'] }));
router.get(
  '/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login/login' }), 
  (req, res) => {
    res.redirect('/user')
  }
);

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get('/user', ensureAuth, (req, res) => {
  res.render('login/access', {
    name: req.user.firstName,
  });
})

router.get('/profile', ensureAuth, (req, res) => {
  res.render('login/profile', {
    name: req.user.firstName,
    picture: req.user.image,
  });
})

router.get('/admin', ensureAuth, async (req, res) => {
  try{
    const items = await Universities.find().lean();
    console.log(items);
    res.render('admin', {
      name: req.user.firstName,
      items,
    });
  }catch(error){
    console.error(error)
  }
})


// for testing
router.get('/test', ensureAuth, ensureSuper, async (req, res) => {
  const emails = await Alumni.find().lean()
  res.render('test/test', {
    myemail: req.user.email,
    emails
  });
})
module.exports = router;


