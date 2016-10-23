'use strict';

const { Router } = require('express');
const router = Router();
const { getEntireImageCollection, getSpecificImage, deleteSpecificImage, createNewImage, getSpeficUserImageCollection } = require('../controllers/imageCtrl.js');
/////////////////////////////////////////

router.post('/api/image/new', createNewImage);
router.get('/api/image/:id', getSpecificImage);
router.post('/api/image/delete/:field/:id', deleteSpecificImage);
router.get('/api/image/collection/all', getEntireImageCollection);
router.get('/api/image/collection/:id', getSpeficUserImageCollection);

module.exports = router;
