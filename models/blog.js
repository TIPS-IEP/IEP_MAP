const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        require: true,
        // trim: true,
    },
    content: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        default: "not verified",
        enum: ["verified", "not verified"]
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