// 引入模块 main.js
var mod = require('./counter');

console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3

// node main.js
// counter.js 模块加载以后，它的内部变化就影响不到输出的 mod.counter 了。
// 这是因为 mod.counter 是一个原始类型的值，会被缓存。
