var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt')

const users = []


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/map', function(req, res, next) {
  res.render('map');
});

router.get('/login', function(req, res, next) {
  res.render('test/testlogin', {formaData: {}, errors: {}});
});

router.get('/signup', function(req, res, next) {
  res.render('test/testsignup', {formaData: {}, errors: {}});
});

router.post('/login', function(req, res, next) {
  
})

router.post('/signup', async (req, res, next) => {
  try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login')
  }catch (error){
    console.log(error)
    res.redirect('/signup')
  }
  console.log(users)
})

module.exports = router;

