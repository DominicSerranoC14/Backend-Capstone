'use strict';

const { Router } = require('express');
const router = Router();
const { getEntireImageCollection, getSpecificImage, getSpeficUserImageCollection } = require('../controllers/getImageCtrl.js');
const { deleteSpecificImage, createNewImage } = require('../controllers/editImageCtrl.js');
/////////////////////////////////////////

router.get('/api/image/collection/all', getEntireImageCollection);
router.get('/api/image/collection/:id', getSpeficUserImageCollection);
router.post('/api/image/new', createNewImage);
router.get('/api/image/:id', getSpecificImage);
router.post('/api/image/delete/:id', deleteSpecificImage);

/////////////////////////////////////////
module.exports = router;
