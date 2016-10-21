'use strict';

const { Router } = require('express');
const router = Router();
const { getApiDocRef } = require('../controllers/docCtrl.js');
/////////////////////////////////////////

router.get('/api/doc', getApiDocRef);

/////////////////////////////////////////
module.exports = router;
