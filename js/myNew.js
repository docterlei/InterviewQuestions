function myNew(cons,...args) {
    if(typeof cons !== 'function') {
        throw new TypeError('Type Error')
    }
    const obj = Object.create(cons.prototype);
    const res = cons.apply(obj, args)

    const isObject = typeof res === 'object' && res !== null;
    const isFunction = typeof res === 'function';
    return isObject || isFunction ? res : obj;
}