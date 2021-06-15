//database
const passport = require('passport');
var Alumni = require('../models/Alumni');
var unAuth = require('../models/unAuth')
var Admin = require('../models/admin')
var eachUserInfo = [];

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

exports.logout = function(req, res) {
    req.logout();
    console.log("logged out");
    res.redirect('/');
}

exports.showProfile = async function(req, res) {
    var isAuthorized = false;
    var usersInfoArray = [];
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
    });
}

exports.showLoggedInPage = function(req, res) {
    res.render('login/loggedinpage', {
        name: req.user.firstName,
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

exports.add = async function(req, res, next) {
    if(await Alumni.find({ Email: req.user.email }).lean() != ""){
        await Alumni.deleteOne({Email: req.user.email}, function(err, obj) {
            if (err) throw err;
            console.log("delete " + req.user.email + " from Alumni");
        });
        req.body.Email = req.user.email;
        await Alumni.create(req.body, function(err, obj) {
            if (err) throw err;
            console.log("create " + req.user.email + " in Alumni");
        });
        res.redirect('/profile');
    }else if(await unAuth.find({ Email: req.user.email }).lean() != ""){
        await unAuth.deleteOne({Email: req.user.email}, function(err, obj) {
            if (err) throw err;
            console.log("delete " + req.user.email + " from unAuth");
        });
        req.body.Email = req.user.email;
        await unAuth.create(req.body, function(err, obj) {
            if (err) throw err;
            console.log("create " + req.user.email + " in unAuth");
        });
        res.redirect('/profile');
    }else{
        req.body.Email = req.user.email;
        await unAuth.create(req.body, function(err, obj) {
            if (err) throw err;
            console.log("create " + req.user.email + " in unAuth");
        });
        res.redirect('/profile');
    }
}

exports.showUnAuthUsers = async function(req, res) {
    var usersInfoArray = []
    const unAuthUsers = await unAuth.find().lean();
    usersInfoArray = importUsersInfo(unAuthUsers);
    res.render('login/unAuthUsers', {
        name: req.user.firstName,
        userData: usersInfoArray,
    });
}

exports.showAuthUsers = async function(req, res) {
    var usersInfoArray = []
    const unAuthUsers = await Alumni.find().lean();
    usersInfoArray = importUsersInfo(unAuthUsers);
    res.render('login/authUsers', {
        name: req.user.firstName,
        userData: usersInfoArray,
    });
}

//used to add admin
exports.temp = function(req, res) {
    res.render('login/temp', {
        name: req.user.firstName,
    });
}

exports.addAdmin = async function(req, res) {
    try{
        await Admin.create(req.body);
        res.redirect('/');
    } catch (error) {
      console.log(error);
    }
}

exports.confirmUnAuthUser = async function(req, res, next) {
    const newAuthUser = await unAuth.find({Email: req.params.email}).lean();
    await Alumni.create(newAuthUser, function(err, obj) {
        if (err) throw err;
        console.log("create " + req.params.email + " in Alumni");
    });
    await unAuth.deleteOne({Email: req.params.email}, function(err, obj) {
        if (err) throw err;
        console.log("delete " + req.params.email + " from unAuth");
    });
    res.redirect('/unAuth');
}

exports.alumiRemove = async function(req, res, next) {
    const unAuthUser = await Alumni.find({Email: req.body.email}).lean();
    await unAuth.create(unAuthUser, function(err, obj) {
        if (err) throw err;
        console.log("create " + req.body.email + " in unAuth");
    });
    await Alumni.deleteOne({Email: req.body.email}, function(err, obj) {
        if (err) throw err;
        console.log("delete " + req.body.email + " in Alumni");
    });
    res.redirect('/auth')
}

exports.googleAuthetication = passport.authenticate('google', {
    scope: ['profile', 'https://www.googleapis.com/auth/userinfo.email']
});

exports.googleAutheticationCallBack = passport.authenticate('google', {
    failureRedirect: '/login/login'
});

exports.googleAutheticationRedirect = function(req, res) {
    res.redirect('/loggedin');
}