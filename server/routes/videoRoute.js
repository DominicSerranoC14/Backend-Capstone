'use strict';

const { Router } = require('express');
const router = Router();
const { receiveVideoStream } = require('../controllers/editVideo.js');
/////////////////////////////////////////

router.post('/api/video/receive', receiveVideoStream);

/////////////////////////////////////////
module.exports = router;
