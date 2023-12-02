const express = require('express');
const mongoose = require('mongoose');
// require() : either you external libraries or your own modules;

const app = express();
const Port = 5000;

async function connectToDB() {
    try {
        await mongoose.connect('mongodb+srv://snehalmishra:123@cluster0.8owrboj.mongodb.net/LearningDB')
        console.log("database connected");
    } catch (error) {
        console.log(error.message);
    }
}
connectToDB()



// we need to parse req body in json format;
app.use(express.json());


//Making the Schema of our Database;
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,

    },
    password: {
        type: String
    },
    email: {
        type: String
    }
})
// what your document is going to store : 
const UserModel = mongoose.model('LearningUser', UserSchema);

// Query: We will doing query on the UserModel;
//Insert in the Collection;


// get request is special as information is passed through url;
app.get('/info', (req, res) => {
    //req : which is coming from client on this /info 
    // res : response sent from this api endpoiny /info
    res.send("Hi server is running and this get request")
})


app.post('/takeinfo', async (req, res) => {
    // console.log(req);
    //   const name =req.body.name;
    //   const password =req.body.password;
    try {
        const { name, password, email } = req.body;
        console.log(name, password, email);

        //     const inserdata = new UserModel({
        //         name,
        //         email,
        //         password
        //     })

        //    const datasaved=   await inserdata.save();
        const datasaved = await UserModel.create({
            name,
            email,
            password
        })
        res.json({
            message: "Data inserted successfully",
            datasaved
        })


    } catch (error) {
        console.log(error.message);
        res.json({
            message: error.message
        })
    }


    // client is sharing name and password ;
    // our server will extract the info given by client;
    // and in return send a response;
})


//product data
//title,description,price ,quantity ,discount_price,rating,category
//Schema design : what are database is going store and in which manner;




app.listen(Port, () => {
    console.log(`Server running on Port ${Port}`);
})
