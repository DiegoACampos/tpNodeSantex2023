const { Sequelize } = require('sequelize');

const { liveBooks } = require('../models/book');

async function createBook(isbn, titulo, autor, year, libraryId) {
  const book = await liveBooks.create({ isbn, titulo, autor, year, libraryId, });

  return book;
}

async function getBookById(id) {
  const book = await liveBooks.findByPk(id);

  return book;
}

async function getAllBooks() {
  const books = await liveBooks.findAll();

  return books;
}

async function editBook(id, isbn, titulo, autor, year, libraryId) {
  const book = await liveBooks.findByPk(id);
  if (!book) {
    throw new Error('Libro no encontrado');
  }

  book.isbn = isbn;
  book.titulo = titulo;
  book.autor = autor;
  book.year = year;
  book.libraryId = libraryId;

  await book.save();

  return book;
}

async function updateBookDeleteStatus(id, deleteStatus) {
  const updatedBook = await liveBooks.update(
    { deleted: deleteStatus },
    { where: { id } }
    
  );

  return updatedBook;
}


module.exports = { createBook, getBookById, getAllBooks, updateBookDeleteStatus, editBook };
