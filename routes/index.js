var express = require('express');
var router = express.Router();
const passport = require('passport');
const {ensureAuth, ensureGuest} = require('../middleware/auth')

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
router.get('/map', function(req, res) {
  res.render('map',{
    test: "myVar",
  });
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

router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
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

router.get('/admin', ensureAuth, async (req, res) => {
  try{
    
      var x = 50;
      var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: {lat: x, lng: -96.65625}
      });

      var features = [10];
      features[0]={
          position: new google.maps.LatLng(42.27656, -83.74256),
          type: "UniversityofMichigan",
      }

      var image = {
          url: "images/universities/University of Michigan.png",
          scaledSize: new google.maps.Size(30,32)
      };
      const icons = {
          UniversityofMichigan: {
          icon: image,
          },
      };
      // Create markers.
      for (let i = 0; i < features.length; i++) {
          const marker = new google.maps.Marker({
          position: features[i].position,
          icon: icons[features[i].type].icon,
          map: map,
          });
      }
  
  
  
    const items = await Universities.find().lean()
    console.log(items)
    res.render('admin', {
      name: req.user.firstName,
      items
    });
  }catch(error){
    console.error(error)
  }
})


// for testing
// router.get('/test', ensureAuth, (req, res) => {
//   res.render('map');
// })
module.exports = router;


