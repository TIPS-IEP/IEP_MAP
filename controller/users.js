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
    var userInfo = [];
    if(await Alumni.find({ Email: req.user.email }).lean() != ""){
        const authUsers = await Alumni.find({ Email: req.user.email }).lean();
        userInfo = importUsersInfo(authUsers);
    }else{
        const unAuthUsers = await unAuth.find({ Email: req.user.email }).lean()
        userInfo = importUsersInfo(unAuthUsers);
    }
    res.render('login/add', {
        name: req.user.firstName,
        picture: req.user.image,
        data: userInfo
    });
}

exports.add = async function(req, res, next) {
    if(await Alumni.find({ Email: req.user.email }).lean() != ""){
        try{
            await Alumni.deleteOne({Email: req.user.email}, function(err, obj) {
                if (err) throw err;
            });
            req.body.Email = req.user.email;
            await Alumni.create(req.body);
            res.redirect('/profile');
        } catch (error) {
            console.log(error);
        }

    }else if(await unAuth.find({ Email: req.user.email }).lean() != ""){
        try{
            await unAuth.deleteOne({Email: req.user.email}, function(err, obj) {
                if (err) throw err;
            });
            req.body.Email = req.user.email;
            await unAuth.create(req.body);
            res.redirect('/profile');
        } catch (error) {
            console.log(error);
        }
    }else{
        try{
            req.body.Email = req.user.email
            await unAuth.create(req.body);
            res.redirect('/profile');
        } catch (error) {
          console.log(error);
        }
    }
}

exports.showUnAuthUsers = async function(req, res) {
    var data = []
    const unAuthUsers = await unAuth.find().lean();
    unAuthUsers.forEach(function(item){
        data.push(item.EnglishName);
        data.push(item.FirstName);
        data.push(item.LastName);
        data.push(item.Email);
        data.push(item.InstagramUsername);
        data.push(item.GraduationYear);
        data.push(item.Major);
        data.push(item.University);
    });
    res.render('login/unAuthUsers', {
        name: req.user.firstName,
        userData: data,
    });
}

exports.showAuthUsers = async function(req, res) {
    var data = [];
    const AuthUsers = await Alumni.find().lean();

    AuthUsers.forEach(function(item){
        checkIfDataEmpty(data, item.EnglishName);
        checkIfDataEmpty(data, item.FirstName);
        checkIfDataEmpty(data, item.LastName);
        checkIfDataEmpty(data, item.Email);
        checkIfDataEmpty(data, item.InstagramUsername);
        checkIfDataEmpty(data, item.GraduationYear);
        checkIfDataEmpty(data, item.Major);
        checkIfDataEmpty(data, item.University);
    });
    res.render('login/authUsers', {
        name: req.user.firstName,
        userData: data,
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

exports.confirmUnAuthUsers = async function(req, res, next) {
    try{
        const newAuthUser = await unAuth.find({Email: req.params.email}).lean();
        await Alumni.create(newAuthUser, async function(err, obj) {
            if (err) throw err;
            console.log("1 document added in Alumni");
            await unAuth.deleteOne({Email: req.params.email}, function(err, obj) {
                if (err) throw err;
                console.log("1 document deleted from unAuth");
            });
        });
        res.redirect('/unAuth');
    } catch (error) {
      console.log(error);
    }
}

exports.alumiRemove = async function(req, res, next) {
    try{
        const unAuthUser = await Alumni.find({Email: req.body.email}).lean();
        await unAuth.create(unAuthUser, async function(err, obj) {
            if (err) throw err;
            console.log("1 document added in unAuth");
            await Alumni.deleteOne({Email: req.body.email}, function(err, obj) {
                if (err) throw err;
                console.log("1 document deleted from Alumni");
            });
        });
        res.redirect('/auth')
    } catch (error) {
      console.log(error);
    }
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