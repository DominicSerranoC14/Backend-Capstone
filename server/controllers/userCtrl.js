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
const getUserProfile = ({ session, params: { id } }, res) => {
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
const editUserProfile = ({ body, params: { id }}, res) => {
  User
  .findOneAndUpdate({_id: id}, body)
  .then((updatedUser) => {
    res.send({ msg: `Updated User ${id}` });
  })
  .catch((err) => {
    res.send({msg: 'ERROR: No user profile found'});
  });
};


const getCurrentUser = ({session: {email}}, res) => {
  if (email) {
    res.send({ 'email': email });
  } else {
    res.send({ msg: 'No current user signed in'});
  }
};


/////////////////////////////////////////
module.exports = {
  getUserCollection,
  getUserProfile,
  editUserProfile,
  getCurrentUser
};
