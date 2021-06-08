//database
var mongoose = require('mongoose');
var Alumni = require('../models/Alumni');
var Universities = require('../models/Universities')

exports.logout = function(req, res) {
    req.logout()
    res.redirect('/')
}

exports.showProfile = async function(req, res) {
    const users = await Alumni.find({ Email: req.user.email }).lean()
    var data = []
    users.forEach(function(item){
        data.push(item.EnglishName);
        data.push(item.Email);
        data.push(item.InstagramUsername);
        data.push(item.GraduationYear);
        data.push(item.Major);
    });
    res.render('login/profile', {
        name: req.user.firstName,
        picture: req.user.image,
        data: data
        // instagramUsername: user.instagramUsername,
        // graduationYear: user.graduationYear,
        // major: user.major
    });
}

exports.showUser = function(req, res) {
    res.render('login/access', {
        name: req.user.firstName,
    });
}