'use strict';

const Image = require('../models/Image.js');
/////////////////////////////////////////


const getEntireImageCollection = (req, res) => {
  Image
  .find()
  .then(imageCollection => {
    console.log("Test imageCollection", imageCollection);
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


const deleteSpecificImage = ({ params: { field, id }}, res) => {
  Image
  .remove({ field : id})
  .then((response) => {
    res.send({ msg: `Image id ${id} was deleted`});
  })
  .catch((err) => {
    res.send({msg: 'ERROR: No user collection found'});
  });
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
  deleteSpecificImage,
  createNewImage
};
