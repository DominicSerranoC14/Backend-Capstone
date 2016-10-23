'use strict';

const { Router } = require('express');
const router = Router();
const { getEntireImageCollection, getSpecificImage, editSpecificImage, createNewImage, getSpeficUserImageCollection } = require('../controllers/imageCtrl.js');
/////////////////////////////////////////

router.post('/api/image/new', createNewImage);
router.get('/api/image/:id', getSpecificImage);
router.post('/api/image/:id', editSpecificImage);
router.get('/api/image/all/collection', getEntireImageCollection);
router.get('/api/image/all/:id', getSpeficUserImageCollection);

module.exports = router;
