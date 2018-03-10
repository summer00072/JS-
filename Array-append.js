题目描述
在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组

方法1：slice + newArray.length
function append(arr, item) {
    var newArray = arr.slice(0);
    newArray[newArray.length] = item;
    return newArray;
}

方法2：slice + push
function append(arr, item) {
    var newArray = arr.slice(0);
    newArray.push(item);
    return newArray;
}

方法3：普通迭代拷贝
function append(arr, item) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++){
    newArray.push(arr[i]);
  }
  newArray.push(item);
}

方法4:concat---合并两个数组,返回新的数组
functuin append(arr, item) {
  return arr.concat(item);
}

方法5：unshift---在数组头部添加元素
function append(arr, item) {
  var newArray = [item];
  [].unshift.apply(newArray,arr); //不是很懂为啥不能newArray.unshift（arr）
  return newArray;
}
