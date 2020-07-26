// main.js
var add = require('./add.js');
console.log(add.add(1, 1))

var square = require('./square.js');
console.log(square.square(3));




/*

加载了 add 模块
2
加载了 square 模块
加载了 multiply 模块
9
跟 sea.js 的执行结果一致，也是在 require 的时候才去加载模块文件，加载完再接着执行。

*/