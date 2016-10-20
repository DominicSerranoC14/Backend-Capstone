'use strict';

const { Router } = require('express');
const router = Router();
const { getUserProfile, editUserProfile } = require('../controllers/userCtrl.js');
/////////////////////////////////////////

router.get('/user', getUserProfile);
router.post('/user', editUserProfile);

/////////////////////////////////////////
module.exports = router;
