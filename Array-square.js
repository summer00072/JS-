题目描述
为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组

方法1：普通迭代
function square(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * arr[i]);
    }
    return newArr;
}

方法2：forEach迭代
function square(arr) {
    var newArr = [];
    arr.forEach(function(e){
      newArr.push(e * e);
    });
    return newArr;
}

方法3：map
function square(arr) {
  return arr.map(function (item,idex,arr){
    item * item;
  });
}
