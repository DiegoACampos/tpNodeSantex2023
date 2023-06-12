const { liveBooks } = require('../models/book')
const { Libraries } = require('../models/librarys');

async function createLibrary(name, location, telephone) {
  const Library = await Libraries.create({ name, location, telephone });

  return Library;
}

async function getLibraryById(id) {
  const library = await Libraries.findByPk(id, {
    include: liveBooks, 
  });

  return library;
}

async function getAllLibraries() {
  const Library = await Libraries.findAll();

  return Library;
}

async function editLibrary(id, name, location, telephone) {
  const library = await Libraries.findByPk(id);
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
  const deletedLibrary = await Libraries.destroy({
    where: {id},
  });

  return deletedLibrary;
}

module.exports = { createLibrary, getLibraryById, getAllLibraries, deleteLibrary, editLibrary };
