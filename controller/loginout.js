const passport = require('passport');

exports.showLogin = function(req, res, next) {
    res.render('login/login');
}

exports.showNewLogin = function(req, res, next) {
  res.render('login/newLogin');
}

exports.logout = function(req, res) {
    req.logout();
    console.log("logged out");
    res.redirect('/');
}

exports.showLoggedInPage = function(req, res) {
    res.render('/', {
        name: req.user.firstName,
    });
}

exports.googleAuthetication = passport.authenticate('google', {
    scope: ['profile', 'https://www.googleapis.com/auth/userinfo.email']
});

exports.googleAutheticationCallBack = passport.authenticate('google', {
    failureRedirect: '/login/login'
});

exports.googleAutheticationRedirect = function(req, res) {
    res.redirect('/');
}