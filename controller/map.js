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
    var alumnItem = await Alumni.find().lean();
    var aLength = alumnItem.length;
    var alumniEnglishName = [];
    var alumniUniversity = [];
    var alumniEmail = [];
    var alumniInstagramUsername = [];
    var alumniGraduationYear = [];
    var alumniMajor = [];
    uniItems.forEach(function(item){
        universityName.push(item.university);
        universityLat.push(item.lat);
        universityLng.push(item.lng);
    });
    alumnItem.forEach(function(item){
        alumniEnglishName.push(item.EnglishName);
        alumniUniversity.push(item.University);
        alumniEmail.push(item.Email);
        alumniInstagramUsername.push(item.InstagramUsername);
        alumniGraduationYear.push(item.GraduationYear);
        alumniMajor.push(item.Major);
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
        aLength: aLength,
        alumniEnglishName: alumniEnglishName,
        alumniUniversity: alumniUniversity,
        alumniEmail: alumniEmail,
        alumniInstagramUsername: alumniInstagramUsername,
        alumniGraduationYear: alumniGraduationYear,
        alumniMajor: alumniMajor,
        loggedin: req.isAuthenticated(),
        name: firstName,
    });
}