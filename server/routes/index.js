'use strict';

const { Router } = require('express');
const router = Router();
const doc = require('./docRoute.js')
const post = require('./postRoute.js');
const user = require('./userRoute.js');
const login = require('./loginRoute.js');
const register = require('./registerRoute.js');
const image = require('./imageRoute.js');
const video = require('./videoRoute.js');
const live = require('./liveRoute.js');
const rpi = require('./RPIRoute.js');
/////////////////////////////////////////

//Routers
router.use(doc);
router.use(register);
router.use(login);
router.use(video);
router.use(live);
router.use(user);
router.use(image);
router.use(post);
router.use(rpi);

/////////////////////////////////////////
module.exports = router;
