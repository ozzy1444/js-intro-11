const Product = require("./prototypes/product");

const pen = new Product('Pen', 20, 10);
const mug = new Product('Mug', 10, 15);
const tshirt = new Product('T-Shirt', 5, 20);

console.log(pen)

pen.sell(15);
pen.return(3);
pen.applyDiscount(0.2);
console.log(pen)