'use strict';

const { Router } = require('express');
const router = Router();
const { RPITakePicture } = require('../controllers/RPICommandsCtrl.js');
/////////////////////////////////////////

router.get('/rpi/image/single', RPITakePicture);

/////////////////////////////////////////
module.exports = router;
