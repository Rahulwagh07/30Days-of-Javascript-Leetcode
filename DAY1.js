// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const createHelloWorld = function() {
    return () => "Hello World"
}

 const f = createHelloWorld();
 console.log(f());
 console.log(f("hello, []"));

 //// Call the returned function to get "Hello World"
 console.log(createHelloWorld()());