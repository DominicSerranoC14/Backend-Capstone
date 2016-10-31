'use strict';

const Image = require('../models/Image.js');
const { uploadPhoto } = require('../aws/awsConfig.js');
const { red, cyan } = require('chalk');
/////////////////////////////////////////


const createNewImage = (req, res, err) => {
  uploadPhoto(req, res);

  req.on('end', () => {
    console.log(cyan(Date().slice(16, -15)) ,'Stream ended');
  });
};


const deleteSpecificImage = ({ params: { field, id }}, res) => {
  Image
  .remove({ field: id})
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
