function newBreak() {
  console.log("\n****** New Snippet ******");
}
  
// convert passed value to a string literal
var str = 394578;
var string = String(str);
console.log("Original string : " + string);

newBreak();
// convert to lower case
console.log("*** Convert string to Lower Case ***");
str = "Abc DAS lhbje BW W";
console.log("Original string : " + str);
str = str.toLowerCase();
console.log("Modified string : " + str);

newBreak();

// remove the empty spaces from a string
string = string.replace(/\s/g, '');
console.log("Removing the spaces gives : " + string)
// \s (space), \r (the carriage return)
// \n (newline), \t (tab), and \f (the form feed)

newBreak();

// remove all special characters from the string
console.log("REMOVE SPECIAL CHARACTERD FROM STRING");
var removeSpecialChars = "abc's test#s";
console.log("Original string : " + removeSpecialChars);
removeSpecialChars =  removeSpecialChars.replace(/[^a-zA-Z ]/g, "");
console.log("Modified string : " + removeSpecialChars);

newBreak();

// check what is the type of variable passed in as the argument
function variable_type(variable) {
  console.log(variable.constructor);
}
var dog = {
  name : "Oreo",
  age : 15,
  breed : "Husky"
};
variable_type("Value is a string");
variable_type([1, 2, 50, 75, 100]);
variable_type(50);
variable_type(dog);

newBreak();

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

newBreak();

// split digits of a number to array
function numberToArray(num) {
  var numberArray = ("" + num).split("");
  console.log(numberArray);
}

numberToArray(15635);

newBreak();

// check if a character is upper or lower case
var character = '5';
if (character == character.toUpperCase()) {
 alert ('upper case true');
}
if (character == character.toLowerCase()){
 alert ('lower case true');
}

newBreak();

// convert array to string
var array = [1,"d",7,"6"];

var arrayToString = array.join("");

console.log(arrayToString);