// 1. 类的实现

// 转换前：
class Parent {
    constructor(a){
      this.filed1 = a;
    }
    filed2 = 2;
    func1 = function(){}
}

// 转换后
function _classCallCheck(instance, Constructor) {
　// instanceof 检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
    if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
    }
}

var Parent = function Parent(a) {
    _classCallCheck(this, Parent);

    this.filed2 = 2;

    this.func1 = function () { };

    this.filed1 = a;
};

//    1）调用_classCallCheck方法判断当前函数调用前是否有new关键字

// 　　　　构造函数执行前有new关键字，会在构造函数内部创建一个空对象，将构造函数的prototype指向这个空对象的__prpto__，并将this指向这个空对象。如上，_classCallCheck中：this instanceof Parent，返回true。

// 　　　　若构造函数前面没有new则构造函数的prototype不会出现在this的原型链上，返回false

// 　　2）将class内部的变量函数赋值给this

// 　　3）执行constructor内部的逻辑

// 　　4）return this（构造函数默认在最后帮我们做了这一步）