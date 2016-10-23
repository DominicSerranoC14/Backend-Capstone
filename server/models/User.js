'use strict';

const mongoose = require('mongoose');
const HTML5_EMAIL_VAL = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
/////////////////////////////////////////


const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    index: { unique: true },
  },
  email: {
    type: String,
    required: true,
    match: HTML5_EMAIL_VAL,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  },
  userProfileImg: String,
  likedUsers: [ String ],
  cameraId: String,
  newUser: Boolean,
  registeredPetList: [ String ]
});


/////////////////////////////////////////
module.exports = mongoose.model('User', userSchema);
