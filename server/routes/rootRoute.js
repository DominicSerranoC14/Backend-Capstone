'use strict';

const { Router } = require('express');
const router = Router();
const root = require('../controllers/rootCtrl.js');
/////////////////////////////////////////

router.get('/api/feed', root);

module.exports = router;
