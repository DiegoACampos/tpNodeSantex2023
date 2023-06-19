const express = require('express');
const bookRoutes = require('./src/routes/book-routes')
const librariesRoutes = require('./src/routes/librarys-routes');
const userRoutes = require('./src/routes/user-routes')
const { errorHandlerMiddleware } = require('./src/middleware/error-handler')
const {Book} = require('./src/models/book')
const {LibraryM} = require('./src/models/librarys')
const {User} = require('./src/models/user')

const app = express();
const PORT = 5000;

LibraryM.sync();
Book.sync();
User.sync();


app.use(express.json())
app.use('/library', librariesRoutes)
app.use('/book', bookRoutes)
app.use('/user', userRoutes)
app.use(errorHandlerMiddleware)


app.listen(PORT, () => {
    console.log(`App corriendo en puerto ${PORT}`)
})
