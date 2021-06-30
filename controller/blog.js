var Blog = require("../models/blog")

exports.addBlog = async function(req, res, next) {

  try {
    console.log(req.user.id)
    req.body.user = req.user.id
    await Blog.create(req.body)
    res.redirect("/blog")
  } catch (error) {
    console.log(error)
    res.redirect("/error")
  }
}
