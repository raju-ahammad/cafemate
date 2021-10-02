const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
  title: {
   type: String,
   trim: true,
   required: true
 },
   artist: {
   type: String,
   trim: true,
   required: true
 },
 user: {
  type: String,
  trim: true
},
isFinished: {
  type: Number,
  default: 0
},
  
  events: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Events'
  }
},
{
    timestamps: true
})


module.exports = mongoose.model('Song', songSchema)