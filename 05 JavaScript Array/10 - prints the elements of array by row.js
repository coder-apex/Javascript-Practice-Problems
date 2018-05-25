10. Write a JavaScript program which prints the elements of the following array.
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output : 
"row 0" 
" 1" 
" 2" 
" 1"
" 24"
"row 1" 
------
------

--==@ SOLUTION @==--

function printArrayRows(array) {

  console.log("Original Array is :\n");
  console.log(array);

  // variables used to track length, position etc..
  var i = 0;
  var j = 0;

  // function to get the required output
  function getResult() {
    for (i=0; i<array.length; i++) {
      // first for loop to keep track of first level
      console.log("row " + i);

      for(j=0; j<array[i].length; j++){
        console.log(array[i][j]);
      }
    }
  }

  // save the output as a string
  var result = toString(getResult());

  // Print the result
  console.log(result);
}

var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]
];
printArrayRows(a);