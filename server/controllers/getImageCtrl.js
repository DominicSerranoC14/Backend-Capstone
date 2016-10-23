'use strict';

const Image = require('../models/Image.js');
/////////////////////////////////////////


const getEntireImageCollection = (req, res) => {
  Image
  .find()
  .then(imageCollection => {
    if (imageCollection.length === 0) {
      res.send({msg: 'No images in db currently'})
    } else {
      res.send(imageCollection);
    }
  })
  .catch((err) => {
    res.send({msg: 'ERROR: No images found'});
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
    if (imageCollection.length === 0) {
      res.send({msg: 'No images associate to user in db currently'})
    } else {
      res.send(imageCollection);
    }
  })
  .catch((err) => {
    res.send({msg: 'ERROR: No user collection found'});
  });
};


module.exports = {
  getEntireImageCollection,
  getSpecificImage,
  getSpeficUserImageCollection
};
