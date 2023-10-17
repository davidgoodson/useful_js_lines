"use strict"

const obj1 = {
    name: "James",
    grossPay: 10000,
    NSSF: 0.1,
    PAYE: 0.28,
    getNetPay(){
        return `${this.name} gets ${this.grossPay - this.NSSF*this.grossPay - this.PAYE*this.grossPay + 2000}`;
    }
}

const obj2 = {
    name: "Henry",
    grossPay: 20000,
    NSSF: 0.1,
    PAYE: 0.4,
    getNetPay(){
        return `${this.name} gets ${this.grossPay - this.NSSF*this.grossPay - this.PAYE*this.grossPay + 1500}`;
    },
}

/**
 * Define external / custom netPay function, don't use arrow functions because the 'this' context in the arrow functions is captured
 * from global scope not to the specified object scope hence you wont get the desired behavior. Thus this.name will be undefined.
 */

const netPay = function () {
    return `${this.name} gets ${this.grossPay - this.NSSF*this.grossPay - this.PAYE*this.grossPay + 750}`
}

const bind1 = netPay.bind(obj1) // Use custom netPay function with obj1 properties, this is pointing to obj1 values
const bind2 = obj2.getNetPay.bind(obj1) // Use obj2 getNetPay function with obj1 property values, this is pointing to obj1 values
const bind3 = obj1.getNetPay.bind(obj2) // Use obj1 getNetPay function with obj2 property values, this is pointing to obj2 values
const result1 = obj1.getNetPay() // Use obj1 getNetPay function with obj1 property values, this is left pointing to obj1 values
const result2 = obj2.getNetPay() // Use obj2 getNetPay function with obj2 property values, this is left pointing to obj2 values

// Outputs
console.log("bind1: ", bind1())
console.log("bind2: ", bind2())
console.log("bind3: ", bind3())
console.log("result1: ", result1)
console.log("result2: ",result2)