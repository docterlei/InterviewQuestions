```
var a = { n : 1};  
var b = a;  
a.x = a = {n:  2};  

console.log(a.x);  
console.log(b.x);   

输出：undefined [object Object]


可以看成 a.x = a = {n:2}这句话的意思应该是a.x = {n:2}; a = {n:2}
```