'use strict';

const Image = require('../models/Image.js');
/////////////////////////////////////////

const getEntireImageCollection = (req, res) => {
  res.send({
    'image': [
      { 'one': '0398' },
      { 'two': '0398' },
      { 'three': '0398' }
    ]
  });
};

const getSpecificImage = (req, res) => {
  let id = req.params.id;
  console.log('Specific Img', req.params);
  res.send({
    'imageid': '098',
    'user': `${id}`
  });
};

const editSpecificImage = (req, res) => {
  console.log('Specific Img', req.params);
  console.log('Edit Image Single Route', req.body);
};

const createNewImage = ({ body }, res) => {
  Image
  .create(body)
  .then((newImageObject) => {
    if (newImageObject) {
      res.send(newImageObject);
    } else {
      res.send({ msg: 'Image was not created.' });
    }
  });
};

module.exports = { getEntireImageCollection, getSpecificImage, editSpecificImage, createNewImage };
