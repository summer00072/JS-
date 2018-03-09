题目描述
移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组

方法1：push
function remove(arr, item) {
    var newArray = new Array();
    for (var i = 0; i < arr.length; i++){
        if (arr[i] != item){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

function remove(arr,item){
    var newArray = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i] == item)continue;
       newArray.push(arr[i]);
    }
    return newArray;
}

方法2：splice
function remove(arr, item) {
    var newArray = arr.slice(0);
    for (var i = 0; i < newArray.length; i++){
        if (newArray[i] === item){
            newArray.splice(i,1);
            i--;
        }
    }
    return newArray;
}

方法3：filter
function remove(arr, item) {
  return arr.filter(function(ele){
    return ele != item;
  })
}
