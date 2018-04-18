// 9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. 


function swapCase(sentence){
  console.log("Original Sentence : " + sentence);

  var sentenceArray = sentence.split("");
  console.log("Sentence Array : " + sentenceArray);

  // variables to save new string and track position
  var sentenceLength = sentence.length;
  var swapSentence = [];

  for(var i=0; i<sentenceLength; i++){
    console.log("\n\nLoop " + i + " : ");
    if(sentence[i] == sentence[i].toUpperCase()){
      console.log("Character " + sentence[i] + " is upperCase");
      // change upper lower case character
      swapSentence.push(sentence[i].toLowerCase());
      console.log(swapSentence);
    }
    else{
      console.log("Character " + sentence[i] + " is lowerCase");
      // change upper lower case character
      swapSentence.push(sentence[i].toUpperCase());
      console.log(swapSentence);
    }
  }

  // convert the array of characters into a string
  swapSentence = swapSentence.join("");
  console.log("Swapper sentence is " + swapSentence);
}

swapCase('The Quick 5 Brown Fox');