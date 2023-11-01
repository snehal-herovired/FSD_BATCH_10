const products =require('./products')

function addNewProduct(name, price) {
    product = {};
    product.name = name;
    product.price = price;
    products.push(product);
  }


  
function deleteProductbyName(pname)
{
    for (let i = 0; i < products.length; i++) {
        if(products[i].name==pname)
        {
            products.splice(i,1);
            console.log("Product Deleted")
            
            
       // console.log("The price of the product"+ products[i].name+" is: ", products[i].price);
    }
      }
}

module.exports={
    addNewProduct,
    deleteProductbyName
}



