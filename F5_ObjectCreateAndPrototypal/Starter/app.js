var Person = {
    firstName: "Default",
    lastName: "Default",
    greet: function() {
        return "Hi " + this.firstName;
    }
};

var john = Object.create(Person);
john.firstName = "Shawn";

console.log(john.greet());