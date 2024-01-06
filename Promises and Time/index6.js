// Write a class that allows getting and setting key-value pairs, 
//however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value,
// and a duration in milliseconds. Once the duration has elapsed, the 
//key should be inaccessible. The method should return true if the same
// un-expired key already exists and false otherwise. Both the value and 
//duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

var TimeLimitedCache = function() {
    this.cache = new Map();
};
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let found = this.cache.has(key);
    if (found) {
        clearTimeout(this.cache.get(key).ref);
    }
    this.cache.set(key, {
        value,
        ref : setTimeout(() => this.cache.delete(key), duration)
    });
    return found;
};

   
 
 
TimeLimitedCache.prototype.get = function(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

 
 
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

 
   
   var obj = new TimeLimitedCache()
   console.log( obj.set(1, 42, 1000)); // false
   console.log(obj.get(1)) // 42
   console.log(obj.count()) // 1
  