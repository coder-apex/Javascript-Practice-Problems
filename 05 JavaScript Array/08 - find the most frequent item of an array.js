/* 8. Write a JavaScript program to find the most frequent item of an array. 
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) 

--==@ SOLUTION @==-- */

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
