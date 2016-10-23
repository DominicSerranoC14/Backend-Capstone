'use strict';

const { Router } = require('express');
const router = Router();
const doc = require('./docRoute.js')
const post = require('./postRoute.js');
const user = require('./userRoute.js');
const login = require('./loginRoute.js');
const register = require('./registerRoute.js');
const image = require('./imageRoute.js');
/////////////////////////////////////////

//Routers
router.use(doc);
router.use(post);
router.use(image);
router.use(user);
router.use(login);
router.use(register);

/////////////////////////////////////////
module.exports = router;
