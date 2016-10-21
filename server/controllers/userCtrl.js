'use strict';

const User = require('../models/User.js');
/////////////////////////////////////////

//User profile routes for user info and updating
const getUserProfile = (req, res) => {
  const userSearchParams = req.params.id;

  User
  .findOne({ email: userSearchParams })
  .then((userObject) => {
    if (userObject) {
      res.send(userObject);
    } else {
      res.send({ msg: 'No user found in database' })
    }
  });
};

const editUserProfile = (req, res) => {
  console.log('User edit route ResJSON', req.body);
};

module.exports = { getUserProfile, editUserProfile };
