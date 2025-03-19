const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
  ];

// Task 1 Count how many users are older than 30
let olderThan30 = 0;

for(let user of users) {
    if(user.age > 30) olderThan30++;
}
console.log(olderThan30); // 2

// bilals way using reduce()

// const olderthan30 = users.reduce((acc, curr) => acc.age > 30 ? acc + 1 : acc, 0)

// Task 2 How many users live in chicago and IL 

let liveInChi = 0;
for(let user of users) {
    if(user.address.city === 'Chicago' ) liveInChi++;
}
console.log(liveInChi);

// reduce method
const liveInChi2 = users.reduce((acc, curr) => curr.address.city === 'Chicago' ? acc + 1 : acc , 0)

console.log(liveInChi2)

// Task 3 How many users live in IL 

let liveInIL = 0;
for(let user of users) {
    if(user.address.state === 'IL') liveInIL++;
}
console.log(liveInIL);

//reduce method below

const liveInIL2 = users.reduce((acc, curr) => curr.address.state === 'IL' ? acc + 1 : acc , 0)

console.log(liveInIL2)


// Task 4 count how many emails use the domain gmail

//reduce method
const useGmail = users.reduce((acc, curr) => curr.email.includes('gmail') ? acc + 1 : acc , 0)
console.log(useGmail);

let useGmail1 = 0;
for(const user of users) {
    if(user.email.includes('gmail')) useGmail1++;
}
console.log(useGmail1)



// task 5 find and store all the users name younger than 35

const under35 = [];

for(const user of users) {
    if(user.age < 35) under35.push(user.firstName);
}

console.log(under35);


//task 6 find the average age of all users

const averageAge = users.reduce((acc, curr) => acc + curr.age ,0) / users.length

console.log(averageAge) 




// ============================SECOND ARRAY FOR MORE TASKS
const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99,
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99,
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99,
    },
];

// Find the most expensive product

const mostExpensive = appleStore.reduce((acc, curr) => curr.price > acc.price ? curr : acc)

console.log(mostExpensive.productName)


// Find the product with the biggest quantity 

const highestQty = appleStore.reduce((acc, curr) => curr.quantity > acc.quantity ? curr : acc)

console.log(highestQty.productName)


// •	Find all the product names 
const productNames = appleStore.map(product => product.productName)
console.log(productNames)






// =======================THIRD ARRAY FOR MORE TASKS
const shoppingCart = {
    userId: 12345,
    items: [
        {
            productId: 1,
            productName: 'Laptop',
            price: 999.00,
            quantity: 1,
            specifications: {
                brand: 'Dell',
                screen: '15.6 inches',
                processor: 'Intel Core i7'
            }
        },
        {
            productId: 2,
            productName: 'Smartphone',
            price: 499.00,
            quantity: 2,
            specifications: {
                brand: 'Apple',
                model: 'iPhone 12',
                color: 'Space Gray'
            }
        },
        {
            productId: 3,
            productName: 'Headphones',
            price: 149.00,
            quantity: 3,
            specifications: {
                brand: 'Sony',
                type: 'Over-ear',
                wireless: true
            }
        }
    ],
    shippingAddress: {
        street: '123 Main Street',
        city: 'Anytown',
        zipCode: '12345'
    },
    orderDate: '2023-08-29'
};

// * Calculate the total price of products in the cart -> 2444

const totalPrice = shoppingCart.items.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)
console.log(totalPrice);



// * Find the brands of all the products in the cart -> [ 'Dell', 'Apple', 'Sony' ]
// * Find all the items in the cart with their quantity -> [ 'Laptop, 1', 'Smartphone 2', 'Headphones, 3' ]

const itemWithQty = shoppingCart.items.map(item => `${items.productName}`, `${items.quantity}`)

console.log(itemWithQty)