var person = {
    firstname: "John",
    lastname: "Doe",
    getFullName: function () {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log("Arguments: " + lang1 + ' ' + lang2);
    console.log('-----------------')
};

var logPersonName = logName.bind(person);

logPersonName("Shawn", "Conrad");

logName.call(person, 'Spanish', 'English');

logName.apply(person, ['French', 'Italian']);

//function borrowing
var person2 = {
    firstname: "Jane",
    lastname: "Doe"
};

console.log(person.getFullName.apply(person2));


//function currying: creating a copy of a function with preset parameters
function multiply(a, b) {
    return a * b;
};

var multiplyByTwo = multiply.bind(this, 2); //set 2 as the first parameter

console.log(multiplyByTwo(4));









