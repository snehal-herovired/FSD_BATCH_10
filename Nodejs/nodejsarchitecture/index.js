//inbuilt :fs module;
// console.log("start");
const fs = require('fs');


// //read the file;
// //asychornous method
// fs.readFile('./example.txt', "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data, "from inside callback")

// // })

// // fs.readFile('./example2.txt', "utf-8", (err, data) => {
// //     if (err) {
// //         console.log(err);
// //     }
// //     console.log(data, "from inside callback")
// // })

// //synchronous method
// // const filecontent =fs.readFileSync('./example.txt',"utf-8");
// // console.log(filecontent,"content of the file");
// function readingFile(filepath) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(`${filepath}`, "utf-8", (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             resolve(data);
//         })
//     })
// }

// async function handlePromise(){
//     const file1data=await readingFile('./example.txt')
//     const file2data =await readingFile('./example2.txt')
//     console.log(file1data,file2data);
// }
// handlePromise()

// console.log("end");
//how to write in a file
//asychronous
let data= `
   This is Herovired.
   Welcome to the Class

`
// fs.writeFile('hero.txt',data,(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

//synchornous 
// fs.writeFileSync('heo.txt',data);

// Create a file and insert data and also read the data.
// Provided you are using asynchronous functions .
// fs.writeFile('hero.txt',data,(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// fs.readFile('hero.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data,"reading file");
// })

fs.appendFile("hero.txt",data,(err)=>{
    if(err){
        console.log(err);
    }
})

// appendFileSync.

//how to know a file or folder
function isfileOrFolder(filepath){
    fs.stat(`${filepath}`,(err,stats)=>{
        if(err){
            console.log(err);
        }
        if(stats.isFile()){
            console.log("this is file");
        }
        if(stats.isDirectory()){
            console.log("this is folder");
        }
    }) 
}

isfileOrFolder("./example.txt")
isfileOrFolder("testfolder")

