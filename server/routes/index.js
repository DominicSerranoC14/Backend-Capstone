'use strict';

const { Router } = require('express');
const router = Router();
const root = require('./rootRoute.js');
const user = require('./userRoute.js');
const login = require('./loginRoute.js');
const register = require('./registerRoute.js');
/////////////////////////////////////////

//Routers
router.use(root);
router.use(user);
router.use(login);
router.use(register);

/////////////////////////////////////////
module.exports = router;
