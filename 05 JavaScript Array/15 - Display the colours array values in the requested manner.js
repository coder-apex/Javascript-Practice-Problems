// 15. We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.

function displayResult(color, o){
  for(var i=0, position=1; i<color.length; i++){
    if(i<3){
      console.log(position + o[position] + " choice is " + color[i]);
      position++;   
    }
    else{
      console.log(position + o[0] + " choice is " + color[i]);
      position++;   
    }
  }

  return true;
}

color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"];

displayResult(color, o);




