'use strict';

const { createWriteStream } = require('fs');
const exec = require('child_process').exec;
const spawn = require('child_process').spawn;
/////////////////////////////////////////

const encodeVideo = (req, res) => {
  return new Promise((resolve, reject) => {
    req.pipe(createWriteStream('./server/videoFiles/video.h264'));
    resolve();
  });
}


const receiveVideoStream = (req, res) => {

  encodeVideo(req, res)
  .then(() => {
    setTimeout(() => {
      exec(`ffmpeg -r 30 -i server/videoFiles/video.h264 -vcodec copy server/videoFiles/video.mp4`);
      console.log('File video.h264 endcoded into video.mp4');
    }, 6000);
  })
  .catch((err) => console.log('Error: ', err));

};


/////////////////////////////////////////
module.exports = { receiveVideoStream };
