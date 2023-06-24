const express = require('express');
const libraryController = require('../controllers/library-controller')
const { isAuthenticated } = require('../middleware/authentication')

const router = express.Router();

router.post('/createLibrary', isAuthenticated, libraryController.createLibrary);
router.get('/getLibrary/:id', libraryController.getLibraryById);
router.get('/getAllLibraries', libraryController.getAllLibraries);
router.put('/editLibrary/:id', isAuthenticated, libraryController.editLibrary);
router.delete('/deleteLibrary/:id', isAuthenticated, libraryController.deleteOneLibrary);
router.post('/addBook/:id',isAuthenticated, libraryController.addBook);

module.exports = router;
