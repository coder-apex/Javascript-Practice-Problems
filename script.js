// 16. Find the leap years in a given range of years.

function printLeap(start, end){
  console.log("In printLeap");
  document.getElementById("result").innerHTML = "In printLeap()";
}

function findLeapInRange(){

  var startYear = prompt("Please enter start year", "1900");
  var endYear = prompt("Please enter end year", "2000");

  printLeap(startYear, endYear);

}