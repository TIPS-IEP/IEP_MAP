//database
var mongoose = require('mongoose');
var Alumni = require('../models/Alumni');
var Universities = require('../models/Universities')
var unAuth = require('../models/unAuth')
var Admin = require('../models/admin')

function testEmpty(d, a) {
    if(!a){
        d.push("empty");
    }else{
        d.push(a);
    }
}

exports.logout = function(req, res) {
    req.logout()
    res.redirect('/')
}

exports.showProfile = async function(req, res) {
    if(await Alumni.find({ Email: req.user.email }).lean() == ""){
        const normalUsers = await unAuth.find({ Email: req.user.email }).lean()
        var data = []
        normalUsers.forEach(function(item){
            data.push(item.EnglishName);
            data.push(item.LastName);
            data.push(item.FirstName);
            data.push(item.Email);
            data.push(item.InstagramUsername);
            data.push(item.GraduationYear);
            data.push(item.Major);
        });
        res.render('login/profile', {
            name: req.user.firstName,
            picture: req.user.image,
            data: data
        });
    }else{
        const users = await Alumni.find({ Email: req.user.email }).lean()
        var data = []
        users.forEach(function(item){
            data.push(item.EnglishName);
            data.push(item.LastName);
            data.push(item.FirstName);
            data.push(item.Email);
            data.push(item.InstagramUsername);
            data.push(item.GraduationYear);
            data.push(item.Major);
        });
        res.render('login/profile', {
            name: req.user.firstName,
            picture: req.user.image,
            data: data
        });
    }
}

exports.showUser = function(req, res) {
    res.render('login/access', {
        name: req.user.firstName,
    });
}

exports.showAdd = async function(req, res) {
    const users = await Alumni.find({ Email: req.user.email }).lean()
    var data = []
    users.forEach(function(item){
        testEmpty(data, item.EnglishName)
        testEmpty(data, item.FirstName)
        testEmpty(data, item.LastName)
        testEmpty(data, item.Email)
        testEmpty(data, item.InstagramUsername)
        testEmpty(data, item.GraduationYear)
        testEmpty(data, item.Major)
    });
    res.render('login/add', {
        name: req.user.firstName,
        picture: req.user.image,
        data: data
    });
}

exports.add = async function(req, res, next) {
    try{
        req.body.Email = req.user.email
        await unAuth.create(req.body)
        res.redirect('/')
    } catch (error) {
      console.log(error)
    }
}

exports.admin = async function(req, res) {
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
    });
    console.log(unAuthUsers);
    res.render('login/admin', {
        name: req.user.firstName,
        userData: data,
    });
}

exports.adminA = async function(req, res) {
    var data = []
    const AuthUsers = await Alumni.find().lean();

    AuthUsers.forEach(function(item){
        testEmpty(data, item.EnglishName)
        testEmpty(data, item.FirstName)
        testEmpty(data, item.LastName)
        testEmpty(data, item.Email)
        testEmpty(data, item.InstagramUsername)
        testEmpty(data, item.GraduationYear)
        testEmpty(data, item.Major)
    });
    res.render('login/adminA', {
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
        await admin.create(req.body)
        res.redirect('/')
    } catch (error) {
      console.log(error)
    }
}

exports.remove = async function(req, res, next) {
    try{
        await unAuth.deleteOne({Email: req.params.email}, function(err, obj) {
            if (err) throw err;
            console.log("1 document deleted from unAuth");
        });
        res.redirect('/admin')
    } catch (error) {
      console.log(error)
    }
}

exports.confirm = async function(req, res, next) {
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
        res.redirect('/admin')
    } catch (error) {
      console.log(error)
    }
}

exports.alumiRemove = async function(req, res, next) {
    try{
        await Alumni.deleteOne({Email: req.body.email}, function(err, obj) {
            if (err) throw err;
            console.log("1 document deleted from Alumni");
        });
        res.redirect('/adminA')
    } catch (error) {
      console.log(error)
    }
}