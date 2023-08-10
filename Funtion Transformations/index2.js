//Write a function argumentsLength that returns the count of arguments passed to it.


var argumentsLength = function(...args) {
    return args.length;
};

 
 const count =  argumentsLength(1, 2, 3); // 3
 console.log(count);