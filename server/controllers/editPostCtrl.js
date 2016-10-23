'use strict';

const createNewPost = (req, res) => {
  console.log('New post route', req.body);
};


const editSpecificPost = (req, res) => {
  console.log('Edit specific post route', req.body);
  console.log('Route Param Post Id', req.params)
};

const deleteSpecificPost = (req, res) => {

};

module.exports = {
  createNewPost,
  editSpecificPost,
  deleteSpecificPost
};
