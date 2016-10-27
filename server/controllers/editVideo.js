'use strict';

const { writeFileSync, createReadStream, createWriteStream } = require('fs');
/////////////////////////////////////////


const receiveVideoStream = (req, res) => {

  req.pipe(createWriteStream('./server/videoFiles/video.h264'));

};


const sendVideoStream = (req, res) => {

  createReadStream('./server/videoFiles/video.h264')
  .pipe(res);

};


/////////////////////////////////////////
module.exports = { receiveVideoStream, sendVideoStream };
