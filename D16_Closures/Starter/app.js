var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {

        var fullname = this.firstName + ' ' + this.lastName;

        return fullname;
    }
};

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + " " + lang2);
    console.log('=================');
};

var logPersonName = logName.bind(person);

logPersonName('en');

logName.call(person, 'es', 'en');

logName.apply(person, ['es', 'en']);



var person2 = {
    firstName: 'Jane',
    lastName: 'Doe'
};


//Function Borrowing
console.log(person.getFullName.apply(person2));

//Function Currying
function multiply (a, b) {
   return a * b;
}

var multiplyByTwo  = multiply.bind(this, 2);

console.log(multiplyByTwo(8));