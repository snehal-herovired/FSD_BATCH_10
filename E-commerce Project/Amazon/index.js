//cursor :pointer
// added event listener in array;
// added event listener to particular elements
//adding class dynamically;
// about flex-wrap and how to handle overflow;
//fetch
// handling promisified function (fetch ) with async await;

let deliver_div = document.querySelector(".deliver");
let order_div = document.querySelector(".orders");
let subheader = document.querySelector('.subheader');
// console.log(subheader.children);
let child_of_subheader = subheader.children;


deliver_div.addEventListener("mouseover", (e) => {
    deliver_div.style.border = "1px solid white"
})

deliver_div.addEventListener("mouseout", (e) => {
    deliver_div.style.border = "none"
})
order_div.addEventListener("mouseover", (e) => {
    order_div.style.border = "1px solid white"
})

order_div.addEventListener("mouseout", (e) => {
    order_div.style.border = "none"
})

// for(let i=0;i<child_of_subheader.length;i++){
//     child_of_subheader[i].addEventListener("mouseover",(e)=>{
//         child_of_subheader[i].classList.add('hoverEffect')
//     })
//     child_of_subheader[i].addEventListener("mouseout",(e)=>{
//         child_of_subheader[i].classList.add('hoverOut')
//     })
// }
for (let i = 0; i < child_of_subheader.length; i++) {
    child_of_subheader[i].addEventListener("mouseover", (e) => {
        child_of_subheader[i].className = ''
        child_of_subheader[i].classList.add('hoverEffect')
    })

}
for (let i = 0; i < child_of_subheader.length; i++) {
    child_of_subheader[i].addEventListener("mouseout", (e) => {
        child_of_subheader[i].className = ''
        child_of_subheader[i].classList.add('hoverOut')
    })

}


// fetch
// fetch is used for calling APIs ;
// in order to get data from external sources or server;
// fetch is a inbuilt  Ajax method used to handle request to a server;
// fetch is a promisified function;
// by default fetch does a get type of request;
// let fetch_someData = fetch("https://dummyjson.com/products");
// console.log(fetch_someData);
let container = document.querySelector(".container");
async function fetching_data() {
    try {
        let res = await fetch("https://dummyjson.com/products")
        let data = await res.json();
        console.log(data.products);
        let productArr = data.products;
        productArr.map((ele)=>{
            container.innerHTML = container.innerHTML + `
            <div class="card">
            <div class="image-card">
            <img src=${ele.thumbnail} alt=${ele.title} srcset="">
            </div>
            <div class="card-content">
            ${ele.title}
            </div>
         </div>
         `
        })
   
    
    } catch (error) {
        console.log(error);
    }
}
fetching_data()

//map

//.map((element,index,array)=>{

// })
// let arr =[1,2,3,4]
// arr.map((ele,i)=>{
//     console.log(ele,i);
// })