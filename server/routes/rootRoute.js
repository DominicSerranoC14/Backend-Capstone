'use strict';

const { Router } = require('express');
const router = Router();
const root = require('../controllers/rootCtrl.js');
/////////////////////////////////////////

router.get('/', root);

module.exports = router;
