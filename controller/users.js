//database
var mongoose = require('mongoose');
var Alumni = require('../models/Alumni');
var Universities = require('../models/Universities')
var unAuth = require('../models/unAuth')
var Admin = require('../models/admin')


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
        data.push(item.EnglishName);
        data.push(item.Email);
        data.push(item.InstagramUsername);
        data.push(item.GraduationYear);
        data.push(item.Major);
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

//problem havent fixed
exports.admin = async function(req, res) {
    if(await Admin.find({ email: req.user.email }).lean() == ""){
        res.redirect('/')
    }else{
        res.render('login/admin', {
            name: req.user.firstName,
        });
    }
}


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