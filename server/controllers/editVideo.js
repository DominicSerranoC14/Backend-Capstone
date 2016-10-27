'use strict';

const { writeFileSync } = require('fs');
/////////////////////////////////////////


const receiveVideoStream = (req, res) => {

  console.log("Video stream function reached");
  let videoData = '';
  req.on('data', (data) => {
    console.log('Data chunk');
    videoData += data;
  });

  req.on('end', () => {
    console.log('Stream ended');
    writeFileSync('./server/videoFiles/video.mp4', videoData);
  });

};


const sendVideoStream = (req, res) => {

  

};


/////////////////////////////////////////
module.exports = { receiveVideoStream };
