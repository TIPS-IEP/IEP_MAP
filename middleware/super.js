var Alumni = require('../models/Alumni');

module.exports = {
    ensureSuper: function (req, res, next) {
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
    // haven't change bellow code; not sure if we would use it
    // ensureNotSuper: function (req, res, next) {
    //     Alumni.find({ 'Email': req.user.email })
    //     .then((result) => {
    //         if(typeof(result[0]) == "object"){
    //             return next()
    //         }else{
    //             res.redirect('/')
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
}