All Questions can be found at : https://www.w3resource.com/javascript-exercises/

1. Write a JavaScript function to check whether an `input` is an array or not. 
Test Data :
console.log(is_array('w3resource')); 
console.log(is_array([1, 2, 4, 0]));
false
true

--==@ SOLUTION @==--
// check if argument passed is an array or object
// use variable.constructor to find out the type of the argument passed
function isArray(variable){
  if(variable.constructor == Array){
    console.log("\n\n\nVariable is " + variable);
    console.log("Value is an array - " + variable.constructor);
  }
  else if(variable.constructor == Object){
    console.log("\n\n\nVariable is " + variable);
    console.log("Value is an Object - " + variable.constructor);
  }
  else{
    console.log("\n\n\nValue is NOT an Array or an Object");
  }
}

var dog = {
  name : "Oreo",
  age : 15,
  breed : "Siberian Husky"
}

isArray("This is a string");
isArray([1, 50,150, "Hello", "World"]);
isArray(dog);


==================================================================================


2. Write a JavaScript function to clone an array. 
Test Data :
console.log(array_Clone([1, 2, 4, 0])); 
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0] 
[1, 2, [4, 0]]

--==@ SOLUTION @==--

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



==================================================================================



3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
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
--==@ SOLUTION @==--

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

==================================================================================


4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 
Test Data : 
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));
Expected Output : 
-2 
[9, 0, -2] 
[7, 9, 0, -2]

--==@ SOLUTION @==--

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


==================================================================================


5. Write a simple JavaScript program to join all elements of the following array into a string. 
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output : 
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"

--==@ SOLUTION @==--

var myColor = ["Red", "Green", "White", "Black"];

var myNewColor = myColor.join('+');
console.log(myNewColor);

var myNewColor = myColor.join(',');
console.log(myNewColor);


==================================================================================


6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. 

--==@ SOLUTION @==--

function insertDash(num) {
  var digits = ("" + num).split("");
  console.log(digits);

  var length = digits.length;
  var i = 0;
  var evenNumberCount = 0;

  for (i = 0; i < length; i++) {
    console.log("\n\nDigit" + "[" + i + "] : " + digits[i]);
    if (digits[i] % 2 == 0) {
      evenNumberCount++;
      console.log("Count increased to " + evenNumberCount);
    }
  }

  var dashedArrayLength = length + evenNumberCount - 1;
  var dashedArray = new Array(dashedArrayLength);
  var isFirst = false;
  var isNotEven = false;

  console.log("\n\n====\n\n");

  for (i = 0, j = 0; i < digits.length;) {
    // i keeps track of original array
    // j keeps track of new array

    console.log("\n\nLoop : " + i + "\n");

    // is character an even number?
    if (digits[i] == 0) {
      console.log("Value " + digits[i] + " is 0.");
      dashedArray[j] = digits[i];
      console.log("Digits : " + digits + "\n\tnew : " + dashedArray);
      i++;
      j++;
    } else if (digits[i] % 2 == 0) {
      console.log("Value " + digits[i] + " is even.");
      if (isFirst == false) {
        console.log("It is the first even number");
        isFirst = true;
      } else {
        isFirst = false;
      }
    }
    // if it is not even just copy the value
    else {
      console.log("Value " + digits[i] + " is NOT even.");
      dashedArray[j] = digits[i];
      console.log("Digits : " + digits + "\n\tnew : " + dashedArray);
      j++;
      i++;
      continue;
    }

    // if it is the first even number, put dash before
    if (isFirst == true) {
      // check if previous character is a '-'
      if (dashedArray[j-1] == '-') {
        console.log("Value dashedArray[j-1] : " + dashedArray[j-1]);
        dashedArray[j] = digits[i];
        console.log("Digits : " + digits + "\n\tnew : " + dashedArray);
        i++;
        j++;
        continue;
      } else {
        dashedArray[j] = '-';
        dashedArray[j + 1] = digits[i];
        console.log("isFirst == true\n\tdigits : " + digits + "\n\tnew : " + dashedArray);
        i++;
        j = j + 2;
      }
    }
    // if it is the second even number, put dash after
    else if (isFirst == false) {
      dashedArray[j] = digits[i];
      dashedArray[j + 1] = '-';
      console.log("isFirst == false\n\tdigits : " + digits + "\n\tnew : " + dashedArray);
      i++;
      j = j + 2;
    }


  }

}

