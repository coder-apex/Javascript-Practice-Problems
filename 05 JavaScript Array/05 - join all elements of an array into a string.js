/* 5. Write a simple JavaScript program to join all elements of the following array into a string. 
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output : 
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"

--==@ SOLUTION @==-- */

var myColor = ["Red", "Green", "White", "Black"];

var myNewColor = myColor.join('+');
console.log(myNewColor);

var myNewColor = myColor.join(',');
console.log(myNewColor);