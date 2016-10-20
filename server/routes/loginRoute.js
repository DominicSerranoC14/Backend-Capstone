'use strict';

const { Router } = require('express');
const router = Router();
const { loginExistingUser } = require('../controllers/loginCtrl.js');
/////////////////////////////////////////

router.post('/api/user/login', loginExistingUser);

module.exports = router;
