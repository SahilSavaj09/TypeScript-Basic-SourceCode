"use strict";
var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// create instance of class
var customer = new Customer("Sahil", "Savaj");
// customer.firstName = "Sahil";
// customer.lastName = "Savaj";
console.log("First name: " + customer.firstName);
console.log("Last name: " + customer.lastName);
