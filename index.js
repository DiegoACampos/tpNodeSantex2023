const express = require('express');

const bodyParser = require('body-parser');
const libraryRoutes = require('./src/routes/library-routes');
const bookRoutes = require('./src/routes/book-routes');
const userRoutes = require('./src/routes/user-routes');

const { errorHandlerMiddleware } = require('./src/middleware/error-handler');

const app = express();

app.use(bodyParser.json());
app.use("/library", libraryRoutes);
app.use('/books', bookRoutes);
app.use('/user', userRoutes); 
app.use(errorHandlerMiddleware);


const port = 5000;
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);

});
