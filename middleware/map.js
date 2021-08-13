var Alumni = require('../models/Alumni');

module.exports = {
    ensureMapSuper: function (req, res, next) {
        Alumni.find({ 'Email': req.user.email })
        .then((result) => {
            if(typeof(result[0]) == "object"){
                return next()
            }else{
                res.redirect('/')
          }
        })
        .catch((err) => {
          console.log(err);
        });        
    },
}