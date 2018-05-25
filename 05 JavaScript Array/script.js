// 16. Find the leap years in a given range of years.

var startYear;
var endYear;

var problem = '<h3>Problem Statement:</h3><p><strong>16. Find the leap years in a given range of years.</strong></p>'; 

function problemStatement() {

  document.getElementById("problem-statement").innerHTML = problem;
}

function getLeapRange() {

  startYear = prompt("Please enter start year", "1900");
  
  document.getElementById("start-year").innerHTML = 'Start Year : ' + startYear;

  endYear = prompt("Please enter end year", "2000");

  document.getElementById("end-year").innerHTML = 'End Year : ' + endYear;

  printLeap(startYear, endYear);

}

function printLeap(start, end) {
  console.log("In printLeap");
  document.getElementById("demo").innerHTML = "In printLeap()";
}


function findLeapInRange() {

  problemStatement();

  setTimeout(function(){
    getLeapRange();
  }, 5000);



  

}

findLeapInRange();