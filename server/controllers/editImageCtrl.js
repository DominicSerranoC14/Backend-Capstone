'use strict';

const Image = require('../models/Image.js');
/////////////////////////////////////////


const createNewImage = (req, res) => {
  let data = '';
  req.on('data', chunk =>  {
    data += chunk.toString('base64');
    console.log('Data chunk', chunk.toString('base64'));
  });

  req.on('end', () => {
    console.log('Stream ended')
    Image
    .create({
      ownerId: '12345',
      ownerName: 'greg2g',
      timeStamp: new Date(),
      _id: '12345' + '5b6n7m',
      encodedImg: data
    })
    .then((newImageObject) => {
      if (newImageObject) {
        res.send(newImageObject);
      } else {
        res.send({ msg: 'Image was not created.' });
      }
    })
    .catch((err) => {
      res.send({msg: 'ERROR: Image could not be created'});
      console.log(err);
    });
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
