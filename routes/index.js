var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

//url for mongodb
var url ='mongodb://localhost:27017/test';

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

router.get('/signin', function(req, res, next) {
  res.render('test/testsignin', {formaData: {}, errors: {}});
});

//mongodb router
router.get('/get-data', function(req, res, next){
  var resultArray = [];
  mongo.connect(url,function(err,db){
    assert.equal(null,err);
    var cursor = db.collection('test-data').find();
    cursor.forEach(function(doc, err){
      assert.equal(null,err);
      resultArray.push(doc);
    }, function(){
      db.close();
      res.render('map',{items:resultArray});
    });
  });
});

router.post('/insert', function(req, res, next){
  var item = {
    title: req.body.title,
  };

  mongo.connect(url, function(err,db){
    assert.equal(null,err);
    db.collection('test-data').insertOne(item, function(err, result){
      assert.equal(null,err);
      console.log('Item inserted');
      db.close;
    });
  })
  res.redirect('/');
});

router.post('/update', function(req, res, next){
  
})

router.post('/delete', function(req, res, next){
  
})


 
// router.post('/login', function(req, res, next) {
  
// })
// router.post('/signin', function(req, res, next) {
  
// })

module.exports = router;

