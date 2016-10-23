'use strict';

const getUserApiDoc = (req, res) => {
  res.send(require('../apiDoc/userDoc.json'));
};


const getImageApiDoc = (req, res) => {
  res.send(require('../apiDoc/imageDoc.json'));
};


const getPostApiDoc = (req, res) => {
  res.send(require('../apiDoc/postDoc.json'));
};

/////////////////////////////////////////
module.exports = {
  getUserApiDoc,
  getImageApiDoc,
  getPostApiDoc
};
