
const ProductModel =require('../models/product.model');
const UserModel = require('../models/userSchema.model');
const addproduct =async (req, res) => {
    //adding new product
    try {
        const { productname, category, productdetails, price, rating } = req.body;
        const userid =req.userId;
        console.log(userid,"user id coming from req.userid of jwtoken");
        const isUser =await UserModel.findById(userid);
        if(isUser){
          
            const insertedProduct = await ProductModel.create({
                productname,
                category,
                productdetails,
                price,
                rating
            })
    
            return res.status(200).json({
                message: "Product inserted successfully",
                insertedProduct
            })
        }

        res.status(404).json({
            message:"User does not exist to add the the product"
        })
    } catch (error) {
        console.log(error.message);
        res.status(404).json({
            message: error.message
        })
    }

}

module.exports = addproduct;