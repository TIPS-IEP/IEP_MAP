var nodemailer = require('nodemailer');

var Alumni = require('../models/Alumni');
var unAuth = require('../models/unAuth');
var Admin = require('../models/admin');

var emailSender = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'iep.alumni.association@gmail.com',
      pass: 'IEP1234@',
    }
});

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
            sendEmailToAdmin(req.body);
        });
        res.redirect('/profile');
    }
}

function sendEmailToAdmin(user){
    emailSender.sendMail(createEmailContentToAdmin(user), function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
}

function createEmailContentToAdmin(user){
    var mailContent = {
        from: 'iep.alumni.association@gmail.com',
        to: 'crashingballoon@gmail.com, andrewchuang0110@gmail.com, alanhou911222@gmail.com',
        subject: 'A user has submit his or her data to unAuth',
        text: user.EnglishName + ' has submit their data to unAuth! Please confirm if they is one of us.',
    };
    return mailContent
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
        sendEmailToUser(req.params.email);
    });
    await unAuth.deleteOne({Email: req.params.email}, function(err, obj) {
        if (err) throw err;
        console.log("delete " + req.params.email + " from unAuth");
    });
    res.redirect('/unAuth');
}

function sendEmailToUser(userEmail){
    emailSender.sendMail(createEmailContentToUser(userEmail), function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
}

function createEmailContentToUser(userEmail){
    var mailContent = {
        from: 'iep.alumni.association@gmail.com',
        to: userEmail,
        subject: 'We have authorized your account. You are now one of us',
        text: 'You now have access to our student profile.',
    };
    return mailContent
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

