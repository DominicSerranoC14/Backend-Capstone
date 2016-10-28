'use strict';

const { createWriteStream } = require('fs');
const { red, green } = require('chalk');
const exec = require('child_process').exec;
const spawn = require('child_process').spawn;
/////////////////////////////////////////


const receiveVideoStream = (req, res, err) => {
  if ( err ) {
    console.log(red(Date().slice(16, -15)), err)
  }

  console.log(green(Date().slice(16, -15)), 'Writing stream to file')
  req.pipe(createWriteStream('./server/videoFiles/video.h264'));

  req.on('end', () => {
        exec(`ffmpeg -r 30 -i server/videoFiles/video.h264 -vcodec copy server/videoFiles/video.mp4`);
        console.log(green(Date().slice(16, -15)), 'File video.h264 endcoded into video.mp4');
  });

};


/////////////////////////////////////////
module.exports = { receiveVideoStream };
