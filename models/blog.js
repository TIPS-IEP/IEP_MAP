const mongoose = require('mongoose')
const MUUID = require('uuid-mongodb');

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
    tag: {
        type: Array,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    email: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Blog', BlogSchema);