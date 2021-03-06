'use strict';

const { red, cyan } = require('chalk');
const request = require('request');
const { RPI } = require('../apiDoc_RPIConfig/ipConfig.js');
/////////////////////////////////////////

const RPITakePicture = (req, res) => {
  request.post(`${RPI}/rpi/image/single`);

  res.send({ msg: 'Sent'});
};

const RPITakeVideo = (req, res) => {
  request.post(`${RPI}/rpi/video/static`);

  res.send({ msg: 'Sent'});
};

/////////////////////////////////////////
module.exports = { RPITakePicture, RPITakeVideo };
