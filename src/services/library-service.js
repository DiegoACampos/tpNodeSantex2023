const { liveBooks } = require('../models/book')
const { Library } = require('../models/librarys');

async function createLibrary(name, location, telephone) {
  const library = await Library.create({ name, location, telephone });

  return library;
}

async function getLibraryById(id) {
  const library = await Library.findByPk(id, {
    include: liveBooks, 
  });

  return library;
}

async function getAllLibraries() {
  const libraries = await Library.findAll();

  return libraries;
}

async function editLibrary(id, name, location, telephone) {
  const library = await Library.findByPk(id);
  if (!library) {
    throw new Error('Librería no encontrada');
  }

  library.name = name;
  library.location = location;
  library.telephone = telephone;

  await library.save();

  return library;
}

async function deleteLibrary(id) {
  const deletedLibrary = await Library.destroy({
    where: {id},
  });

  return deletedLibrary;
}

module.exports = { createLibrary, getLibraryById, getAllLibraries, deleteLibrary, editLibrary };
