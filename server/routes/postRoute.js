'use strict';

const { Router } = require('express');
const router = Router();
const { createNewPost, editSpecificPost, deleteSpecificPost } = require('../controllers/editPostCtrl.js');
const { getPostCollection, getSpecificPost, getUserPostCollection } = require('../controllers/getPostCtrl.js');
/////////////////////////////////////////



router.get('/api/post/collection/all', getPostCollection);
router.get('/api/post/collection/:id', getUserPostCollection);
router.get('/api/post/:id', getSpecificPost);
router.post('/api/post/new', createNewPost);
router.post('/api/post/:id', editSpecificPost);
router.post('/api/post/delete/:id', deleteSpecificPost)

/////////////////////////////////////////
module.exports = router;
