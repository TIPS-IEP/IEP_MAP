var isAuthenticated = false;
var image = null;
var firstName = null;
var Blog = require("../models/blog");
var Alumni = require("../models/Alumni")


const html2pug = require('html2pug')


exports.addBlog = async function(req, res, next) {
  req.body.email = req.user.email;
  if(await Alumni.find({ Email: req.user.email }).lean() != ""){
    const authorObject = await Alumni.find({ Email: req.user.email }).lean();
    req.body.author = authorObject[0].FirstName + " " + authorObject[0].LastName;
  }

  await Blog.create(req.body, function(err, obj) {
    if (err) throw err;
    console.log("create new blog in blog");
    res.redirect("/dashboard")
  });
}

exports.showDashboard = async function(req, res, next) {
  const blogs = await Blog.find({ email: req.user.email }).lean();
  if(req.isAuthenticated()){
    firstName = req.user.firstName;
    isAuthenticated = true;
    image = req.user.image;
  }else{
    firstName = null;
    isAuthenticated = false;
    image = null;
  }
  res.render('blog/dashboard', {
    loggedin: isAuthenticated,
    name: firstName,
    blogs: blogs,
    image,
  });
}

exports.viewBlog = async function(req, res, next) {
  var isAuthenticated = false;
  if(req.isAuthenticated()){
    firstName = req.user.firstName;
    isAuthenticated = true;
    image = req.user.image;
  }else{
    firstName = null;
    isAuthenticated = false;
    image = null;
  }
  var blog = await Blog.find({_id: req.params.blog_id}).lean();
  if(!blog){
    res.render('error')
  }else{
    // const pug = html2pug(blog[0].content, { tabs: true });
    // console.log(pug)
    res.render('blog/viewBlog', {
      loggedin: isAuthenticated,
      name: firstName,
      blog: blog[0].content,
      image,
    });
  }
}

exports.editBlog = async function(req, res, next) {
  var isAuthenticated = false;
  if(req.isAuthenticated()){
    firstName = req.user.firstName;
    isAuthenticated = true;
    image = req.user.image;
  }else{
    firstName = null;
    isAuthenticated = false;
    image = null;
  }
  var blog = await Blog.find({_id: req.params.blog_id, email: req.user.email }).lean();
  if(!blog){
    res.render('error')
  }else{
    res.render('blog/editBlog', {
      loggedin: isAuthenticated,
      name: firstName,
      blog: blog[0],
      image,
    });
  }
}

exports.authEditBlog = async function(req, res, next) {
  var isAuthenticated = false;
  if(req.isAuthenticated()){
    firstName = req.user.firstName;
    isAuthenticated = true;
    image = req.user.image;
  }else{
    firstName = null;
    isAuthenticated = false;
    image = null;
  }
  var blog = await Blog.find({_id: req.params.blog_id}).lean();
  if(!blog){
    res.render('error')
  }else{
    res.render('blog/editBlog', {
      loggedin: isAuthenticated,
      name: firstName,
      blog: blog[0],
      image,
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
    firstName = req.user.firstName;
    isAuthenticated = true;
    image = req.user.image;
  }else{
    firstName = null;
    isAuthenticated = false;
    image = null;
  }
  res.render('blog/writeBlog', {
    loggedin: isAuthenticated,
    name: firstName,
    image,
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
  blog[0].status = "verified";
  console.log(blog[0]);
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