const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlumniSchema = new Schema({
  EnglishName: {
    type: String,
    required: true
  },
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
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
  },
  University: {
    type: String,
  }
}, {timestamps: true})

const Alumni = mongoose.model('alumni', AlumniSchema);
module.exports = Alumni;