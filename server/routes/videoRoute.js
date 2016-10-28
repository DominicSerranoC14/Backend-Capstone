'use strict';

const { Router } = require('express');
const router = Router();
const { receiveVideoStream, sendVideoStream } = require('../controllers/editVideo.js');
/////////////////////////////////////////

router.post('/api/video/receive', receiveVideoStream);
// router.get('/api/video/stream', sendVideoStream);

/////////////////////////////////////////
module.exports = router;
