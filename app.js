//FUNCTIONAL PROGRAMMING
//creating a function the takes an array and another function that will do the final work.
function mapForEach(arr, fn) {
    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

//Apply the array to use
var arr3 = mapForEach(arr1, function(item) { //add the function of work that needs to be done
    return item * 2;
});

console.log(arr3);

var checkPastLimit = function (limiter, item) {
    return item > limiter;
};

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4)