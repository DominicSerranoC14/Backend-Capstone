'use strict';

//User profile routes for user info and updating
const getUserProfile = (req, res) => {
  res.send({'user': {
    'name': 'Greg',
    'age': '400'
  }
  });
};

const editUserProfile = (req, res) => {
  console.log('User edit route ResJSON', req.body);
};

module.exports = { getUserProfile, editUserProfile };
