'use strict';

const { Router } = require('express');
const router = Router();
const { RPITakePicture, RPITakeVideo } = require('../controllers/RPICommandsCtrl.js');
/////////////////////////////////////////

router.get('/rpi/image/single', RPITakePicture);
router.get('/rpi/video/static', RPITakeVideo)

/////////////////////////////////////////
module.exports = router;
