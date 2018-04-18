/* 1. Write a JavaScript function to check whether an `input` is an array or not. 
Test Data :
console.log(is_array('w3resource')); 
console.log(is_array([1, 2, 4, 0]));
false
true

--==@ SOLUTION @==-- */

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
