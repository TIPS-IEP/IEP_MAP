var Alumni = require('../models/Alumni');

module.exports = {
    ensureMapSuper: async function (req, res, next) {
      if (req.isAuthenticated()){
        if(await Alumni.find({ Email: req.user.email }).lean() == ""){
          res.redirect('/unAuthMap')
        }else{
          return next()
        } 
      }else{
        res.redirect('/unAuthMap')
      }
          
    },
}