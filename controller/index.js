var isAuthenticated = false;
var image = null;
var firstName = null;

exports.index = function(req, res, next) {
  if(req.isAuthenticated()){
    firstName = req.user.firstName;
    isAuthenticated = true;
    image = req.user.image;
  }else{
    firstName = null;
    isAuthenticated = false;
    image = null;
  }
  res.render('index', {
    loggedin: isAuthenticated,
    name: firstName,
    image: image,
  });
}

exports.newIndex = function(req, res, next) {
  if(req.isAuthenticated()){
    firstName = req.user.firstName;
    isAuthenticated = true;
    image = req.user.image;
  }else{
    firstName = null;
    isAuthenticated = false;
    image = null;
  }
  res.render('newIndex', {
    loggedin: isAuthenticated,
    name: firstName,
    image: image,
  });
}

exports.showAbout = function(req, res) {
  if(req.isAuthenticated()){
    firstName = req.user.firstName;
    isAuthenticated = true;
    image = req.user.image;
  }else{
    firstName = null;
    isAuthenticated = false;
    image = null;
  }
  res.render('about/about', {
    loggedin: req.isAuthenticated(),
    name: firstName,
    image: image,
  });
}

exports.showContact = function(req, res) {
  if(req.isAuthenticated()){
    firstName = req.user.firstName;
    isAuthenticated = true;
    image = req.user.image;
  }else{
    firstName = null;
    isAuthenticated = false;
    image = null;
  }
  res.render('contact', {
    loggedin: req.isAuthenticated(),
    name: firstName,
    image: image,
  });
}

exports.showBoard = function(req, res, next) {
  res.render('board');
}
exports.showShare = function(req, res, next) {
  res.render('share');
}

exports.showEvents = function(req, res, next) {
  res.render('events');
}

exports.showError = function(req, res, next) {
  if(req.isAuthenticated()){
    firstName = req.user.firstName;
    isAuthenticated = true;
    image = req.user.image;
  }else{
    firstName = null;
    isAuthenticated = false;
    image = null;
  }
  res.render('error', {
    loggedin: req.isAuthenticated(),
    name: firstName,
    image: image,
  });
}


exports.showWiki = function(req, res, next) {
  if(req.isAuthenticated()){
    firstName = req.user.firstName;
    isAuthenticated = true;
    image = req.user.image;
  }else{
    firstName = null;
    isAuthenticated = false;
    image = null;
  }
  res.render('wiki/wiki', {
    loggedin: isAuthenticated,
    name: firstName,
    image: image,
  });
}

exports.showBlog = function(req, res, next) {
  const collegeBlogs = await Blog.find({ tag: "college" }).lean();
  const adviceBlogs = await Blog.find({ tag: "advice" }).lean();
  const activitiesBlogs = await Blog.find({ tag: "activities" }).lean();
  if(req.isAuthenticated()){
    firstName = req.user.firstName;
    isAuthenticated = true;
    image = req.user.image;
  }else{
    firstName = null;
    isAuthenticated = false;
    image = null;
  }
  res.render('blog/blog', {
    loggedin: isAuthenticated,
    name: firstName,
    image: image,
  });
}





