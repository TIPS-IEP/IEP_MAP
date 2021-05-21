var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.render('test');
});

router.get('/signin', function(req, res, next) {
  res.render('testsignin');
});

module.exports = router;

