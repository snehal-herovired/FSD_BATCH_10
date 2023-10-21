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

                // blocking and non-blocking
// callbacks : synchronous and asynchronour


console.log("start of code")
function add(a,b){
    let c=a+b;
    return c;
}

function calculator(a,b,calcfun){
     return calcfun(a,b)
}


let result =calculator(2,3,add);
console.log(result,"result from callback")


// Asycnhronous callback ;
// setTimeout(function,delay)
// after delay ,the function will get executed.

function addNumber(a,b,delay){
    setTimeout(() => {
        let c =a+b;
        console.log(c);
    }, delay);
}
addNumber(2,3,1000)