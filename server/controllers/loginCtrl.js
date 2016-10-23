'use strict';

const User = require('../models/User.js');
/////////////////////////////////////////

const loginExistingUser = ({ body: { email, userName, password }}, res) => {
  User
  .findOne({ "email": email })
  .then((userObject) => {
    if (userObject) {
      res.send(userObject);
      //Grant access if user exists in db
    } else {
      res.send({ msg: 'Invalid credentials, cannot login' })
    }
  });
};

module.exports = { loginExistingUser };
