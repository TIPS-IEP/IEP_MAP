var Admin = require('../models/admin');

module.exports = {
    ensureAdmin: async function (req, res, next) {
        if(await Admin.find({ email: req.user.email }).lean() == ""){
            res.redirect('/')
        }else{
            return next()
        }
    },
}