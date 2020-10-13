// Promise.all是支持链式调用的，本质上就是返回了一个Promise实例，通过resolve和reject来改变实例状态
function myPromiseRace(promistArr) {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < promistArr.length; i++) {
            promistArr[i].then(res => { 
                resolve(arr)  
            }, err => reject(err))
        }
    })
}