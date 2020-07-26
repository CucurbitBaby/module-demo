require([ './square', './add'], function(squareModule, addModule) {
    
    console.log(addModule.add(1, 1))
    console.log(squareModule.square(3))
});


// https://github.com/amdjs/amdjs-api/wiki/AMD-(中文版)


  
/*

require([ './square', './add'], function(squareModule, addModule) {
    
    console.log(addModule.add(1, 1))
    console.log(squareModule.square(3))
});
// 'square.js模块 首行输出'  ***  
// 加载了 add 模块                  这个输出是直接在add.js模块里输出的
// 加载了 multiply 模块             这个输出是直接在multiply.js模块里输出的
// 加载了 square 模块               成功引入multiply 模块后的cb输出      
// 2
// 9

所以这样子的输出和上面的一样的

*/
