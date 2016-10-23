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


const getSpecificPost = ({ params: { id }}, res) => {
  Post
  .find({ _id: id })
  .then((postObject) => {
    res.send(postObject)
  })
  .catch((err) => {
    res.send({ msg: `No post found with id ${id}` })
  });
};


/////////////////////////////////////////
module.exports = {
  getPostCollection,
  getUserPostCollection,
  getSpecificPost
};
