/* 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. 

--==@ SOLUTION @==-- */

function insertDash(num) {
  var digits = ("" + num).split("");
  console.log(digits);

  var length = digits.length;
  var i = 0;
  var evenNumberCount = 0;

  for (i = 0; i < length; i++) {
    console.log("\n\nDigit" + "[" + i + "] : " + digits[i]);
    if (digits[i] % 2 == 0) {
      evenNumberCount++;
      console.log("Count increased to " + evenNumberCount);
    }
  }

  var dashedArrayLength = length + evenNumberCount - 1;
  var dashedArray = new Array(dashedArrayLength);
  var isFirst = false;
  var isNotEven = false;

  console.log("\n\n====\n\n");

  for (i = 0, j = 0; i < digits.length;) {
    // i keeps track of original array
    // j keeps track of new array

    console.log("\n\nLoop : " + i + "\n");

    // is character an even number?
    if (digits[i] == 0) {
      console.log("Value " + digits[i] + " is 0.");
      dashedArray[j] = digits[i];
      console.log("Digits : " + digits + "\n\tnew : " + dashedArray);
      i++;
      j++;
    } else if (digits[i] % 2 == 0) {
      console.log("Value " + digits[i] + " is even.");
      if (isFirst == false) {
        console.log("It is the first even number");
        isFirst = true;
      } else {
        isFirst = false;
      }
    }
    // if it is not even just copy the value
    else {
      console.log("Value " + digits[i] + " is NOT even.");
      dashedArray[j] = digits[i];
      console.log("Digits : " + digits + "\n\tnew : " + dashedArray);
      j++;
      i++;
      continue;
    }

    // if it is the first even number, put dash before
    if (isFirst == true) {
      // check if previous character is a '-'
      if (dashedArray[j-1] == '-') {
        console.log("Value dashedArray[j-1] : " + dashedArray[j-1]);
        dashedArray[j] = digits[i];
        console.log("Digits : " + digits + "\n\tnew : " + dashedArray);
        i++;
        j++;
        continue;
      } else {
        dashedArray[j] = '-';
        dashedArray[j + 1] = digits[i];
        console.log("isFirst == true\n\tdigits : " + digits + "\n\tnew : " + dashedArray);
        i++;
        j = j + 2;
      }
    }
    // if it is the second even number, put dash after
    else if (isFirst == false) {
      dashedArray[j] = digits[i];
      dashedArray[j + 1] = '-';
      console.log("isFirst == false\n\tdigits : " + digits + "\n\tnew : " + dashedArray);
      i++;
      j = j + 2;
    }
  }
}

insertDash(035725468);