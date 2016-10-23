'use strict';

const Image = require('../models/Image.js');
/////////////////////////////////////////


const getEntireImageCollection = (req, res) => {
  Image
  .find()
  .then(imageCollection => {
    res.send(imageCollection);
  })
  .catch((err) => {
    res.send({msg: 'ERROR: No images found'});
    console.log(err);
  });
};


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


const getSpeficUserImageCollection = ({ params: { id }}, res) => {
  Image
  .find({ownerId: id})
  .then((imageCollection) => {
    res.send(imageCollection);
  })
  .catch((err) => {
    res.send({msg: 'ERROR: No user collection found'});
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


module.exports = {
  getEntireImageCollection,
  getSpecificImage,
  getSpeficUserImageCollection,
  editSpecificImage,
  createNewImage
};
