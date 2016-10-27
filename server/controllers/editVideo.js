'use strict';


/////////////////////////////////////////


const receiveVideoStream = (req, res, err) => {

  console.log("Video stream function reached");
  console.log('req', req.body);

};


/////////////////////////////////////////
module.exports = { receiveVideoStream };
