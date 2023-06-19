const  {Book}  = require('../models/books');

async function create (isbn,titulo,autor,year,libraryId){
    const book = Book.build({
    isbn: isbn,
    titulo: titulo,
    autor: autor,
    year: year,
    libraryId: libraryId,
    })
    
    const createdBook = await book.save()
    return createdBook
}

async function getBook (id){
    const book = await Book.findByPk(id)
    if(!book){
        throw new Error (`Libro no encontrado`)
    }
    return book;
}

async function getAll (){
    const listBooks = await Book.findAll();
    return listBooks
}

async function edit(id,isbn,titulo,autor,year,libraryId){
    const book = Book.findByPk(id)
    if(!book){
        throw new Error (`Libro no encontrado`)
    }
        if(isbn){
            book.isbn
        }
        if(titulo){
            book.titulo
        }
        if(autor){
            book.autor
        }
        if(year){
            book.year
        }
        if(libraryId){
            book.libraryId

        }    
};

async function deleteOneBook(id){
    const book = await Book.findByPk(id)
    if(!book){
        throw new Error (`Libro no encontrado`)
    }
    await book.destroy()
}


module.exports = { getAll, getBook, create, edit, deleteOneBook}
