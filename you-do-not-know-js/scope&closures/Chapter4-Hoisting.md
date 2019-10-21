```
Function declarations that appear inside of normal blocks typically hoist to the enclosing scope, rather than being conditional as this code implies:

foo(); // "b"

var a = true;
if (a) {
   function foo() { console.log( "a" ); }
}
else {
   function foo() { console.log( "b" ); }
}

However, it's important to note that this behavior is not reliable and is subject to change in future versions of JavaScript, so it's probably best to avoid declaring functions in blocks.


现在的google浏览器 会显示引用错误 if语句中中的函数声明没有提示
```