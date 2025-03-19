class Product {
    constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    sell(num) {
        if(this.quantity >= num) this.quantity -= num;
        else throw new Error('Out of Stock!')
    }

    return(num) {
        this.quantity += num;
    }

    applyDiscount(percentage) {
        this.price -= this.price * percentage
    }
}

module.exports = Product;