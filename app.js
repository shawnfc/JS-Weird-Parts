//functional programming
function mapForEach (arr, fn) {

    var newArr = [];

    for(var i = 0; i < arr.length; i++) {

        newArr.push(
            fn(arr[i])
        );

    }

    return newArr;
}


//the long way
var arr1 = [1, 2, 3];

var arr2 = mapForEach(arr1, function(item) {
    return item * 3;
});

console.log(arr1);

console.log(arr2);

console.log('--------------');

var arr3 = mapForEach(arr1, function(item) {
    return item > 2;
});

console.log(arr3);


var checkPastLimit = function(limiter, item) {
    return item > limiter;
};

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 2));
console.log(arr4);