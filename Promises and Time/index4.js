// Given a function fn, an array of arguments args, and an interval time t,
//  return a cancel function cancelFn.

// The function fn should be called with args immediately and 
// then called again every t milliseconds until cancelFn is called at cancelT ms.


var cancellable = function(fn, args, t) {
    fn(...args)
    let timer = setInterval(() => fn(...args), t);

    let cancFn = () => clearInterval(timer);
    return cancFn;
};


    const result = []
  
    const fn = (x) => x  * 2
    const args = [4], t = 20, cancelT = 110
  
    const start = performance.now()
  
    const log = (...argsArr) => {
        const diff = Math.floor(performance.now() - start)
        result.push({"time": diff, "returned": fn(...argsArr)})
    }
         
    const cancel = cancellable(log, args, t);
  
    setTimeout(() => {
       cancel()
    }, cancelT)
     
    setTimeout(() => {
      console.log(result)   
    }, cancelT + t + 15)    
 