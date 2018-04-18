/* 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 
Test Data : 
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));
Expected Output : 
-2 
[9, 0, -2] 
[7, 9, 0, -2]

--==@ SOLUTION @==-- */

function last(array, num){
  var arrayLength = array.length;
  var resultArray = new Array(num);

  // if no value is defined for num
  if(num === undefined){
    console.log("No value passed for num.");
    return array[arrayLength-1];
  }
  // if num is larger than array 
  else if(num>arrayLength || num<0){
    return array;
  }
  // if num is a legit value
  else{
    var startIndex = arrayLength-num;
    resultArray = array.slice(startIndex, arrayLength);
    return resultArray;
  }
}

// Test Data : 
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));