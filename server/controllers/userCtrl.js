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

const editUserProfile = ({ body: { email, userName, password } }, res) => {


  // console.log('User edit route ResJSON', req.params);
  console.log('User edit route ResJSON', email, userName, password);

  User
  .create({ "email": email, "userName": userName, "password": password })
  .then((status) => {
    res.send({ msg: `Account created for userName: ${userName} at  email: ${email}`});
  });
};

module.exports = { getUserProfile, editUserProfile };
