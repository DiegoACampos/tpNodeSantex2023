const bookService = require('../service/book-service')

async function createBook(req, res) {
    const { isbn, titulo, autor, year, libraryId } = req.body;
    const book = await bookService.create(isbn, titulo, autor, year, libraryId)
    res.status(201).send(book)
}

async function getBookById(req, res, next) {
    const { id } = req.params;
    try {
        const book = await bookService.get(id);
        res.status(200).send(book)
    } catch (error) {
        next(error)
    }

}

async function getAllBooks(req, res, next) {
    const listBooks = await bookService.getAll()
    res.status(200).send(listBooks)
}

async function editBook(req, res) {
    const { id } = req.params;
    const { isbn, titulo, autor, year, libraryId } = req.body;
    try {
        const bookEdited = await bookService.edit(id, isbn, titulo, autor, year, libraryId)
        res.status(200).send(bookEdited)
    } catch (error) {
        next(error)
    }

}

async function deleteBook(req, res, next) {
    const { id } = req.params;
    try {
        await bookService.deleteOneBook(id)
        res.status(200).send(`Libro con id:${id} ah sido elimonado`)
    } catch (error) {
        next(error)
    }
}

module.exports = { createBook, getBookById, getAllBooks, editBook, deleteBook }