insertDash(035725468);


==================================================================================


7. Write a JavaScript program to sort the items of an array. 
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8

--==@ SOLUTION @==--

function sortArray(array) {

  if(array.constructor == Array){
    // proceed with the program
    console.log("\n=====\nSUCCESS : Value passed is an Array. Program proceeds.");

    // using the sort function to sort the array
    array = array.sort();
    console.log("Sorted Array : " + array);

    return true;
  }
  else{
    console.log("\n=====\nERROR: The value passed is not an array.\nPlease re-run the program.");
    return false;
  }
}

var arr = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
sortArray(arr);
arr = 1;
sortArray(arr);



==================================================================================


8. Write a JavaScript program to find the most frequent item of an array. 
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) 

--==@ SOLUTION @==--

function findUnique(array) {
  console.log("Array passed is : " + array);

  var largestElement = "";
  var largestElementCount = 0;

  var currentElement = "";
  var currentElementCount = 0;

  var arrayLength = array.length;

  var i, j;

  for (i = 0; i < arrayLength; i++) {
    // i is used to access each element of array
    // j is used to compare with every other element of array
    currentElement = array[i];
    currentElementCount = 1;

    console.log("\n\nLoop " + i + "\n\t***** CurrentElement = " + array[i] + " Count = " + currentElementCount + " *****");

    for (j = 0; j < arrayLength; j++) {
      //console.log("Comparing with " + array[j]);
      if (currentElement == array[j]) {
        currentElementCount++;
        console.log("\tMatch found! Count = " + currentElementCount);
      }
    }

    console.log("\n\nLOOP " + i + " RESULT\n\t***** Element = " + array[i] + " Count = " + currentElementCount + " *****");
      
    console.log("\tLargest element : " + largestElement
  + "\tCount : " + largestElementCount);

    if (currentElementCount > largestElementCount) {
      console.log("Current Element has a larger count than the previous largest element");
      console.log("\tPrevious largest element : " + largestElement +
        "\tCount : " + largestElementCount);
      largestElement = currentElement;
      largestElementCount = currentElementCount;
      
      console.log("\tUpdated largest element : " + largestElement
    + "\tCount : " + largestElementCount);
    }
  }

  var result = String(largestElement + " ( " + largestElementCount + " times )");
  return result;

}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3, 3];
findUnique(arr1);

==================================================================================


9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. 

--==@ SOLUTION @==--

function swapCase(sentence){
  console.log("Original Sentence : " + sentence);

  var sentenceArray = sentence.split("");
  console.log("Sentence Array : " + sentenceArray);

  // variables to save new string and track position
  var sentenceLength = sentence.length;
  var swapSentence = [];

  for(var i=0; i<sentenceLength; i++){
    console.log("\n\nLoop " + i + " : ");
    if(sentence[i] == sentence[i].toUpperCase()){
      console.log("Character " + sentence[i] + " is upperCase");
      // change upper lower case character
      swapSentence.push(sentence[i].toLowerCase());
      console.log(swapSentence);
    }
    else{
      console.log("Character " + sentence[i] + " is lowerCase");
      // change upper lower case character
      swapSentence.push(sentence[i].toUpperCase());
      console.log(swapSentence);
    }
  }

  // convert the array of characters into a string
  swapSentence = swapSentence.join("");
  console.log("Swapper sentence is " + swapSentence);
}

swapCase('The Quick 5 Brown Fox');


==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================





==================================================================================


