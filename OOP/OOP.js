
// only function declarations and expressions. They have .this keyword. arrow functions dont
const Person = function(firstName, birthYear) {}

new Person('Jonas', 1991)

// only function declarations and expressions. They have .this keyword. arrow functions dont
const Person = function(firstName, birthYear) {
    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never create Method inside constructor function 
    // this.calcAge = function() {}
}

// Inheriting from the constructor 
const jonas = new Person('Jonas', 1991);
const matilda = new Person('matilda', 2017);
const jack = new Person('jack', 2017);
console.log(jonas);
console.log(matilda, jack);

// Checking if a instances 
console.log(jonas instanceof Person);

// Prototypes - creating methods 
Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

// Invoking the method to each object 
jonas.calcAge();
matilda.calcAge()

// Viewing the prototype of objects 
console.log(jonas.__proto__);