const { Book } = require('../models/book');
const libraryService = require('../services/library-service');
const bookService = require('../services/book-service')

async function createLibrary(req, res) {
    const { nombre, location, telefono } = req.body;
    const libraryCreated = await libraryService.create(nombre, location, telefono)
    res.status(201).send(libraryCreated)
}

async function getLibraryById(req, res, next) {
    const { id } = req.params;
    try {
        const library = await libraryService.getLibrary(id)
        res.status(200).send(library)
    } catch (error) {
        next(error)
    }
}

async function getAllLibraries(req, res) {
    const listLibraries = await libraryService.getAll()
    res.status(200).send(listLibraries)
}

async function editLibrary(req, res, next) {
    const { id } = req.params;
    const { nombre, location, telefono } = req.body;
    try {
        const editedLibrary = await libraryService.edit(id, nombre, location, telefono)
        res.status(200).send(editedLibrary)
    } catch (error) {
        next(error)
    }
}

async function deleteOneLibrary(req, res, next) {
    const { id } = req.params;
    try {
        await libraryService.deleteLibrary(id)
        res.status(200).send(`Libreria con id:${id} y libros en su bodega an sido eliminados`)
    } catch (error) {
        next(error)
    }
}

async function addBook(req, res) {
    const { id } = req.params;
    const { isbn, titulo, autor, year, libraryId } = req.body;
    const book = await bookService.create(isbn, titulo, autor, year, id)
    res.status(201).send(book)
}

module.exports = { createLibrary, getLibraryById, getAllLibraries, editLibrary, deleteOneLibrary, addBook }
