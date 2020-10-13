// 单例模式
var Singleton = function(name) {
    this.name = name;
};

Singleton.prototype.getName = function() {
    alert(this.name);
};

Singleton.getInstance = (function() {
    var instance;
    return function(name) {
        if(!instance) {
            instance = new Singleton(name)
        }
        return instance;
    } 
})()

var a = Singleton.getInstance('zhangsan');
var b = Singleton.getInstance('zhangsan');

console.log(a===b); 
console.log(a)
console.log(b)
