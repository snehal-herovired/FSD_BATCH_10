const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 6;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require('jsonwebtoken');

const register = async (req,res)=>{
   
        const {username,email,password} = req.body;
        console.log(req.body);
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        try{

            if(username == '' || email == '' || password == ''){
                res.status(400).json({
                    message:'Please fill all the fields'
                })
            } 

            if(!email.match(emailRegex)){
               return res.status(400).json({
                    message:'Email format is wrong'
                })
            }

            const isUser = await userModel.find({email});
            if(isUser.length>0){
                return  res.status(200).json({
                    message:'User Already Exists',
                    isUser
                })
            }

            const registerUser = await userModel.create({
               username:username,
                email:email,
                password:bcrypt.hashSync(password,salt),
            })
            const token = await jwt.sign({id:registerUser._id},process.env.SCRETE_KEY,{
                expiresIn:'24d'
            })
            // console.log(token);
            res.status(200).json({
                success: true,
                message:"User registered successfully",
                registerUser,
                token
            })

        
        }


    catch (error) {
        console.log(error);
        res.status(400).json({
            message:`Somethig went wrong with register controller ${error.message}`
        })
    }
}

const login = async (req,res)=>{
    const {email,password}= req.body;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      
    try {
        if(email == '' || password == ''){
            res.status(400).json({
                message:'Fill all the fields'
            })
        }

        if(!email.match(emailRegex)){
           return res.status(400).json({
                message:'Invalid email format'
            })
        }
        const isUser = await userModel.find({email});
        if(isUser.length == 0){
            return res.status(400).json({
                message:'User dose not exist,Please register'
            })
        }
        if(isUser.length>0 && isUser[0].password){
            if(await bcrypt.compare(password,isUser[0].password)){
                const token = jwt.sign({id:isUser[0].password},process.env.SCRETE_KEY,{
                    expiresIn:'24d'
                })

                res.status(200).json({
                    message:'Login Successfull',
                    userid:isUser[0]._id,
                    token
                })
            }
        }

    } catch (error) {
        return res.status(400).json({
            message:`Something went wrong ${error.message}`
        })
    }
}

const profileView  =  async (req,res)=>{
    
    try {
        const {id} = req.params;
        console.log(id);
    
        const getProfile= await userModel.findById({_id:id});
        console.log(getProfile);
    
        if(!getProfile){
            return res.status(404).json({
                success: false,
                message:'User Not found',
            })
        }
    
        res.status(200).json({
            success: true,
            user: {
              email: getProfile.email,
              name: getProfile.username,
            },
          });
    } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: 'Something went wrong  with server',
        });
    }


}


const updateUsername = async (req,res)=>{

   try {
    const {id}=req.params;
    const {username1}=req.body;

    console.log(username1);
    if(id=='' || username1 == ''){
        return res.status(400).json({
            message:`fields are not provided`
        })
    }

    const getData = await userModel.findByIdAndUpdate({_id:id},{username:username1},{ new: true });
    if(!getData){
        return res.status(400).json({
            message:`User dose not exist`
            
        })
    }

   
       return res.status(200).json({
        message:` User Data Updated Sccessfully`,
        user:{email:getData.email,
        name:getData.username}
       })
    

   } catch (error) {
    console.error(error);
    res.status(500).json({
       message: 'Something went wrong.',
    });
   }
}
module.exports = {register,login,profileView,updateUsername};
