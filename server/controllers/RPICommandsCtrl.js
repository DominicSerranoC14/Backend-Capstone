'use strict';

const { red, cyan } = require('chalk');
const request = require('request');
/////////////////////////////////////////

const RPITakePicture = (req, res) => {
  request.post('http://192.168.2.100:3000/rpi/image/single');

  res.send({ msg: 'Sent'});
};

/////////////////////////////////////////
module.exports = { RPITakePicture };
