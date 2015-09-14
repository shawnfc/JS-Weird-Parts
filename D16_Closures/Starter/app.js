function greet (whattosay) {
    return function (name) {
        console.log(whattosay + ' ' + name);
    }
}

greet('Hi')('Shawn');

var sayHi =  greet('Hi');

sayHi('Dave');