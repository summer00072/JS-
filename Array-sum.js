计算给定数组arr中所有元素的总和，数组的元素均为Number类型

forEach：
运行时间：182ms
占用内存：14276k(感觉不准)

function sum(arr) {
    var s = 0;
    arr.forEach(function(val, idx, arr){
        s += val;
    });
    return s;
    
}
