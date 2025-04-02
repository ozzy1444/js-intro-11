import { businessCustomer } from "./Business-Customer";
import { Customer } from "./Customers";
import { VIPCustomer } from "./VIP-customer";

/*
Create a customer object with below information
customer1 = { name: 'John Doe', age: 30, membershipType: 'Basic', membershipCost: 50 }
*/

const Customer1 = new Customer('John Doe', 30, 'Basic', 50);
const vipCustomer = new VIPCustomer('Jane Smith', 35, 'Gold', 100)
const businessCustomer1 = new businessCustomer ('David Johnson', 40, 'Platinum', 200, 2);
const customers = [Customer, VIPCustomer, businessCustomer]

for(const customer of customers) {
    console.log(customer.getDetails);
}

Customer1.upgradeMembership() //updated membersship from basic to premium and adds 20% cost
vipCustomer.applyDiscount() // this will update the cost to %10 less
businessCustomer1.extendContract() // add 1 year duration and subtracts %15 from the cost 

for(const customer of customers) {
    console.log(customer.getDetails());
}
