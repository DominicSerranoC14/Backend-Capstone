'use strict';

const Post = require('../models/Post.js');
/////////////////////////////////////////

const createNewPost = ({ body }, res) => {
  Post
  .create(body)
  .then((newPostObj) => {
    res.send(newPostObj);
  })
  .catch((err) => {
    res.send({ msg: 'ERROR: Post could not be created' });
  });
};


const editSpecificPost = ({ body, params: { id }}, res) => {
  Post
  .findOneAndUpdate({ _id: id }, body)
  .then((success) => {
    res.send(success);
  })
  .catch((err) => {
    res.send({ msg: `ERROR: Post ${id} could not be edited` });
  });
};

const deleteSpecificPost = (req, res) => {

};

module.exports = {
  createNewPost,
  editSpecificPost,
  deleteSpecificPost
};
