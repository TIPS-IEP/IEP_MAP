const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')
const config = require('./config')

module.exports = function(passport){
    passport.use(new GoogleStrategy({
        clientID: config.clientId,
        clientSecret: config.secret,
        callbackURL: config.callback
    },
    async(accessToken, refreshTocken, profile, done) => {
        const newUser = {
            googleId: profile.id,
            displaceName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value
        }

        try{
            let user = await User.findOne({googleId: profile.id})
            if(user) { 
                done(null, user)
            }else{
                user = await User.create(newUser)
                done(null, user)
            }
        } catch(error){
            console.error(error)
        }
    }))
    passport.serializeUser((user, done) => {
        done(null, user.id)
      })
      
      passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => 
          done(err, user))
      })
}