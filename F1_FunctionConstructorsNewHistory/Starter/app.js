function Person (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

var john = new Person("Shawn", "Price");
console.log(john);

var jane = new Person("Jane", "Simpson");
console.log(jane);