const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        requre: true,
        trim: true,
    },
    displayName: {
        type: String,
        requre: true
    },
    firstName: {
        type: String,
        requre: true
    },
    lastName: {
        type: String,
        requre: true
    },
    email: {
        type: String,
        requre: true
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema);