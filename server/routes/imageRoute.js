'use strict';

const { Router } = require('express');
const router = Router();
const { getEntireImageCollection, getSpecificImage, editSpecificImage, createNewImage } = require('../controllers/imageCtrl.js');
/////////////////////////////////////////

router.get('/api/image/all', getEntireImageCollection);
router.post('/api/image/new', createNewImage);
router.get('/api/image/:id', getSpecificImage);
router.post('/api/image/:id', editSpecificImage);

module.exports = router;
