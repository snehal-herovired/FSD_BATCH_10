const express = require('express');
const bookRouter = express.Router();
const jwtVerify = require('../middleware/jwt.middleware')

const {addBook,updateTitle,updateAuthor,updatePrice,updateQunatity,getByTitle,getByAuthor,getAllbooks,deleteBook} = require('../controllers/book.controller');


//Update book info
//  Add a new book to the system
bookRouter.post('/add',jwtVerify,addBook);
// Update the title of a book by its ID
bookRouter.post('/changeTitle/:id',jwtVerify,updateTitle);
// Update the author of a book by its ID
bookRouter.post('/changeAuthor/:id',jwtVerify,updateAuthor);
// Update the price of a book by its ID
bookRouter.post('/changePrice/:id',jwtVerify,updatePrice);
// Update the quantity of a book by its ID
bookRouter.post('/changeQunatity/:id',jwtVerify,updateQunatity);

// get info about book
// Get book information by title
bookRouter.get('/byTitle',jwtVerify,getByTitle)
// Get book information by author
bookRouter.get('/byAuthor',jwtVerify,getByAuthor)
// Get information about all books in the system
bookRouter.get('/allBooks',jwtVerify,getAllbooks)


// Delete a book from the system
bookRouter.delete('/deleteBook',jwtVerify,deleteBook)

module.exports = bookRouter;