const { Book } = require('../models/books');
const { LibraryM } = require('../models/libraries');

async function create(nombre, location, telefono) {
    const libraries = LibraryM.build({

        nombre: nombre,
        location: location,
        telefono: telefono
    })

    const libraryCreated = await libraries.save()
    return libraryCreated
}

async function getLibrary(id) {
    const library = await LibraryM.findByPk(id,{include:[{model:Book}]})
    if(!library){
        throw new Error(`Libreria no encontrada`)
    }
    return library
}

async function getAll() {
    const listLibraries = await LibraryM.findAll();
    return listLibraries
}

async function edit(id, nombre, location, telefono) {
    const library = await LibraryM.findByPk(id)
    if(!library){
        throw new Error(`Libreria no encontrada`)
    }
    if (nombre) {
        library.nombre = nombre
    }
    if (location) {
        library.location = location
    }
    if (telefono) {
        library.telefono = telefono
    }
    const editedLibrary = library.save()
    return editedLibrary
}

async function deleteLibrary(id){
    const library = await LibraryM.findByPk(id,{include:[{model:Book}]})
    if(!library){
        throw new Error(`Libreria no encontrada`)
    }
    await library.destroy()
}


module.exports = { getAll, getLibrary, create, edit, deleteLibrary }
