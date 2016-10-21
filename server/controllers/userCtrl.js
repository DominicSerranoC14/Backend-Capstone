'use strict';

const User = require('../models/User.js');
/////////////////////////////////////////

//Gets a specific user's document
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

// POST user obj to DB, will use to send new users and to update user docs
const editUserProfile = ({ body }, res) => {
  User
  .findOneAndUpdate({"email": body.email}, body)
  .then((updatedUser) => {
    res.send({ msg: `Updated User ${body.userName}` });
  });
};

/////////////////////////////////////////
module.exports = { getUserProfile, editUserProfile };
