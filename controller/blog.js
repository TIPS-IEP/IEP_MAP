
var Blog = require("../models/blog")

exports.addBlog = async function(req, res, next) {
  req.body.email = req.user.email
  await Blog.create(req.body, function(err, obj) {
    if (err) throw err;
    console.log("create new blog in blog");
    res.redirect("/dashboard")
  });
}

exports.showDashboard = async function(req, res, next) {
  var isAuthenticated = false;
  const blogs = await Blog.find({ email: req.user.email }).lean();
  if(req.isAuthenticated()){
    var firstName = req.user.firstName;
    isAuthenticated = true;
  }else{
    var firstName = null
  }
  res.render('blog/dashboard', {
    loggedin: isAuthenticated,
    name: firstName,
    blogs: blogs,
  });
}

exports.editBlog = async function(req, res, next) {
  var isAuthenticated = false;
  if(req.isAuthenticated()){
    var firstName = req.user.firstName;
    isAuthenticated = true;
  }else{
    var firstName = null
  }
  var blog = await Blog.find({_id: req.params.blog_id, email: req.user.email }).lean();
  if(!blog){
    res.render('error')
  }else{
    res.render('blog/editBlog', {
      loggedin: isAuthenticated,
      name: firstName,
      blog: blog,
    });
  }
}

exports.saveBlog = async function(req, res, next) {
  req.body.email = req.user.email;
  await Blog.deleteOne({_id: req.params.blog_id}, function(err, obj) {
    if (err) throw err;
    console.log("delete blog " + req.params.blog_id + " from blog");
  });
  await Blog.create(req.body, function(err, obj) {
      if (err) throw err;
      console.log("create blog " + req.params.blog_id + " in blog");
  });
  res.redirect("/dashboard")
}

exports.showWriteBlog = function(req, res, next) {
  var isAuthenticated = false;
  if(req.isAuthenticated()){
    var firstName = req.user.firstName;
    isAuthenticated = true;
  }else{
    var firstName = null
  }
  res.render('blog/writeBlog', {
    loggedin: isAuthenticated,
    name: firstName,
  });
}

exports.deleteBlog = async function(req, res, next) {
  await Blog.deleteOne({_id: req.params.blog_id}, function(err, obj) {
    if (err) throw err;
    console.log("delete blog " + req.params.blog_id + " from blog");
  });
  res.redirect("/dashboard")
}

exports.authDelete = async function(req, res, next) {
  await Blog.deleteOne({_id: req.params.blog_id}, function(err, obj) {
    if (err) throw err;
    console.log("delete blog " + req.params.blog_id + " from blog");
  });
  res.redirect("/verifyblogs")
}

exports.verifyBlog = async function(req, res, next) {
  const blog = await Blog.find({ _id: req.params.blog_id }).lean();
  blog[0].status = "verified"
  await Blog.deleteOne({_id: req.params.blog_id}, function(err, obj) {
    if (err) throw err;
    console.log("delete blog " + req.params.blog_id + " from blog");
  });
  await Blog.create(blog, function(err, obj) {
    if (err) throw err;
    console.log("create blog " + req.params.blog_id + " in blog");
  });
  res.redirect("/verifyblogs")
}

exports.unverifyBlog = async function(req, res, next) {
  const blog = await Blog.find({ _id: req.params.blog_id }).lean();
  blog[0].status = "not verified"
  await Blog.deleteOne({_id: req.params.blog_id}, function(err, obj) {
    if (err) throw err;
    console.log("delete blog " + req.params.blog_id + " from blog");
  });
  await Blog.create(blog, function(err, obj) {
    if (err) throw err;
    console.log("create blog " + req.params.blog_id + " in blog");
  });
  res.redirect("/verifyblogs")
}