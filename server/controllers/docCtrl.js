'use strict';

const getUserApiDoc = (req, res) => {
  res.send(require('../apiDoc_RPIConfig/userDoc.json'));
};


const getImageApiDoc = (req, res) => {
  res.send(require('../apiDoc_RPIConfig/imageDoc.json'));
};


const getPostApiDoc = (req, res) => {
  res.send(require('../apiDoc_RPIConfig/postDoc.json'));
};

/////////////////////////////////////////
module.exports = {
  getUserApiDoc,
  getImageApiDoc,
  getPostApiDoc
};
