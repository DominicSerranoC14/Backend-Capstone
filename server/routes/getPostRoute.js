'use strict';

const { Router } = require('express');
const router = Router();
const post = require('../controllers/getPostCtrl.js');
/////////////////////////////////////////

router.get('/api/post/collection/all', post);

module.exports = router;
