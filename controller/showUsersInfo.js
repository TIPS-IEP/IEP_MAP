var eachUserInfo = [];

var Alumni = require('../models/Alumni');
var unAuth = require('../models/unAuth');
var Blog = require('../models/blog');

exports.showProfile = async function(req, res) {
    var isAuthorized = false;
    var usersInfoArray = [];
    var isAuthenticated = false;
    var image = null;
    if(req.isAuthenticated()){
      var firstName = req.user.firstName;
      isAuthenticated = true;
      image = req.user.image;
    }else{
      var firstName = null;
    }
    if(await Alumni.find({ Email: req.user.email }).lean()!=""){
        isAuthorized = true;
        const authUsers = await Alumni.find({ Email: req.user.email }).lean();
        usersInfoArray = importUsersInfo(authUsers);
    }else{
        const unAuthUsers = await unAuth.find({ Email: req.user.email }).lean();
        usersInfoArray = importUsersInfo(unAuthUsers);
    }
    res.render('login/profile', {
        name: req.user.firstName,
        data: usersInfoArray,
        status: isAuthorized,
        loggedin: isAuthenticated,
        image: image,
    });
}

exports.showAdd = async function(req, res) {
    var usersInfoArray = [];
    if(await Alumni.find({ Email: req.user.email }).lean() != ""){
        const authUsers = await Alumni.find({ Email: req.user.email }).lean();
        usersInfoArray = importUsersInfo(authUsers);
    }else{
        const unAuthUsers = await unAuth.find({ Email: req.user.email }).lean()
        usersInfoArray = importUsersInfo(unAuthUsers);
    }
    res.render('login/add', {
        name: req.user.firstName,
        picture: req.user.image,
        data: usersInfoArray
    });
}

exports.showUnAuthUsers = async function(req, res) {
    var usersInfoArray = []
    const unAuthUsers = await unAuth.find().lean();
    usersInfoArray = importUsersInfo(unAuthUsers);
    res.render('auth/unAuthUsers', {
        name: req.user.firstName,
        userData: usersInfoArray,
    });
}

exports.showAuthUsers = async function(req, res) {
    var usersInfoArray = []
    const unAuthUsers = await Alumni.find().lean();
    usersInfoArray = importUsersInfo(unAuthUsers);
    res.render('auth/authUsers', {
        name: req.user.firstName,
        userData: usersInfoArray,
    });
}

exports.showUnverifiedBlogs = async function(req, res) {
  var isAuthenticated = false;
  const blogs = await Blog.find().lean();
  if(req.isAuthenticated()){
    var firstName = req.user.firstName;
    isAuthenticated = true;
  }else{
    var firstName = null
  }
  res.render('auth/unverifiedBlogs', {
    loggedin: isAuthenticated,
    name: firstName,
    blogs: blogs,
  });
}

function importUsersInfo(users){
    var usersInfoArray = [];
    users.forEach(function(user){
        getEachUserInfo(user);
        for(var i = 0; i < eachUserInfo.length; i++){
            if(checkIfDataEmpty(eachUserInfo[i])){
                usersInfoArray.push("empty");
            }else{
                usersInfoArray.push(eachUserInfo[i]);
            }
        }
    });
    return usersInfoArray;
}

function getEachUserInfo(user) {
    eachUserInfo = [user.EnglishName, user.LastName, user.FirstName, user.Email, user.InstagramUsername, user.GraduationYear, user.Major, user.University];
}

function checkIfDataEmpty(userInfo) {
    var isEmpty = false;
    if(!userInfo){
        isEmpty = true;
    }
    return isEmpty;
}
