var array = [2,4,1,5,7,10,44,8,66,9];

function quickSort(array, start, end){
  if(start < end){
    var pivot = partition(array, start, end);
    quickSort(array, start, pivot-1);
    quickSort(array, pivot+1, end);
    // console.log(pivot);
  }
}

function partition(array, start, end){
  var pivotValue = array[end];
  var partitionIndex = start;
  
  for(var i = start; i < end; i++){
    if (array[i] <= pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex ++
    }
  }
  swap(array, end, partitionIndex);
  return partitionIndex;
}

function swap(array, i, j){
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

quickSort(array,0, array.length-1);

console.log(array);