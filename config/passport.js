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
        console.log(profile)
    }))
    passport.serializeUser((user, done) => {
        done(null, user.id)
      })
      
      passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => 
          done(err, user))
      })
}