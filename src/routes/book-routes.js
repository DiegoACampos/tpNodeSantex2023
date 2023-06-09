const express = require('express');
const bookController = require('../controllers/book-controller');

const router = express.Router();

router.post('/create', bookController.createBook);
router.get('/getById/:id', bookController.getBookById);
router.get('/getAll', bookController.getAllBooks);
router.put('/modify/:id',bookController.editBook);
router.delete('/delete/:id', bookController.updateBookDeleteStatus);

module.exports = router;
