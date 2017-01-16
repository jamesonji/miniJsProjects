// Write merge sort algrithm

// We want to sort the array: [2,4,1,5,7,10,44,8,66]
var array = [2,4,1,5,7,10,44,8,66];

function mergeSort(array){
  var len = array.length;
  // Terminal case; if the length of the array is 1, eg.[1]
  // return the original array;
  if (len< 2){
    return array;
  }
  // find the mid point of the array;
  var mid = Math.floor(len/2);
  // divide the original array into two arrays using slice
  var left = array.slice(0, mid);
  var right = array.slice(mid);
  
  // merge the two arrays using the merge method.
  // Recursion: inside of the merge, keep calling the mergeSort function to 
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  var result = []; // temp array to save the result
  var li = 0; // starting index of the left array
  var ri = 0; // starting index of the right array
  
  // as long as no index moves to the end of the any of the array, do the while loop compare 
  while(li < left.length && ri < right.length ){ 
    // pick the smaller number and push to the array;
    if (left[li] < right[ri]){
      result.push(left[li++]);
    }
    else{
      result.push(right[ri++]);
    }
  }
  // once one of the array get to the end, contact the other part of the other array;
  return result.concat(left.slice(li)).concat(right.slice(ri));
}

// to see the result:
var sorted = mergeSort(array);
console.log(sorted);
