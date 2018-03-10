题目描述
统计数组 arr 中值等于 item 的元素出现的次数

function count(arr, item) {
    var num = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
            num++;
        }
    }
    return num;
}
