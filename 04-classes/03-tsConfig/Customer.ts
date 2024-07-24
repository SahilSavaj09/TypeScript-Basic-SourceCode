class Customer {

    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }

}

// create instance of class
let customer = new Customer("Sahil", "Savaj");

// customer.firstName = "Sahil";
// customer.lastName = "Savaj";

console.log("First name: "+ customer.firstName);
console.log("Last name: " + customer.lastName);