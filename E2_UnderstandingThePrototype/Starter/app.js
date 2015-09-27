var person = {
    firstName: 'default',
    lastName: 'default',
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

var john = {
    firstName: 'John',
    lastName: 'Doe'
};

// don't EVER do this!!!!
john.__proto__ = person;

for(var item in john) {

    if(john.hasOwnProperty(item)) {

    console.log(item + ": " + john[item]);

    }
}


var jim = {
    address: '1500 Walton Reserve Blvd',
    phoneNum: '770-876-0932'
};

var juan = {
    employedAt: 'Walmart'

};

_.assign(john, jim, juan);