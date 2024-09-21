/*
Create a class called Customer
- Create a constructor for this class which takes 4 arguments:
    name
    age
    membershipType
    membershipCost
- Create a method called getDetails() which returns the customer's information in the format:
    {name} is {age} years old and has a {membershipType} membership with ${membershipCost}.
- Create a method called upgradeMembership()
    which upgrades the membership type of the customer to 'Premium' and increases the cost by 20%.
*/

class Customer{
    constructor(name, age, membershipType, membershipCost) {
        this.name = name;
        this.age = age;
        this.membershipType = membershipType;
        this.membershipCost = membershipCost;
    }
    getDetails() {
        return `${this.name} is ${this.age} years old and has a ${this.membershipType} membership with $${this.membershipCost}`
    }

    upgradeMembership() {
        this.membershipType = 'Premium';
        this.membershipCost *= 1.20;
        return;
    }
}


class VIPCustomer extends Customer{
    constructor(name, age, membershipType, membershipCost) {
        super(name, age, membershipType, membershipCost);
    }

    applyDiscount(){
        return this.membershipCost = this.membershipCost - (this.membershipCost * 0.10);
    }
}



class BusinessCustomer extends Customer{
    constructor(name, age, membershipType, membershipCost, duration) {
        super(name, age, membershipType, membershipCost);

            this.duration = duration
        }

    extendContract() {
        this.duration += 1;
        this.membershipCost = this.membershipCost - (this.membershipCost * 0.15);
        return;
    }
}


const customer1 = new Customer('John Doe', 30, 'Basic', 50);

const vipCustomer = new VIPCustomer('Jane Smith', 35, 'Gold', 100);

const businessCustomer = new BusinessCustomer('David Johnson', 40, 'Platinum', 200, 2);

customer1.upgradeMembership();

vipCustomer.applyDiscount();

businessCustomer.extendContract();

console.log(customer1.getDetails());
console.log(vipCustomer.getDetails());
console.log(businessCustomer.getDetails());