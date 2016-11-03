'use strict';

const { Router } = require('express');
const router = Router();
const { startLiveVideo } = require('../controllers/liveVideo.js');
/////////////////////////////////////////


router.get('/api/live', startLiveVideo);


/////////////////////////////////////////
module.exports = router;
