const express = require('express');
const router = express.Router();

const publicationsCtrl = require('../controllers/publications')
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Routes publications
router.post('/', auth, multer, publicationsCtrl.createPublication);
router.delete('/delete/:id', auth, publicationsCtrl.deletePublication);
router.get('/', auth, publicationsCtrl.getAllPublications);
router.get('/:id', auth, publicationsCtrl.getPublication);
router.post('/like', auth, publicationsCtrl.likes);

module.exports = router;
