(function greet(name) {
    console.log(name);
})("Mr");

var greetFunc = function (name) {
    console.log(name);
}("Shawn");

(function(global, name, age, sport) {
    var greeting = "Please welcome";
    global.greeting = "Ladies and gentlemen this is";
    console.log(greeting + ' ' + name + ' who is ' + age + ' and loves ' + sport + '.');
}(window, 'Freshco', 47, 'Tennis'));

console.log(greeting + ' Shawn Freshco!');