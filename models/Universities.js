const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UniversitySchema = new Schema({
  university: {
    type: String,
    required: true
  },
  lat: {
    type: String,
    required: true
  },
  lng: {
    type: String,
    required: true
  },
}, {timestamps: true})

const Universities = mongoose.model('Universities', UniversitySchema);
module.exports = Universities;