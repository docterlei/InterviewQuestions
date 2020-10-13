// 节流
const myThrottle = (fn, time) => {
    let timer = null;
    return function(...args) {
        if(!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args);
                timer = null;
            }, time);
        }
    }
}


// 时间戳实现 
const myThrottle = (fn, time) => {
    let pretime = 0;
    return function(...args) {
        if(Date.now() - pretime > time) {
            pretime = Date.now;
            fn.apply(this, args)
        }
    }
}
