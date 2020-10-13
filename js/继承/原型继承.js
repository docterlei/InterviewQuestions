function Parent() {
    this.name = 'zhangsan'
}

function Child () {

}

Child.prototype = new Parent()

// 1.子类实例共享属性，造成实例间的属性相互影响
// 2.在创建Child的实例时，不能向Parent传参