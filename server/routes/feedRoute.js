'use strict';

const { Router } = require('express');
const router = Router();
const feed = require('../controllers/feedCtrl.js');
/////////////////////////////////////////

router.get('/api/feed', feed);

module.exports = router;
