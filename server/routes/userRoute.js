'use strict';

const { Router } = require('express');
const router = Router();
const { getUserProfile, editUserProfile } = require('../controllers/userCtrl.js');
/////////////////////////////////////////

router.get('/api/user/:id', getUserProfile);
router.post('/api/user/:id', editUserProfile);

/////////////////////////////////////////
module.exports = router;
