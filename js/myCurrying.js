// 函数柯里化 在数学和计算机科学中，科里化是一种将使用多个参数的一个函数转换为一系列使用一个参数的函数的技术

function currying(fn, ...args) {
    if (args.leng >= fn.length) {
        return fn(...args)
    } else {
        return (...args2) => currying(fn, ...args, ...args2)
    }
}

function fun(a,b,c){
    console.log(arguments)
    console.log(a,b,c)
}

const curryingFun = currying(fun)