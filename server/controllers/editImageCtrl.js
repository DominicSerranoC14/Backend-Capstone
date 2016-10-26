'use strict';

const Image = require('../models/Image.js');
const { uploadPhoto } = require('../awsConfig.js')
/////////////////////////////////////////


const createNewImage = (req, res, err) => {
  uploadPhoto(req, res);

  req.on('end', () => {
    console.log('Stream ended')
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
