'use strict';

const Video = require('../models/Video.js');
/////////////////////////////////////////

const getUserVideoCollection = ({ params: { id }}, res) => {
  Video
  .find({ownerEmail: id})
  .then((videoCollection) => {
    if (videoCollection.length === 0) {
      res.send({msg: 'No videos associated to user in db currently'})
    } else {
      res.send(videoCollection);
    }
  })
  .catch((err) => {
    res.send({msg: 'ERROR: No vidoe collection found'});
  });
};


module.exports = {
  getUserVideoCollection
};
