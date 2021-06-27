exports.index = function(req, res, next) {
    var isAuthenticated = false;
    if(req.isAuthenticated()){
      var firstName = req.user.firstName;
      isAuthenticated = true;
    }else{
      var firstName = null
    }
    res.render('index', {
      loggedin: isAuthenticated,
      name: firstName,
    });
}

exports.showAbout = function(req, res) {
    if(req.isAuthenticated()){
      var firstName = req.user.firstName;
    }else{
      var firstName = null
    }
    res.render('about', {
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
  res.render('blog');
}
