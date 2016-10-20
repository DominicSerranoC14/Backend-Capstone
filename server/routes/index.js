'use strict';

const { Router } = require('express');
const router = Router();
const root = require('./rootRoute.js');
/////////////////////////////////////////

//Routers
router.use(root);

/////////////////////////////////////////
module.exports = router;
