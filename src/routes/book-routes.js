const express = require('express');
const bookController = require('../controllers/book-controller')
const router = express.Router();

router.post('/createBook', bookController.createBook)
router.get('/getBook/:id', bookController.getBookById)
router.get('/getAllBooks', bookController.getAllBooks)
router.put('/editBook', bookController.editBook)
router.delete('/deleteBook/:id', bookController.deleteBook)

module.exports = router;
