'use strict';

const startLiveVideo = (req, res) => {

  req.on('data', (data) => console.log("Test data", data));
  req.on('end', (data) => console.log("Test end"));
  req.pipe(res);

};


/////////////////////////////////////////
module.exports = {
  startLiveVideo
};
