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
    type: Int,
    required: true
  },
  Major: {
    type: String,
    required: true
  }
}, {timestamps: true})

const ALUMNI = mongoose.model('Alumni_Information', AlumniSchema);
module.exports = ALUMNI;