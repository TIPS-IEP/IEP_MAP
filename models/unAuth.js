const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unAuthSchema = new Schema({
  EnglishName: {
    type: String,
    required: true
  },
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  Email: {
    type: String,
  },
  InstagramUsername: {
    type: String
  },
  GraduationYear: {
    type: String,
    required: true
  },
  Major: {
    type: String,
    required: true
  },
  University: {
    type: String,
    required: true
  }
}, {timestamps: true})

const unAuth = mongoose.model('unAuth', unAuthSchema);
module.exports = unAuth;