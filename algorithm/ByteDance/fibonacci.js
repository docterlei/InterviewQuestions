// 1 1 2 3 5 8 13 21
function fibonacci(n) {
    if(n <= 1) {
        return 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

console.log(fibonacci(2))

/**
 * @description 求斐波那契数列第n项
 * @param {number} n 项目数
 * @return {number} 返回第n项值
 */
function fibonacci(n) {
    let pre = 1;
    let cur = 1;
    let data;
    if (n == 1 || n == 2) return 1;
    for (let i = 3; i <= n; i++) {
        data = pre + cur;
        pre = cur;
        cur = data;
    }
    return data;
}
