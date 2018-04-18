/* 7. Write a JavaScript program to sort the items of an array. 
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8

--==@ SOLUTION @==-- */

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