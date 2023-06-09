const express = require('express');
const libraryController = require('../controllers/library-controller');

const router = express.Router();

router.post('/create', libraryController.createLibrary);
router.get('/getById/:id', libraryController.getLibraryById);
router.get('/getAll', libraryController.getAllLibraries);
router.put('/modify/:id',libraryController.editLibrary);
router.delete('/delete/:id', libraryController.deleteLibrary);

module.exports = router;
