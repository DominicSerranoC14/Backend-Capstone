'use strict';

const mongoose = require('mongoose');
/////////////////////////////////////////


const userSchema = new mongoose.Schema({
  // _id: String,
  ownerEmail: {
    type: String,
    required: true
  },
  mediaType: String,
  timeStamp: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true,
    index: { unique: true }
  }
});


/////////////////////////////////////////
module.exports = mongoose.model('Image', userSchema);
