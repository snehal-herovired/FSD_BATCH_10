# BookStoreMgmt

**API Design Documentation**
Introduction
This documentation outlines the design of the RESTful API for the Bookstore Management System. The API allows users to perform various operations related to books, shopping carts, and user reviews. It provides endpoints for adding books, updating book information, managing shopping carts, and submitting reviews. The API is secured using JWT (JSON Web Tokens) authentication.
Endpoints
Book Operations
1. Add a New Book
    • Endpoint: POST /books/add
    • Authentication Required: Yes (JWT)
    • Description: Adds a new book to the system.
    • Request Body:
      
      {
          "title": "Book Title",
          "author": "Author Name",
          "price": 19.99,
          "quantity": 50
      }
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing the newly added book.
2. Update Book Title
    • Endpoint: POST /books/changeTitle/:id
    • Authentication Required: Yes (JWT)
    • Description: Updates the title of a book by its ID.
    • Request Parameters:
        ◦ id: The ID of the book to be updated.
    • Request Body:
      
      {
          "titleName": "New Title"
      }
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing the updated book.
3. Update Book Author
    • Endpoint: POST /books/changeAuthor/:id
    • Authentication Required: Yes (JWT)
    • Description: Updates the author of a book by its ID.
    • Request Parameters:
        ◦ id: The ID of the book to be updated.
    • Request Body:
      
      {
          "authorName": "New Author"
      }
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing the updated book.
4. Update Book Price
    • Endpoint: POST /books/changePrice/:id
    • Authentication Required: Yes (JWT)
    • Description: Updates the price of a book by its ID.
    • Request Parameters:
        ◦ id: The ID of the book to be updated.
    • Request Body:
       
      {
          "Bookprice": 29.99
      }
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing the updated book.
5. Update Book Quantity
    • Endpoint: POST /books/changeQuantity/:id
    • Authentication Required: Yes (JWT)
    • Description: Updates the quantity of a book by its ID.
    • Request Parameters:
        ◦ id: The ID of the book to be updated.
    • Request Body:
       
      {
          "qty": 100
      }
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing the updated book.
6. Get Book Information by Title
    • Endpoint: GET /books/byTitle
    • Authentication Required: Yes (JWT)
    • Description: Retrieves book information by title.
    • Query Parameters:
        ◦ title: The title of the book to search for.
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing the found book(s).
7. Get Book Information by Author
    • Endpoint: GET /books/byAuthor
    • Authentication Required: Yes (JWT)
    • Description: Retrieves book information by author.
    • Query Parameters:
        ◦ author: The author's name to search for.
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing the found book(s).
8. Get Information About All Books
    • Endpoint: GET /books/allBooks
    • Authentication Required: Yes (JWT)
    • Description: Retrieves information about all books in the system.
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing all books.
9. Delete a Book
    • Endpoint: DELETE /books/deleteBook
    • Authentication Required: Yes (JWT)
    • Description: Deletes a book from the system.
    • Query Parameters:
        ◦ id: The ID of the book to be deleted.
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing the deleted book.
Shopping Cart Operations
1. Create a New Cart
    • Endpoint: POST /carts/create
    • Authentication Required: Yes (JWT)
    • Description: Creates a new shopping cart for a user.
    • Request Body:
       
      {
          "user": "User ID"
      }
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing the created shopping cart.
2. Get All Carts
    • Endpoint: GET /carts/all
    • Authentication Required: Yes (JWT)
    • Description: Retrieves information about all shopping carts in the system.
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing all shopping carts.
3. Add an Item to the Cart
    • Endpoint: POST /carts/addToCart
    • Authentication Required: Yes (JWT)
    • Description: Adds an item to a user's shopping cart.
    • Request Body:
       
      {
          "cartId": "Cart ID",
          "userId": "User ID",
          "bookId": "Book ID",
          "quantity": 2
      }
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing the updated shopping cart.
4. Update an Item in the Cart
    • Endpoint: PUT /carts/update-item/:id
    • Authentication Required: Yes (JWT)
    • Description: Updates the quantity of an item in the user's shopping cart.
    • Request Parameters:
        ◦ id: The ID of the item to be updated.
    • Request Body:
       
      {
          "cardId": "Cart ID",
          "quantity": 3
      }
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing the updated shopping cart.
5. Remove an Item from the Cart
    • Endpoint: DELETE /carts/remove-item/:id
    • Authentication Required: Yes (JWT)
    • Description: Removes an item from the user's shopping cart.
    • Request Parameters:
        ◦ id: The ID of the item to be removed.
    • Request Body:
       
      {
          "cartId": "Cart ID"
      }
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing the updated shopping cart.
6. Get Cart Details by ID
    • Endpoint: GET /carts/details/:id
    • Authentication Required: Yes (JWT)
    • Description: Retrieves details of a user's shopping cart by its ID.
    • Request Parameters:
        ◦ id: The ID of the cart to retrieve details for.
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing the cart details.
User Operations
1. Register a New User
    • Endpoint: POST /users/register
    • Description: Registers a new user.
    • Request Body:
       
      {
          "username": "Username",
          "email": "user@example.com",
          "password": "Password123"
      }
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing the registered user and JWT token.
2. Login an Existing User
    • Endpoint: POST /users/login
    • Description: Logs in an existing user.
    • Request Body:
       
      {
          "email": "user@example.com",
          "password": "Password123"
      }
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing the logged-in user and JWT token.
3. View User Profile
    • Endpoint: GET /users/userProfile/:id
    • Authentication Required: Yes (JWT)
    • Description: Retrieves the profile of a user by their ID.
    • Request Parameters:
        ◦ id: The ID of the user whose profile to view.
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing the user's profile.
4. Update User's Username
    • Endpoint: PUT /users/changeUsername/:id
    • Authentication Required: Yes (JWT)
    • Description: Updates the username of a user by their ID.
    • Request Parameters:
        ◦ id: The ID of the user to be updated.
    • Request Body:
       
      {
          "username1": "New Username"
      }
    • Response:
        ◦ Status: 200 OK
        ◦ Data: JSON object representing the updated user profile.
