/* 2. Write a JavaScript function to clone an array. 
Test Data :
console.log(array_Clone([1, 2, 4, 0])); 
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0] 
[1, 2, [4, 0]]

--==@ SOLUTION @==-- */

function printArray(variable) {
  for(var i=0; i<variable.length; i++){
    console.log("Value[" + i + "] = " +variable[i] );
  }
}

function array_Clone(variable){
  var variableLength = variable.length;
  console.log("Variable length is : " + variableLength);

  var newVariable = new Array(variableLength);

  for (i=0; i<variableLength; i++){
    newVariable[i] = variable[i];
  }

  console.log("Old Array is :" + printArray(variable));
  console.log("New Array is :" + printArray(newVariable));
}

array_Clone([1, 2, 4, 0]);
array_Clone([1, 2, [4, 0]]);
