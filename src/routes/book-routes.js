const express = require('express');
const bookController = require('../controllers/book-controller')
const {isAuthenticated} = require('../middleware/authentication')
const router = express.Router();

router.post('/createBook', isAuthenticated, bookController.createBook)
router.get('/getBook/:id', bookController.getBookById)
router.get('/getAllBooks', bookController.getAllBooks)
router.put('/editBook', isAuthenticated, bookController.editBook)
router.delete('/deleteBook/:id', isAuthenticated, bookController.deleteBook)

module.exports = router;
