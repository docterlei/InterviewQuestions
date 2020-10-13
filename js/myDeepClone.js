const myDeepClone = target => {
    var res = {};
    for(let key in target) {
        if(Object.prototype.hasOwnProperty.call(target, key)) {
            if(typeof target[key] === 'object') {
                res[key] = myDeepClone(target[key])
            } else {
                res[key] = target[key]
            }
        }
    }
    return res;
}