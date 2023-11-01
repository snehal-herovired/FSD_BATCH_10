// require() in-built nodejs;
// destructing
const {addNewProduct,deleteProductbyName} =require('./productfun');

// const obj =require('./productfun');
// obj.addNewProduct();
console.log(addNewProduct)


// V8 Engine :-> js (except DOM)
// Event Loop 
//Modules : module.exports and require
//Inbuilt : fs,path,child process,http
//fs : filesystem :--> files and folders 
//path : path of files and folders
// cp: to be able to use behind the scenes application;
//http: network and req, response.
//worker thread : CPU intensives tasks can be worked .
//global :nodejs (Global and this)
//Event Queue: multiple requests coming from client;
//Lubev library => I/O asynchronous non blocking;
//Event Emitter : in built classes for creating custom event;