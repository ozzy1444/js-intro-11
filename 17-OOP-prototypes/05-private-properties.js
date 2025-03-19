
class Customer {
    //private property/ all you need to do it add a # before it and thats it 
    #secretInfo = 'Hello';
}

const cust1 = new Customer();
const cust2 = new Customer();

console.log(cust1.secretInfo);
console.log(cust2.secretInfo);