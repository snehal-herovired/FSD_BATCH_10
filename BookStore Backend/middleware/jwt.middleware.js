const jwt = require('jsonwebtoken');

async function jwtVerify(req,res,next) {

   
 
    let token;
    try {

        if(!req.headers.authorization )
        {
            console.log(`Unauthorized: No token provided. ${req.url}`);
            return res.status(401).json({
                message:`Unauthorized to access`
            })
        }
        if(req.headers && req.headers.authorization){
            let beararToken  =  req.headers.authorization;
            token = beararToken.split(' ')[1];
            const decoded = await jwt.verify(token,process.env.SCRETE_KEY);
            if(!decoded){
                return res.status(400).json({
                    message:`token is not valid or expired`
                })
            }
            next();
        }
    } catch (error) {
        console.log("error from JWT middleware",error);
        return res.status(400).json({
            message:`Something went wrong ${error.message}`
        })
    }
    
}

module.exports = jwtVerify