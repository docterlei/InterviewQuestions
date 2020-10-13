const myAssign = (target, ...args) => {
    for(let i = 0; i < args.length; i++) {
        for(let key in args[i]) {
            if(args[i].hasOwnProperty(key)) {
                target[key] = args[i][key]
            }
        }
    }
    return target;
}