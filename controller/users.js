exports.logout = function(req, res) {
    req.logout()
    res.redirect('/')
}

exports.showProfile = function(req, res) {
    res.render('login/profile', {
      name: req.user.firstName,
      picture: req.user.image,
    });
}

exports.showUser = function(req, res) {
    res.render('login/access', {
      name: req.user.firstName,
    });
}