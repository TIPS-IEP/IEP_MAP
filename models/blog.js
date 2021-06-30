const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        // requre: true,
        trim: true,
    },
    content: {
        type: String,
        requre: true,
    },
    status: {
        type: String,
        default: "public",
        enum: ["public", "private"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Blog', BlogSchema);