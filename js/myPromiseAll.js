// Promise.all是支持链式调用的，本质上就是返回了一个Promise实例，通过resolve和reject来改变实例状态
function myPromiseAll(promistArr) {
    return new Promise((resolve, reject) => {
        const arr = [];
        const count = 0;
        for(let i = 0; i < promistArr.length; i++) {
            promistArr[i].then(res => {
                arr[i] = res;
                count++;
                if(count === length) {
                    resolve(arr)
                }
            }, err => reject(err))
        }
    })
}