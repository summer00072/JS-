题目描述
在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组

function prepend(arr, item) {
    var newArr = arr.slice(0);
    newArr.unshift(item);
    return newArr;
}
