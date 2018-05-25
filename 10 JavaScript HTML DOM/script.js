// 2. Write a JavaScript function to get the values of First and Last name of the following form.

var inputs;
var input;
var fName;
var lName;
var i;


function getVal() {
  inputs = document.getElementsByTagName("input");

  for (i = 0; i < inputs.length; i++) {

    input = inputs[i];
    console.log("\n====\nLoop " + (i + 1));
    console.log(input);

    if (input.getAttribute("name") == "fname") {
      fName = input.getAttribute("value");
    }

    if (input.getAttribute("name") == "lname") {
      lName = input.getAttribute("value");
    }

  }

  console.log(inputs);

  console.log(fName);
  console.log(lName);
}

getVal();

function op(val){
console.log(val);
}

let str = "Hello";
op(str);
let str2 = 'Single quotes are ok too';
op(str2);
let phrase = `can embed ${str}`;
op(phrase);