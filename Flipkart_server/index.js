const express = require('express');
const mongoose = require('mongoose');

const app = express();
const Port = 5000;

app.use(express.json());
const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://snehalmishra:123@cluster0.8owrboj.mongodb.net/Flipkart')
        console.log("Connected to database");
    } catch (error) {
        console.log(error.message);
    }
}

connectDb();


// Problem statement for E-commerce(Flipkart);
// Product , Userdetail, Orders, wishlists.

const { Schema } = mongoose;
const UserdetailSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        minlength: 5,
        maxlength: 10
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
        // pattern :including @ : regular expression; .com


    },
    password: {
        type: String,
        required: true,
        //pattern : custom validation ;
        //custom validaton : we want to check whether password length greater than 7;
        validate: {
            validator: function (value) {
                //custom logic 
                return value.length > 7;
            },
            message: "Password should be greater than 7 characters"
        }

    },
    // custom schema ;

})

const UserModel = mongoose.model('FlipkarUsers', UserdetailSchema);

const ProductSchema = new Schema({
    productname: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    productdetails: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true,
        default: 10
    },
    productImage: {
        type: String
    },
    // discount 
    rating: {
        type: String,

    },



})

const ProductModel = mongoose.model('FlipkarProducts', ProductSchema);




//User model : register and login : inserting new document;

app.post('/user/register', async (req, res) => {
    // registration logic 
    try {
        const { email, password, username } = req.body;
        const insertedData = await UserModel.create({
            email,
            password,
            username
        })

        res.json({
            message: "data inserted successfully",
            insertedData
        })


    } catch (error) {
        console.log(error.message);
        res.json({
            message: error.message
        })
    }

})

//authentication :validate if user exists in the db or not;
//  Authorisation : token :
// reading operation
app.post('/user/login', async (req, res) => {
    // login logic
    // step 1 : take all the credential from req.body from the user.
    // Step 2 : use email , to check if that user with this email is there in db;
    // step 3 : if user is there , check his password if it matching with the stored password;;
    // step 4 : if email is there and password also matches : user is logged in.
    // Step 5 : if user is not there; "no user found !","Please register with us"
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
        return res.json({
            message: "Please enter all your credentails"
        })
    }

    const ifUser = await UserModel.findOne({ email: email });

    if (!ifUser) {
        return res.json({
            message: `User with this ${email} is not found !`
        })
    }

    if (ifUser.password == password) {
        return res.json({
            message: `User with ${email} has been logged in`
        })
    }


    res.json({
        message: `User is not able to login due to wrong password`
    })
})

// api endpoint to update the username of user based on userid;
// update operation , passing info using params 

app.post('/user/:id', async (req, res) => {
    // req.params
    const { id } = req.params;
    const { username } = req.body;

    //update operation of mongoose;
    const updatedDoc = await UserModel.findByIdAndUpdate(id, { username: username }, { new: true });

    res.json({
        message: "Document updated",
        updatedDoc
    })

})

// Methods of Mongoose;
// save(),create() ,findOne(),find(),findbyIdandUpdate();
// take info from body and params of request object;


//Adding new product
app.post('/product/new', async (req, res) => {
    //adding new product
    try {
        const { productname, category, productdetails, price, rating } = req.body;

        const insertedProduct = await ProductModel.create({
            productname,
            category,
            productdetails,
            price,
            rating
        })

        res.status(200).json({
            message: "Product inserted successfully",
            insertedProduct
        })
    } catch (error) {
        console.log(error.message);
        res.status(404).json({
            message: error.message
        })
    }

})

// update the product detail;
app.post('/product/update/:id', async (req, res) => {
    try {
        //details of updating the product
        const { id } = req.params
        const { productdetails, price } = req.body;
        //id : params 
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, { productdetails:productdetails,price:price},{new:true})
        res.status(201).json({
            message: "Product data Updated",
            updatedProduct
        })
    } catch (error) {
        console.log(error.message);
        res.status(404).json({
            message: error.message
        })
    }
})

// api endpoint to delete product using id;

app.listen(Port, () => {
    console.log(`server is working on Port ${Port}`)
})

