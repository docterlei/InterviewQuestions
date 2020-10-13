function Parent() {
    this.name = 'zhangsan';
    this.colors = [1,2,3]
}

function Child() {
    Parent.call(this)
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

// 父类构造函数会被调用俩次， 子类实例和实例原型上都会有一个相同的属性，造成内存浪费
