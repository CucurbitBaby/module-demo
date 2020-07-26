// main.js
define(function(require, exports, module) {
    var addModule = require('./add');
    console.log(addModule.add(1, 1))

    var squareModule = require('./square');
    console.log(squareModule.square(3))
});


// 加载了 add 模块
// 2
// 加载了 square 模块
// 加载了 multiply 模块
// 9


// AMD 是将需要使用的模块先加载完再执行代码，
// 而 CMD 是在 require 的时候才去加载模块文件，加载完再接着执行。

// 这个涉及到一个js按需加载的问题哦  去瞅瞅


/*

require.js和sea.js都是 异步加载<script> 默认defer属性(渲染完在执行)
    通过script标签设置async(异步加载完成，立即执行脚本  ..无序执行)，
    defer( 页面解析完毕之后，按顺序执行)  属性

    首先同步(Sync)加载 和 异步(Async)加载  遇到script不阻塞浏览器解析HTML
*/