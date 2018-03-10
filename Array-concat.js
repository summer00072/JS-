题目描述
合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组

function concat(arr1, arr2) {
    var newArr = arr1.slice(0);
    [].push.apply(newArr,arr2);
    return newArr;
}
