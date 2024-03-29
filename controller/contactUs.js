var nodemailer = require('nodemailer');

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

exports.sendForm = function(req, res, next) {
  res.redirect('/');
  sendEmailToAdmin(req.body);
}

exports.sendJoin = function(req, res, next) {
  res.redirect('/');
  sendJoinToAdmin(req.body);
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
      subject: user.firstname + ', ' + user.lastname + ' tried to contact us!',
      text: 'sender: ' + user.firstname + ', ' + user.lastname + '\n' + 'country: ' + user.country + '\n' + 'subject: ' + user.subject
  };
  return mailContent
}

function sendJoinToAdmin(user){
  emailSender.sendMail(createJoinContentToAdmin(user), function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
  });
}

function createJoinContentToAdmin(user){
  var mailContent = {
    from: 'iep.alumni.association@gmail.com',
    to: 'crashingballoon@gmail.com, andrewchuang0110@gmail.com, alanhou911222@gmail.com',
    subject: user.firstname + ', ' + user.lastname + ' tried to contact us!',
    text: 'sender: ' + user.firstname + ', ' + user.lastname + '\n' + 'high-school: ' + user.highschool + '\n' + 'subject: ' + user.subject
  };
  return mailContent
}