'use strict';

const Post = require('../models/Post.js');
/////////////////////////////////////////

//Route for home view data
module.exports = (req, res) => {
  Post
  .find()
  .then((postCollection) => {
    res.send(postCollection);
  })
  .catch((err) => {
    console.log(err);
    res.send({ msg: 'No post collection exists.' })
  });
};
