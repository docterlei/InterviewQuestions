// 防抖
const myDebounce = (fn, time) => {
    let timer = undefined;
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, time);
    }
}