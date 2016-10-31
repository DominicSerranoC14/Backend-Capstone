'use strict';

const { createWriteStream, readdirSync, unlinkSync } = require('fs');
const { red, cyan } = require('chalk');
const exec = require('child_process').exec;
const spawn = require('child_process').spawn;
const Video = require('../models/Video.js');
let randomNum = Math.floor(Math.random() * (10000 - 0 + 1) + 0);
let videoUrl = `http://localhost:3000/video${randomNum}.mp4`;
/////////////////////////////////////////


const receiveVideoStream = (req, res) => {

  console.log(cyan(Date().slice(16, -15)), 'Writing stream to file')
  req.pipe(createWriteStream(`./server/videoFiles/video${randomNum}.h264`));

  req.on('end', () => {
    exec(`ffmpeg -r 30 -i server/videoFiles/video${randomNum}.h264 -vcodec copy server/videoFiles/video${randomNum}.mp4`, () => {
      // Unlink each h264 file after it is converted
      readdirSync('server/videoFiles').forEach((each) => {
        if ( each.split('.')[1] === 'h264' ) {
          unlinkSync(`server/videoFiles/${each}`);
        }
      });
    });
    console.log(cyan(Date().slice(16, -15)), 'File video.h264 endcoded into video.mp4');
    console.log(cyan(Date().slice(16, -15)), 'Upload done');

    Video.create({
      ownerEmail: 'me@me.com',
      timeStamp: Date().slice(0, -15),
      videoUrl: videoUrl
    })
    .then((videoObj) => {
      if (videoObj) {
        console.log(cyan(Date().slice(16, -15)), `Video has been saved in database at ${newImage.videoUrl}`);
        res.send({ msg: 'Video was created' });
      } else {
        res.send({ msg: 'Video was not created.' });
      }
    })
    .catch((err) => {
      res.send({msg: 'ERROR: Image could not be created'});
    });
  });

};


/////////////////////////////////////////
module.exports = { receiveVideoStream };
