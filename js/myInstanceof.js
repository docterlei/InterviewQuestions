// 递归版本
const myInstanceof = (obj, ctor) => {
    if(obj.__proto__) {
        if(obj.__proto__ === ctor.prototype) {
            return true
        } else {
            return myInstanceof(obj.__proto__, ctor)
        }
    }
    return false
}