// 引入模块 main.js
var mod = require('./counter.js');

console.log(mod.counter.value); // 3
mod.incCounter();
console.log(mod.counter.value); // 4


// value 是会发生改变的。
// 不过也可以说这是 "值的拷贝"，只是对于引用类型而言，值指的其实是引用。