Authentication
This API uses JWT (JSON Web Tokens) for authentication. Users need to include their JWT token in the Authorization header of their requests to access authenticated endpoints.
Conclusion
This API design documentation provides a clear understanding of the endpoints and operations available for the Bookstore Management System. Developers can use this documentation to integrate with the API, enabling efficient management of books, shopping carts, and user profiles.


****Schema Structure ****
User Schema
    • users Collection
        ◦ id (Generated by MongoDB, Primary Key)
        ◦ username (String, Required)
        ◦ email (String, Required, Unique)
        ◦ password (String, Required, Hashed)
        ◦ createdAt (Auto-generated by Mongoose)
        ◦ updatedAt (Auto-generated by Mongoose)
Book Schema
    • books Collection
        ◦ id (Generated by MongoDB, Primary Key)
        ◦ title (String, Required)
        ◦ author (String, Required)
        ◦ price (String, Required)
        ◦ quantity (String, Required)
        ◦ reviews (Array of Objects)
            ▪ userId (Reference to users Collection)
            ▪ comment (String)
            ▪ rating (String)
        ◦ createdAt (Auto-generated by Mongoose)
        ◦ updatedAt (Auto-generated by Mongoose)
Shopping Cart Schema
    • carts Collection
        ◦ id (Generated by MongoDB, Primary Key)
        ◦ user (Reference to users Collection, Required)
        ◦ books (Array of Objects)
            ▪ bookId (Reference to books Collection, Required)
            ▪ quantity (Number, Required)
            ▪ price (Number, Required)
            ▪ totalPrice (Number, Required)
        ◦ totalItems (Number, Default: 0)
        ◦ totalPrice (Number, Default: 0)
        ◦ createdAt (Auto-generated by Mongoose)
        ◦ updatedAt (Auto-generated by Mongoose)
Review Schema
    • reviews Collection
        ◦ id (Generated by MongoDB, Primary Key)
        ◦ userId (Reference to users Collection, Required)
        ◦ bookId (Reference to books Collection, Required)
        ◦ comment (String, Required)
        ◦ rating (Number, Minimum: 1, Maximum: 5, Required)
        ◦ createdAt (Auto-generated by Mongoose)
        ◦ updatedAt (Auto-generated by Mongoose)
This schema structure represents the main collections/entities in the Bookstore Management System, including users, books, carts, and reviews. The relationships between these collections are also outlined.

