'use strict';

const User = require('../models/User.js');
const { red, cyan } = require('chalk');
/////////////////////////////////////////

const loginExistingUser = ({ session, body: { email, userName, password }}, res) => {
  User
  .findOne({ "email": email })
  .then((userObject) => {
    if (userObject.password === password) {
      session.email = email;
      res.send(userObject);
    } else {
      res.send({ msg: 'Invalid credentials, cannot login' })
    }
  })
  .catch((err) => {
    console.log(red(Date().slice(16, -15)), 'Error with login function');
    console.error(err);
    res.send({ msg: 'Invalid credentials, cannot login'});
  });
};

module.exports = { loginExistingUser };
