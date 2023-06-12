const libraryService = require('../services/library-service');

async function createLibrary(req, res, next) {
  const { name, location, telephone } = req.body;

  try {
    const library = await libraryService.createLibrary(name, location, telephone);
    res.status(201).send(library);
  } catch (error) {
    next(error);
  }
}

async function getLibraryById(req, res, next) {
  const { id } = req.params;

  try {
    const library = await libraryService.getLibraryById(id);
    if (!library) {
      return res.status(404).send('Librería no encontrada');
    }
    res.status(200).send(library);
  } catch (error) {
    next(error);
  }
}

async function getAllLibraries(req, res, next) {
  try {
    const library = await libraryService.getAllLibraries();
    res.status(200).send(library);
  } catch (error) {
    next(error);
  }
}

async function editLibrary(req, res, next) {
  const { id } = req.params;
  const { name, location, telephone } = req.body;

  try {
    const library = await bookService.editLibrary(id, name, location, telephone);
    res.status(200).send(library);
  } catch (error) {
    next(error);
  }  
}

async function deleteLibrary(req, res, next) {
  const { id } = req.params;

  try {
    const deletedLibrary = await libraryService.deleteLibrary(id);
    if (!deletedLibrary) {
      return res.status(404).send('Librería no encontrada');
    }
    res.status(200).send('Librería eliminada');
  } catch (error) {
    next(error);
  }
}

module.exports = { createLibrary, getLibraryById, getAllLibraries, editLibrary , deleteLibrary };
