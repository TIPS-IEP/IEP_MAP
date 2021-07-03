var Blog = require("../models/blog")

exports.addBlog = async function(req, res, next) {
  try {
    req.body.user = req.user.id
    await Blog.create(req.body)
    res.redirect("/blog")
  } catch (error) {
    console.log(error)
    res.redirect("/error")
  }
}

exports.showDashboard = async function(req, res, next) {
  var isAuthenticated = false;
  if(req.isAuthenticated()){
    var firstName = req.user.firstName;
    isAuthenticated = true;
  }else{
    var firstName = null
  }
  res.render('blog/dashboard', {
    loggedin: isAuthenticated,
    name: firstName,
  });
}
