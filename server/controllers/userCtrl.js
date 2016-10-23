'use strict';

const User = require('../models/User.js');
/////////////////////////////////////////


//Returns all user documents in the db
const getUserCollection = (req, res) => {
  User
  .find()
  .then((userCollection) => {
    res.send(userCollection);
  })
  .catch((err) => {
    res.send({msg: 'ERROR: No user collection found'});
  });
};


//Gets a specific user's document
const getUserProfile = ({ params: { id } }, res) => {
  User
  .findOne({ email: id })
  .then((userObject) => {
    if (userObject) {
      res.send(userObject);
    } else {
      res.send({ msg: 'No user found in database' })
    }
  })
  .catch((err) => {
    res.send({msg: 'ERROR: No user profile found'});
  });
};


// POST user obj to DB, will use to send new users and to update user docs
const editUserProfile = ({ body }, res) => {
  User
  .findOneAndUpdate({"email": body.email}, body)
  .then((updatedUser) => {
    res.send({ msg: `Updated User ${body.userName}` });
  })
  .catch((err) => {
    res.send({msg: 'ERROR: No user profile found'});
  });
};


/////////////////////////////////////////
module.exports = {
  getUserCollection,
  getUserProfile,
  editUserProfile
};
