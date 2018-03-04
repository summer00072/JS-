计算给定数组arr中所有元素的总和，数组的元素均为Number类型

eval：
运行时间：170ms
占用内存：14416k(感觉不准)

function sum(arr) {
  return eval(arr.join("+"));
}
