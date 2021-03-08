var pubsub = {
	//事件调度中心
    topics: {},
    //注册事件到调度中心
    subscribe(topic, fn) {
        this.topics[topic] = this.topics[topic] || []
        this.topics[topic].push(fn)
    },
    //将事件发布到调度中心
    publish(topic, ...args) {
        if (!this.topics[topic]) return
        for (let fn of this.topics[topic]) {
            fn(...args)
        }
    },

    //解绑到调度中心的事件
    unsubScribe(topic, fn) {
        let fnList = this.topics[topic]
        if (!fnList) return
        //若不传入指定的要取消的订阅的方法(fn),则清除所有topic下的订阅
        if (!fn) {
            fnList && (fnList.length == 0)
        } else {
            fnList.forEach((item, index) => {
                if (item == fn) {
                    fnList.splice(index, 1)
                }
            })
        }
    }
}

//注册eat事件
pubsub.subscribe('eat', time => {
    console.log(`now is ${time},time to eat lunch`);
})
pubsub.subscribe('eat', time => {
    console.log(`now is ${time},time to eat dinner`);
})

//注册work事件
pubsub.subscribe('work', time => {
    console.log(`now is ${time},time to work`);
})

//发布work，eat事件
pubsub.publish('work', '8:30 AM') //now is 8:30 AM,time to work
pubsub.publish('eat', '12:30 AM') //now is 12:30 AM,time to eat lunch

//取消eat事件的订阅
pubsub.unsubScribe('eat')