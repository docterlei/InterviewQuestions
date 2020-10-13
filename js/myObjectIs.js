//object.is 解决的主要是这俩个问题
// +0 === -0 // true
// NaN === NaN // false
myObjectIs = (x, y) => {
    if(x === y) {
        return x !== 0 || y !== 0 || 1/x === 1/y
    } else {
        return x !== x && y !==y
    }
}