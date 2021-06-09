//database
var mongoose = require('mongoose');
var Alumni = require('../models/Alumni');
var Universities = require('../models/Universities')

exports.showMap = async function(req, res) {
    var uniItems = await Universities.find().lean();
    var length = uniItems.length;
    var universityName = [];
    var universityLat = [];
    var universityLng = [];
    uniItems.forEach(function(item){
        universityName.push(item.university);
        universityLat.push(item.lat);
        universityLng.push(item.lng);
    });

    if(req.isAuthenticated()){
        var firstName = req.user.firstName;
    }else{
        var firstName = null
    }

    res.render('map',{
        length: length,
        universityName: universityName,
        universityLat: universityLat,
        universityLng: universityLng,
        loggedin: req.isAuthenticated(),
        name: firstName,
    });
}