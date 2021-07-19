var isAuthenticated = false;
var image = null;
var firstName = null;

function importData(){
  if(req.isAuthenticated()){
    firstName = req.user.firstName;
    isAuthenticated = true;
    image = req.user.image;
  }else{
    firstName = null;
    isAuthenticated = false;
    image = null;
  }
  console.log(firstName);
  console.log(isAuthenticated);
  console.log(image);
}

exports.index = function(req, res, next) {
  if(req.isAuthenticated()){
    firstName = req.user.firstName;
    isAuthenticated = true;
    image = req.user.image;
  }else{
    firstName = null;
    isAuthenticated = false;
    image = null;
  }
  res.render('index', {
    loggedin: isAuthenticated,
    name: firstName,
    image: image,
  });
}

exports.newIndex = function(req, res, next) {
  if(req.isAuthenticated()){
    firstName = req.user.firstName;
    isAuthenticated = true;
    image = req.user.image;
  }else{
    firstName = null;
    isAuthenticated = false;
    image = null;
  }
  res.render('newIndex', {
    loggedin: isAuthenticated,
    name: firstName,
    image: image,
  });
}

exports.showAbout = function(req, res) {
  if(req.isAuthenticated()){
    var firstName = req.user.firstName;
  }else{
    var firstName = null
  }
  res.render('about/about', {
    loggedin: req.isAuthenticated(),
    name: firstName,
  });
}

exports.showContact = function(req, res) {
    if(req.isAuthenticated()){
      var firstName = req.user.firstName;
    }else{
      var firstName = null
    }
    res.render('contact', {
      loggedin: req.isAuthenticated(),
      name: firstName,
    });
}

exports.showBoard = function(req, res, next) {
  res.render('board');
}
exports.showShare = function(req, res, next) {
  res.render('share');
}

exports.showEvents = function(req, res, next) {
  res.render('events');
}

exports.showError = function(req, res, next) {
  if(req.isAuthenticated()){
    var firstName = req.user.firstName;
  }else{
    var firstName = null
  }
  res.render('error', {
    loggedin: req.isAuthenticated(),
    name: firstName,
  });
}


exports.showWiki = function(req, res, next) {
  var isAuthenticated = false;
  if(req.isAuthenticated()){
    var firstName = req.user.firstName;
    isAuthenticated = true;
  }else{
    var firstName = null
  }
  res.render('wiki/wiki', {
    loggedin: isAuthenticated,
    name: firstName,
  });
}

exports.showBlog = function(req, res, next) {
  var isAuthenticated = false;
  if(req.isAuthenticated()){
    var firstName = req.user.firstName;
    isAuthenticated = true;
  }else{
    var firstName = null
  }
  res.render('blog/blog', {
    loggedin: isAuthenticated,
    name: firstName,
  });
}





