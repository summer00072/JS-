计算给定数组arr中所有元素的总和，数组的元素均为Number类型

函数式编程reduce：
运行时间：271ms
占用内存：60660k(感觉不准)

function sum(arr) {
   return arr.reduce(function(prev, curr, idx, arr){
        return prev +curr;
   });
}
