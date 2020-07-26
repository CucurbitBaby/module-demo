// main.js
import { counter, incCounter } from './counter.js';
console.log(counter); // 3
incCounter();
console.log(counter); // 4

/*

"use strict";

var _counter = require("./counter");

console.log(_counter.counter); // 3

(0, _counter.incCounter)();
console.log(_counter.counter); // 4

*/



/*
// main.js
import { counter, incCounter } from './counter';
console.log(counter); // 3
incCounter();
console.log(counter); // 4
*/


/*
ES6 模块的运行机制与 CommonJS 不一样。
JS 引擎对脚本静态分析的时候，遇到模块加载命令 import，就会生成一个只读引用。

等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。
换句话说，ES6 的 import 有点像 Unix 系统的“符号连接”，原始值变了，import 加载的值也会跟着变。

因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。


参考文章：https://github.com/mqyqingfeng/Blog/issues/108

*/