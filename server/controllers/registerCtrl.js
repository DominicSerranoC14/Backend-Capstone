'use strict';

const User = require('../models/User.js');
const { red, cyan } = require('chalk');
/////////////////////////////////////////

const registerNewUser = ({ body }, res) => {
  User
  .findOne({ "email": body.email })
  .then((userObject) => {
    if (userObject) {
      //Display error message if user exists
      res.send({ msg: 'User acccount exists, register is for new users only' })
    } else {
      User
      .create(body)
      .then((registeredUser) => {
        // Create user in DB and grant access to home feed
        res.send(registeredUser);
      })
      .catch((err) => {
        console.log(red(Date().slice(16, -15)), 'Error with register function');
        console.error(err);
        res.send({ msg: 'User could not be created. Try again.'});
      });
    };
  })
  .catch((err) => {
    console.log(red(Date().slice(16, -15)), 'Error with register function');
    console.error(err);
    res.send({ msg: 'User could not be created. Try again.'});
  });
};

module.exports = { registerNewUser };
