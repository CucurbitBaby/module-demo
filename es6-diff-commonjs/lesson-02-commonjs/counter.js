// 输出模块 counter.js
var counter = {
  value: 3
};

function incCounter() {
  counter.value++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};