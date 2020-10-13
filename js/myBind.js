function myBind(context = window, ...args1) {
    if(typeof this !== 'function') {
        throw new Error('Type Error')
    }
    
    const self = this;

    return function F(...args2) {
        if(this instanceof F) {
            return new self(...args1, ...args2)
        } else {
           return self.apply(context, [...args1, ...args2])
        }
    }
}