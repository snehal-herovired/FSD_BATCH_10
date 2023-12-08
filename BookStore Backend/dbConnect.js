const mongoose = require('mongoose');
 
async function dbConnect(){

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB Connection SUCCESSFULL");
    } catch (error) {
        console.log(`Db not connected ${error.message}`);
    }
}

module.exports = dbConnect