const { liveBooks } = require('../models/book');
const bookService = require('../services/book-service');

async function createBook(req, res, next) {
  const { isbn, titulo, autor, year, libraryId } = req.body;

  try {
    const book = await bookService.createBook(isbn, titulo, autor, year, libraryId);
    res.status(201).send(book);
  } catch (error) {
    next(error);
  }
}  

async function getBookById(req, res, next) {
  const { id } = req.params;

  try {
    const book = await bookService.getBookById(id);
    if (!book) {
      return res.status(404).send('Libro no encontrado');
    }
    res.status(200).send(book);
  } catch (error) {
    next(error);
  }
}

async function getAllBooks(req, res, next) {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).send(books);
  } catch (error) {
    next(error);
  }
}

async function editBook(req, res, next) {
  const { id } = req.params;
  const { isbn, titulo, autor, year, libraryId } = req.body;

  try {
    const book = await bookService.editBook(id, isbn, titulo, autor, year, libraryId);
    res.status(200).send(book);
  } catch (error) {
    next(error);
  }
}

async function updateBookDeleteStatus(req, res, next) {
  const { id } = req.params;
  const { deleteStatus } = req.params;

  try {

    const updatedBook = await bookService.updateBookDeleteStatus(id, deleteStatus);
    if (!updatedBook) {
      return res.status(404).send('Libro no encontrado');
    }
    res.status(200).send('Estado de eliminación del libro actualizado');
  } catch (error) {
    next(error);
  }
}

module.exports = { createBook, getBookById, getAllBooks, updateBookDeleteStatus, editBook };
