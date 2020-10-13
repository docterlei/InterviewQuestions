// 观察者模式 https://blog.csdn.net/lihchweb/article/details/104001403 https://segmentfault.com/a/1190000019722065
// 目标
class Subject {
	constructor() {
		this.observers = []
	}
	add(observer) {
		this.observers.push(observer)
	}
	delete(observer) {
		let idx = this.observers.findIndex( item => item === observer);
		idx > -1 && this.observers.splice(idx, 1)
	}
	notify() {
		for(let observer of this.observers) {
			observer.update()
		}
	}		
}

//观察者
class Observer {
	constructor(name) {
		this.name= name
	}
	update() {
		console.log(`我是${this.name},我立正了`)
	}
}
// 实例化目标者
let subject = new Subject();

// 实例化两个观察者
let obs1 = new Observer('刘德华');
let obs2 = new Observer('吴彦祖');

// 向目标者添加观察者
subject.add(obs1);
subject.add(obs2);

// 目标者通知更新
subject.notify();