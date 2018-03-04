计算给定数组arr中所有元素的总和，数组的元素均为Number类型

常规做法：
运行时间：171ms
占用内存：14416k

function sum(arr) {
    var s = 0;
    for(var i = 0; i< arr.length; i++){
        s += arr[i];
    }
    return s;
}
