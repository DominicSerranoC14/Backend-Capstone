'use strict';

const createNewPost = (req, res) => {
  console.log('New post route', req.body);
};

const getEntirePostCollection = (req, res) => {
  res.send({
    'postList': [
      { 'one': 'body'},
      { 'two': 'body'},
      { 'three': 'body'}
    ]
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

const editSpecificPost = (req, res) => {
  console.log('Edit specific post route', req.body);
  console.log('Route Param Post Id', req.params)
};

module.exports = { createNewPost, getEntirePostCollection, getSpecificPost, editSpecificPost };
