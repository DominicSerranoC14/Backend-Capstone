'use strict';

const User = require('../models/User.js');
/////////////////////////////////////////

const registerNewUser = ({ body }, res) => {

  let formContents = body;

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
        console.log("Test registeredUser", registeredUser);
        // Create user in DB and grant access to home feed
        res.send({msg: `Account created for userName: ${body.userName} at  email: ${body.email}`});
      });
    }
  });

};

module.exports = { registerNewUser };
