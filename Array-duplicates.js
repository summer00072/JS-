题目描述
找出数组 arr 中重复出现过的元素

方法1：每个元素和其后所有元素比较
function duplicates(arr) {
    var newArr = [];
    
    for (var i = 0; i <arr.length; i++) {
        for (var j = i+1; j <arr.length; j++) {
            if (arr[j] == arr[i]) {
                if (newArr.indexOf(arr[i]) == -1) {
                    newArr.push(arr[i]);
                }
            }
        }
    }
    return newArr;
}

方法2：位置查找，首尾同时查相同值，位置不同，则重复
function duplicates(arr) {
  var result = [];
  arr.forEach(function(slem){
    if (arr.indexOf(elem) != arr.lastIndexOf(elem) && result.indexOf(elem) == -1) {
      result.push(elem);
    }
  })
}

方法3：:先排序再判断，sort函数使用需配合比较函数，此处未添加
function duplicates(arr) {
    var new_arr = arr.sort();//先把arr排序
    var res = [] ;//目标容器
    for( var i = 0 ; i < new_arr.length ; i++){
        if(new_arr[i] == new_arr[i+1] && new_arr[i] !=new_arr[i-1]){//判断是否重复,是否已经放入容器
            res.push(new_arr[i]);
        }
    }
return res;
}

