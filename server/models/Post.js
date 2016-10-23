'use strict';

const mongoose = require('mongoose');
/////////////////////////////////////////


const userSchema = new mongoose.Schema({
  ownerName: {
    type: String,
    required: true
  },
  ownerId: {
    type: String,
    required: true
  },
  timeStamp: {
    type: String,
    required: true
  },
  attachedImageList: [ String ],
  attachedVideoId: String,
  tagList: [ String ],
  contentBody: {
    type: String,
    required: true
  },
  header: {
    type: String,
    required: true
  }
});


/////////////////////////////////////////
module.exports = mongoose.model('POST', userSchema);
