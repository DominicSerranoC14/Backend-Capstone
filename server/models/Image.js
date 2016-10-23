'use strict';

const mongoose = require('mongoose');
/////////////////////////////////////////


const userSchema = new mongoose.Schema({
  id: String,
  ownerName: {
    type: String,
    required: true
  },
  ownerId: {
    type: String,
    required: true
  },
  mediaType: String,
  timeStamp: {
    type: String,
    required: true
  },
  encodedImg: {
    type: String,
    required: true,
    index: { unique: true }
  }
});


/////////////////////////////////////////
module.exports = mongoose.model('Image', userSchema);
