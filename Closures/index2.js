// Given an integer n, return a counter function. 
//This counter function initially returns n and then returns 1 more
// than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

var createCounter = function(n) {
    // Return an anonymous function (a closure) that increments n by 1 each time it's called
    return () => n++;
}

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
 
