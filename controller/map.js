//database
var mongoose = require('mongoose');
var Alumni = require('../models/Alumni');
var Universities = require('../models/Universities')

class universitiesClass {
    constructor(universities) {
        this.universityName = new Array();
        this.universityLat = new Array();
        this.universityLng = new Array();
        this.universitiesLength = universities.length;
        for(var i = 0; i < this.universitiesLength; i++){
            this.universityName.push(universities[i].university);
            this.universityLat.push(universities[i].lat);
            this.universityLng.push(universities[i].lng);
        }
    }
}

class alumniClass {
    constructor(alumni) {
        this.alumniEnglishName = new Array();
        this.alumniUniversity = new Array();
        this.alumniEmail = new Array();
        this.alumniInstagramUsername = new Array();
        this.alumniGraduationYear = new Array();
        this.alumniMajor = new Array();
        this.alumniLength = alumni.length;
        for(var i = 0; i < this.alumniLength; i++){
            this.alumniEnglishName.push(alumni[i].EnglishName);
            if(alumni[i].University.slice(-1)==" "){
              alumni[i].University = alumni[i].University.slice(0,-1);
            }
            this.alumniUniversity.push(alumni[i].University);
            this.alumniEmail.push(alumni[i].Email);
            this.alumniInstagramUsername.push(alumni[i].InstagramUsername);
            this.alumniGraduationYear.push(alumni[i].GraduationYear);
            this.alumniMajor.push(alumni[i].Major);
        }
    }
}


exports.showMap = async function(req, res) {
    var universities = await Universities.find().lean();
    var alumni = await Alumni.find().lean();
    const universitiesArranged = new universitiesClass(universities);
    const alumniArranged = new alumniClass(alumni);

    var isAuthenticated = false;
    var image = null;
    if(req.isAuthenticated()){
      var firstName = req.user.firstName;
      isAuthenticated = true;
      image = req.user.image;
    }else{
      var firstName = null;
    }
    res.render('map',{
        universities: universitiesArranged,
        alumni: alumniArranged,
        loggedin: req.isAuthenticated(),
        name: firstName,
        image: image,
    });
}

exports.showUnAuthMap = async function(req, res, next) {
    var universities = await Universities.find().lean();
    const universitiesArranged = new universitiesClass(universities);
    if(req.isAuthenticated()){
      firstName = req.user.firstName;
      isAuthenticated = true;
      image = req.user.image;
    }else{
      firstName = null;
      isAuthenticated = false;
      image = null;
    }
    res.render('unAuthMap', {
      universities: universitiesArranged,
      loggedin: isAuthenticated,
      name: firstName,
      image: image,
    });
  }
