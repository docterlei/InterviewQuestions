// 浮点数相乘
accMultiply = (arg1, arg2) => {
    let m = 0;
    let s1 = arg1.toString();
    let s2 = arg2.toString();
  
    try {
        m += s1.split('.')[1].length;
    } catch (e) {
        console.log(e.message);
    }
    try {
        m += s2.split('.')[1].length;
    } catch (e) {
        console.log(e.message);
    }
  
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}
  
// 浮点数相加,用了浮点数相乘
accAdd = (arg1, arg2) => {
    let l1, l2, m;

    try {
        l1 = arg1.toString().split('.')[1].length; // 小数位数
    } catch (e) {
        l1 = 0; // 如果不存在小数 上一部会捕捉到错误 进入这里 赋值为 0，
    }
    try {
        l2 = arg2.toString().split('.')[1].length; // 小数位数
    } catch (e) {
        l2 = 0;
    }
    
    m = Math.pow(10, Math.max(l1, l2)); // 取较大的小说位数 并乘 10（较大数的10的 n 次幂）

    return (accMultiply(arg1, m) + accMultiply(num2, m)) / m  //依赖浮点相乘
}

// 浮点数相减,用了浮点数相乘
accSub = (arg1, arg2) => {
    let  l1, l2, m;

    try {
        l1 = arg1.toString().split('.')[1].length; // 小数位数
    } catch (e) {
        l1 = 0; // 如果不存在小数 上一部会捕捉到错误 进入这里 赋值为 0，
    }
    try {
        l2 = arg2.toString().split('.')[1].length; // 小数位数
    } catch (e) {
        l2 = 0;
    }

    m = Math.pow(10, Math.max(l1, l2));
   
    return (accMultiply(arg1, m) - accMultiply(arg2, m)) / m //依赖浮点相乘
}

// 浮点数相加,不依赖浮点数相乘
accAdd = (arg1, arg2) => {
    let l1, l2, num1, num2, r, m;

    try {
        l1 = arg1.toString().split('.')[1].length; // 小数位数
    } catch (e) {
        l1 = 0; // 如果不存在小数 上一部会捕捉到错误 进入这里 赋值为 0，
    }
    try {
        l2 = arg2.toString().split('.')[1].length; // 小数位数
    } catch (e) {
        l2 = 0;
    }
    
    r = Math.abs(l1 - l2);
    m = Math.pow(10, Math.max(l1, l2)); // 取较大的小说位数 并乘 10（较大数的10的 n 次幂）

    if(r > 0) {
        if(l1 > l2) {
            num1 = Number(arg1.toString().replace('.', ''));
            num2 = Number(arg2.toString().replace('.', '')) * Math.pow(10, r);
        } else {
            num1 = Number(arg1.toString().replace('.', '')) * Math.pow(10, r);
            num2 = Number(arg2.toString().replace('.', ''));
        }

    } else {
       num1 = Number(arg1.toString().replace('.', ''));
       num2 = Number(arg2.toString().replace('.', ''));
    }

    return (num1 + num2) / m  
}

// 浮点数相减,不依赖浮点数相乘
accSub = (arg1, arg2) => {
    let l1, l2, num1, num2, r, m;

    try {
        l1 = arg1.toString().split('.')[1].length; // 小数位数
    } catch (e) {
        l1 = 0; // 如果不存在小数 上一部会捕捉到错误 进入这里 赋值为 0，
    }
    try {
        l2 = arg2.toString().split('.')[1].length; // 小数位数
    } catch (e) {
        l2 = 0;
    }
    
    r = Math.abs(l1 - l2);
    m = Math.pow(10, Math.max(l1, l2)); // 取较大的小说位数 并乘 10（较大数的10的 n 次幂）

    if(r > 0) {
        if(l1 > l2) {
            num1 = Number(arg1.toString().replace('.', ''));
            num2 = Number(arg2.toString().replace('.', '')) * Math.pow(10, r);
        } else {
            num1 = Number(arg1.toString().replace('.', '')) * Math.pow(10, r);
            num2 = Number(arg2.toString().replace('.', ''));
        }

    } else {
       num1 = Number(arg1.toString().replace('.', ''));
       num2 = Number(arg2.toString().replace('.', ''));
    }

    return (num1 - num2) / m  
}