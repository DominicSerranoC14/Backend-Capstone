'use strict';

const { createWriteStream } = require('fs');
const { red, green } = require('chalk');
const exec = require('child_process').exec;
const spawn = require('child_process').spawn;
/////////////////////////////////////////


const receiveVideoStream = (req, res, err) => {
  if ( err ) {
    console.log(red(new Date()), err)
  }

  console.log(green(new Date()), 'Writing stream to file')
  req.pipe(createWriteStream('./server/videoFiles/video.h264'));

  req.on('end', () => {
        exec(`ffmpeg -r 30 -i server/videoFiles/video.h264 -vcodec copy server/videoFiles/video.mp4`);
        console.log(green(new Date()), 'File video.h264 endcoded into video.mp4');
  });

};


/////////////////////////////////////////
module.exports = { receiveVideoStream };
