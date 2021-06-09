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

exports.showLogin = function(req, res, next) {
    res.render('login/login');
}



