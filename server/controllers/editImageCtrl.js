'use strict';

const Image = require('../models/Image.js');
/////////////////////////////////////////


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


const deleteSpecificImage = ({ params: { field, id }}, res) => {
  Image
  .remove({ _id: id})
  .then((response) => {
    res.send({ msg: `Image id ${id} was deleted`});
  })
  .catch((err) => {
    res.send({msg: 'ERROR: No user collection found'});
  });
};


/////////////////////////////////////////
module.exports = {
  createNewImage,
  deleteSpecificImage
};
