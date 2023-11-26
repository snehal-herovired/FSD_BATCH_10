const express = require('express');
// require() : either you external libraries or your own modules;

const app =express();
const Port =5000;

// we need to parse req body in json format;
app.use(express.json());


// get request is special as information is passed through url;
app.get('/info',(req, res)=>{
 //req : which is coming from client on this /info 
 // res : response sent from this api endpoiny /info
 res.send("Hi server is running and this get request")
})
 

app.post('/takeinfo',(req,res)=>{
    // console.log(req);
//   const name =req.body.name;
//   const password =req.body.password;
const {name,password} =req.body;
console.log(name, password);
  // client is sharing name and password ;
  // our server will extract the info given by client;
  // and in return send a response;
res.send("your request recieved")
})






app.listen(Port,()=>{
  console.log(`Server running on Port ${Port}`);
})
