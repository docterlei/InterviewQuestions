function Parent() {
    this.name = 'zhangsan'
}

function Child () {
    Parent.call(this)
}



// 不能继承原型的属性/方法