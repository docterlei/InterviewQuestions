# react的坑点

1. jsx做表达式判断的时候, 需要强转为boolean类型, 如:
    ```
    render() {
        const b = 0;
        return <div>
            {
            !!b && <div>这是一段文本</div>
            }
        </div>
    }
    如果不使用 !!b 进行强转数据类型, 会在页面里面输出 0
    ```

2. 现在有一个button, 要用react在上面绑定点击事件,要怎么做?
    ```
    class Demo { 
        render() { 
            return <button onClick={(e) => { 
                alert('我点击了按钮') 
                }}> 
                    按钮 
                </button> 
        } 
    } 

    接着上面的代码,这样设置点击事件会有什么问题？

    由于onClick使用的是匿名函数,所以每次重新渲染的时候,会把onClick当做一个新的prop来处理,
    会将内部缓存的onClick事件进行重新赋值, 所以相对使用函数来说,可能有一点的性能下降，修改如下:

    class Demo { 
        onClick = (e) => { 
            alert('我点击了按钮') 
        } 

        render() { 
            return <button onClick={this.onClick}> 
                按钮 </button> 
        } 
    } 

    当然如果你在内部声明的不是箭头函数,然后你可能需要在设置onClick的时候使用bind绑定上下文,
    这样的效果和先前使用匿名函数差不多,因为bind会返回新的函数,也会被react认为是一个新的prop
    ```

3. 給组件添加ref的时候,尽量不要使用匿名函数,因为当组件更新的时候,匿名函数会被当做新的prop处理,
    让ref属性接受到新函数的时候,react内部会先清空ref,也就是会以null为回调参数先执行一次ref这个props,
    然后再以该组件的实列执行一次ref,所以使用匿名函数做ref的时候,有的时候取ref赋值后的属性会取到null

4. 遍历子节点的时候, 不要用index作为组件的key进行传入(当我门不传key值时,React会默认使用index作为key值,
    并且进行警告,如果你手动指定index作为key值,React会认为,你知道自己在干嘛。但是这其中存在潜在的危险性，
    并且可能显示错误的数据,为什么？
        因为key值是React用来判断DOM元素的唯一依据,详见[为什么不要使用index作为key值](https://www.jianshu.com/p/6d2518cc19bc)
    )


