'use strict';

const { Router } = require('express');
const router = Router();
const { registerNewUser } = require('../controllers/registerCtrl');
/////////////////////////////////////////


router.post('/api/user/register', registerNewUser);

module.exports = router;
