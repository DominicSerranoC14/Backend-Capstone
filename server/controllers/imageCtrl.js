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
// process.on('unhandledRejection', (reason) => {
//   console.log('Reason: ' + reason);
// });

const getSpecificImage = ({ params: { id }}, res) => {
  Image
  .findOne({ "_id": id })
  .then((imageObj) => {
    if (imageObj) {
      res.send({msg: 'Image found', imageObj});
    }
  })
  .catch((err) => {
    res.send({msg: 'ERROR: No image found'});
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
  })
  .catch((err) => {
    res.send({msg: 'ERROR: Image could not be created'});
  });
};

module.exports = { getEntireImageCollection, getSpecificImage, editSpecificImage, createNewImage };
