'use strict';

const { Router } = require('express');
const router = Router();
const { getUserApiDoc, getImageApiDoc, getPostApiDoc } = require('../controllers/docCtrl.js');
/////////////////////////////////////////

router.get('/api/doc/user', getUserApiDoc);
router.get('/api/doc/image', getImageApiDoc);
router.get('/api/doc/post', getPostApiDoc);

/////////////////////////////////////////
module.exports = router;
