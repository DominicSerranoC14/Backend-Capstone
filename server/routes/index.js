'use strict';

const { Router } = require('express');
const router = Router();
const doc = require('./docRoute.js')
const getPost = require('./getPostRoute.js');
const editPost = require('./editPostRoute.js');
const user = require('./userRoute.js');
const login = require('./loginRoute.js');
const register = require('./registerRoute.js');
const image = require('./imageRoute.js');
/////////////////////////////////////////

//Routers
router.use(doc);
router.use(getPost);
router.use(editPost);
router.use(image);
router.use(user);
router.use(login);
router.use(register);

/////////////////////////////////////////
module.exports = router;
