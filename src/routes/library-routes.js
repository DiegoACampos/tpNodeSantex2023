const express = require('express');
const libraryController = require('../controllers/library-controller')
const router = express.Router();

router.post('/createLibrary', libraryController.createLibrary);
router.get('/getLibrary/:id', libraryController.getLibraryById);
router.get('/getAllLibraries', libraryController.getAllLibraries);
router.put('/editLibrary/:id', libraryController.editLibrary);
router.delete('/deleteLibrary/:id', libraryController.deleteOneLibrary);

module.exports = router;
