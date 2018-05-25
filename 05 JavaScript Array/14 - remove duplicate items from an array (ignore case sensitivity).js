// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

var array = [3, 6, 9, 3, "Hello", "hello", "heLLo"];
// Expected output : 3, 6, 9, "hello"

function convertToLower(array) {
  console.log("\n\n==== In convertToLower Function ====\n\n");
  console.log("*** Convert all array elements to Lower Case ***");

  var arr = array;
  console.log("Original Array : " + arr);
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toString().toLowerCase();
  }

  console.log("Converted Array : " + arr);
  console.log("\n==== Exit convertToLower Function ====\n\n");
  return arr;
}

function dropDuplicateEntries(array) {
  console.log("\n\n==== In dropDuplicateEntries Function ====\n\n");
  console.log("*** Drop all duplicate entries in an array ***");

  var arr = [];
  console.log("Original Array : " + arr);

  // copy element from array to arr only if it does not exist in arr already
  for(i=0; i<array.length; i++){
    if(arr.indexOf(array[i])<0){
      arr.push(array[i]);
      console.log(array[i] + " does not exist in arr. Copied!");
      console.log(arr);
    }
  }

  console.log("Converted Array : " + arr);
  console.log("\n==== Exit dropDuplicateEntries Function ====\n\n");
  return arr;
}

function dropDuplicates(array) {
  console.log("\n\n=== In dropDuplicates Function.");

  // make all the characters lower case
  var arrayLower = convertToLower(array);

  console.log("Original Array : " + array);
  console.log("Modified Array : " + arrayLower);

  // drop all duplicate entries from array
  var result = dropDuplicateEntries(arrayLower);

  console.log("RESULT : " + result);
}

dropDuplicates(array);