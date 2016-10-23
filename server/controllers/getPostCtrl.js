'use strict';

const Post = require('../models/Post.js');
/////////////////////////////////////////

//Route for home view data
const getPostCollection = (req, res) => {
  Post
  .find()
  .then((postCollection) => {
    res.send(postCollection);
  })
  .catch((err) => {
    res.send({ msg: 'No post collection exists.' })
  });
};


const getUserPostCollection = ({ params: { id }}, res) => {
  Post
  .find({ ownerId: id })
  .then((postCollection) => {
    res.send(postCollection);
  })
  .catch((err) => {
    res.send({ msg: `ERROR: No user posts with id ${id} were found`})
  });
};


const getSpecificPost = (req, res) => {
  console.log('Get specific post params', req.params);
  res.send({
    'postId': '123',
    'owner': 'Phillip',
    'heading': 'Phillip likes cheese'
  });
};


/////////////////////////////////////////
module.exports = {
  getPostCollection,
  getUserPostCollection,
  getSpecificPost
};
