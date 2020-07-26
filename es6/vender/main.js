// main.js
import {add} from './add.js';
console.log(add(1, 1))

import {square} from './square.js';
console.log(square(3));


/*

加载了 add 模块
加载了 multiply 模块
加载了 square 模块
2
9

跟 require.js 的执行结果是一致的，也就是将需要使用的模块先加载完再执行代码。

*/