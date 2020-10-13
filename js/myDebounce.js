// 防抖
const myDebounce = (fn, time) => {
    let timer = undefined;
    return function() {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, time);
    }
}