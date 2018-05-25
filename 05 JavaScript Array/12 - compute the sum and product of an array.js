// 12. Write a JavaScript program to compute the sum and product of an array of integers.

function sumArray(array) {
  console.log("\n====\nIn sumArray Function");
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log("Array Sum = " + sum);
}

function productArray(array) {
  console.log("\n====\nIn productArray Function");
  var product = 1;

  for (i = 0; i < array.length; i++) {
    product *= array[i];
  }
  console.log("Array Prod = " + product);
}

function sumAndProduct(array) {

  console.log("\n====\nIn sumAndProduct Function");
  console.log("Array elements are : " + array);

  sumArray(array);

  productArray(array);

}

var array = [7, 4, 8, 3, 8];
sumAndProduct(array);