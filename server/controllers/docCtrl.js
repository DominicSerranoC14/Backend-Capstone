'use strict';

const getApiDocRef = (req, res) => {
  res.send(require('./apiDoc.json'));
};

module.exports = { getApiDocRef };
