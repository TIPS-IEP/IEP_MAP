const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlumniSchema = new Schema({
  EnglishName: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
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
  }
}, {timestamps: true})

const Alumni = mongoose.model('Alumni', AlumniSchema);
module.exports = Alumni;