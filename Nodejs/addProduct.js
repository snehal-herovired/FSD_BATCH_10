function addNewProduct(name, price) {
    product = {};
    product.name = name;
    product.price = price;
    products.push(product);
  }


module.exports=addNewProduct;