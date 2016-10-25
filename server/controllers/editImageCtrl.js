'use strict';

const Image = require('../models/Image.js');
/////////////////////////////////////////


const createNewImage = (req, res) => {
  let data = '';
  req.on('data', chunk => data += chunk.toString('base64'));
  console.log('Data chunk')
  req.on('end', () => console.log('Stream ended'));
  // Image
  // .create(body)
  // .then((newImageObject) => {
  //   if (newImageObject) {
  //     res.send(newImageObject);
  //   } else {
  //     res.send({ msg: 'Image was not created.' });
  //   }
  // })
  // .catch((err) => {
  //   res.send({msg: 'ERROR: Image could not be created'});
  //   console.log(err);
  // });
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
