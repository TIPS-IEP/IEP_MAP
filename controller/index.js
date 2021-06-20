exports.index = function(req, res, next) {
    res.render('index', { 
      title: 'Express' 
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

exports.showNewAbout = function(req, res, next) {
  res.render('newAbout');
}

exports.showNewContact = function(req, res, next) {
  res.render('newContact');
}