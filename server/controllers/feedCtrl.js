'use strict';

const Post = require('../models/Post.js');
/////////////////////////////////////////

//Route for home view data
module.exports = (req, res) => {
  res.send({ 'msg': 'This is the home page feed'});
};
