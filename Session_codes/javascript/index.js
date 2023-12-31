// var a =undefined
// var b=undefined
// var c=undefined
// global object : window
// this : it refers to whichever object it is in.

// global execution context
// 2 phases : memory allocation and execution phase

// js tracks and remembers its variable name not its value.
// js also tracks it functions.

// 1st phase memory allocation : Hoisting
// HOisting : moving all the varaibles and functions to the top of global scope
// console.log(a)
// var a =20;
// console.log(a)

// // in var redclaration and reintialization is possible;
// // console.log(b);
// //temporal dead zone : TDZ , zone where you cannot access let variable.
// // let allows reintialization not redeclaration.
// let b=10;
// b=20
// console.log(b);

// //const
// let c;

// const d=10;

// console.log(fun)


// function fun(a,b){
//     let c =a+b;
//     return c;
// }

// In JS ,they are treated as first-class citizens or first-class objects;
// Because , in js functions can be stored inside a variable, they can alos
// be treated as arguments to another function and at the same time 
// // they can returned from a function.

// function fun(){
//     // named function
// }

// // Anonymous function
// //  functional expression;
// let a=function(){

// }

// // Arrow function : ES6 function
// // functional expression
// const b = ()=>{
//     //logic
// }

// // IIFE : immediately invoked functional expression;
// (
//     ()=>{
//         //logic space

//     }
// )()


// console.log(a);
// var a =function(a,b){
//    let c =a+b;
//    return c;
// }


// JS is single threaded and synchronous language.

// function fun(){

// }
// fun()

// function fun2(){

// }
// fun2()

// // blocking and non-blocking
// // callbacks : synchronous and asynchronour


// console.log("start of code")
// function add(a, b) {
//     let c = a + b;
//     return c;
// }

// function calculator(a, b, calcfun) {
//     return calcfun(a, b)
// }


// let result = calculator(2, 3, add);
// console.log(result, "result from callback")


// Asycnhronous callback ;
// // setTimeout(function,delay)
// // after delay ,the function will get executed.

// //closure and lexical scope;
// function addNumber(a, b, delay) {
//     setTimeout(() => {
//         let c = a + b;
//         console.log(c);
//     }, delay);
// }
// addNumber(2, 3, 1000);

// // sycnhronous code for multiplication and divsion using callback;

// //CALLBACK HELL
// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step one executed")
//         callback();
//     }, 1000)
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log("Step two executed")
//         callback();
//     }, 1000)
// }

// function step3(callback) {
//     setTimeout(() => {
//         console.log("Step three executed")
//     callback()
//     }, 1000)
// }
// function step4() {
//     setTimeout(() => {
//         console.log("Step four executed")
    
//     }, 1000)
// }

// step1(function(){
//     step2(function(){
//         step3(function(){
//             step4()
//         })
//     })
// })

// ES6 : Promises
// step 1 exceuted --> step 2---> step 3

//pending,resolved and rejected
//resolved and rejected.----> we handle this state.
//Process to handle our promise functions.
// .then((data)=>{})//resolved
// .catch((error)=>{})//rejected state

//Async-await statement , method.
// async function fun(){
//    LET RESULT = // await  ADD()
//LOGIC 
// }


//CALLBACK --> CUSTOM PROMISE  ;

async function fetchdata(){
    const container =document.querySelector('.card-container')
    // fetch("https://dummyjson.com/products")
    // .then((response)=>response.json())
    // .then((data)=>console.log(data.products))
    // .catch((error)=>console.error(error))

    const response = await fetch("https://dummyjson.com/products");
    const data =await response.json();
    console.log(data.products);
    //logic looping data.products
    // select using queryselector 
    //let container =document.queryselector(".card-container")
    // container.innerHTML += `
    
    // <div class="card-heading">${}</div>
        // <div class="card-body">${}</div>
    // `
     const productArr =data.products;
    productArr.map((ele)=>{
        container.innerHTML =container.innerHTML + `
        <div class="card-heading">${ele.title}</div>
            <div class="card-body">${ele.description}</div>
            <button onclick="clickme(${ele.id})" >Show product </button>
        `
        
    })

     

}
fetchdata()
async function clickme(id){
    // const id  =parseInt(id);

    const response =await fetch(`https://dummyjson.com/products/${id}`)
    const data =await response.json();
    console.log(data,"for single product based on ID")

}

// ES6

// `asdasd asdasdad ${ele}
// `