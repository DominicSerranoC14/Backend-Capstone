'use strict';

const { Router } = require('express');
const router = Router();
const { createNewPost, getEntirePostCollection, getSpecificPost, editSpecificPost } = require('../controllers/postCtrl');
/////////////////////////////////////////

router.post('/api/post/new', createNewPost);
router.get('/api/post/all', getEntirePostCollection);
router.get('/api/post/:id', getSpecificPost);
router.post('/api/post/:id', editSpecificPost);

/////////////////////////////////////////
module.exports = router;
