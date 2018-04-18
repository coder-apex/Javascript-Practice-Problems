/* 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
Test Data : 
console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output : 
7
[] 
[7, 9, 0] 
[7, 9, 0, -2] 
[] 
--==@ SOLUTION @==-- */

function first(variable, num) {
  // create array of length num if num is valid else create empty array
  if (num > 0 && (variable.constructor == Array) && variable.length > 0) {
    var newArray = new Array(num);
  } else {
    var newArray = [];
  }

  // check if first variable is an array
  if (arguments[0].constructor == Array) {
    console.log("\n\n\n\nValue is Array. Program proceeds....\n====\n");

    // if num is greater than the length of the array, then length - var length
    if (num > variable.length)
      num = variable.length;

    // if no of elements needed is mentioned then print them
    if (num > 0) {
      console.log("The user has requested " + arguments[1] + " elements. Values are : ");
      for (var i = 0; i < arguments[1]; i++) {
        console.log(variable[i]);
        newArray[i] = variable[i];
      }
      return newArray;
    }
    // else return only the first element of the array
    else {
      console.log("No elements requested. First value of array is : " + variable[0]);
      newArray[0] = variable[0];
      return newArray;
    }

  } else {
    console.log("ERROR : First value is not an Array.");
    return newArray;
  }
}

console.log(first("String", 4));
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));