function newSec(){
  console.log("\n==========\n\n");
}

var item = 0;

function op(){
  console.log(item);
}

console.log("Script Loaded!");

/* 
WORKING WITH THE DOM
==============================
document.getElementById();
document.getElementsByClassName();
document.getElementsByName();
document.getElementsByTagName();
document.querySelector();
document.querySelectorAll(); 
*/

/* 
DOUBTS
==================
1. What is the difference between HTML Collection and NodeList? they are obtained as outputs 
2. Can we not treat the NodeList as an object?
3. What is the difference in application of the two?
4. Can we chain selectors like in line 73 - can we do 'h1 + ul + li'
*/

// getElementById
newSec();
console.log("Get element by ID:\n\n ID = highlight");
item = document.getElementById("highlight");
op();

// getElementsByClassname()
newSec();
console.log("Get elements by ClassName:\n\n Class = bolded");
item = document.getElementsByClassName("bolded");
op();

// getElementsByTagName
newSec();
console.log("Get elements by TagName: \n\n Tag = li");
item = document.getElementsByTagName('li');
op();
// another example selecting h1 tag
console.log("Get elements by TagName: \n\n Tag = h1");
item = document.getElementsByTagName('h1');
op();

// query selector
newSec();
// query selector by ID
console.log("Query selector by ID: \n\n ID = #highlight");
item = document.querySelector('#highlight');
op();
// query selector by tag
console.log("Query selector by Tag: \n\n Tag = li");
item = document.querySelector('li');
op();
// query selector by Class
console.log("Query selector by Class: \n\n Class = .bolded");
item = document.querySelector('.bolded');
op();
// query selector all can also be used to select sub tags
console.log("Query selector ul>li and tag lowlight: \n\n Selector = ul li #lowlight");
item = document.querySelector('ul li#lowlight');
op();
// query selector can be used to select tags by order
console.log("Query selector first ul after h1: \n\n Selector = h1 + ul");
item = document.querySelector('h1 + ul');
op();
// another example
console.log("Query selector first ul #special after h1: \n\n Selector = h1 + ul + #special");
item = document.querySelector('h1 + ul + #special');
op();
/*
Please note that the query selector only returns one object
That is, it returns the first match only 
To get all matches, we use QuerySelectorAll
*/

// query selector ALL
newSec();
console.log("Query selector All by Class: \n\n Class = .bolded");
item = document.querySelectorAll('.bolded');
op();

// query select as an array
newSec();
console.log("Use getElement output as an array: \n\n Statement = document.getElementsByClassName('bolded')[0]");
item = document.getElementsByClassName('bolded')[0];
op();

/* 
DOM MANIPULATION
==================
1. Select the element
var item = document.getElementById('highlight');

2. Modify the element
item.style.color = "blue";
item.style.border = "10px solid red";
- style should be given as a string in double quotes
item.style.fontSize = "50px";

Recommemded way of programming
==================
1. Create CSS Class with properties
.some-class{
  color: purple;
  fontSize: 3em;
}

2. Select element and add/remove the CSS class

var item = document.querySelector('h1');

item.classList.add("some-class");
item.classList.remove("some-class");
item.classList.toggle("some-class");
*/

newSec();
console.log("Modifying CSS Style Properties: ");
item = document.getElementById('highlight');

item.style.color = "blue";
item.style.border = "10px solid red";
item.style.fontSize = "50px";
item.style.background = "yellow";
item.style.marginTop = "200px";

item.style = "none";
op();

newSec();
console.log("Modifying CSS Classes - Add/Remove/Toggle: ");
item = document.querySelector("p");
item.classList.add("big");
item.classList.toggle("big");
op();

/* 
Manipulating Text of HTML elements
==================
1. Select element 
var item = document.querySelector("p");

2. Retrieve content
item.textContent; // displays the content of the tag
- it retrieves only the content of the tag and not inner tags

3. Modify the content
item.textContent = "This is the modified content";
- Modifies the text to new text without any tags

item.innerHTML = "This is the <u>modified</u> content";
- innerHTML maintains the tags
*/

newSec();
console.log("Manipulating the text content of HTML Element:");

item = document.querySelector("p");

item.textContent;

item.textContent = "This is the <u>modified</u> content";
item.textContent = "This is the modified content";

item.innerHTML;
item.innerHTML = "This is the <u>modified</u> content";

/* 
MODIFYING HTML ATTRIBUTES
====================
1. Get element
- item = document.querySelector("a");
- item = document.querySelector("li");

2. Fetch the attribute
- item.getAttribute("href");
- item.getAttribute("id");

3. Set the attribute
- item.setAttribute("href", "www.changed.com");
- item.setAttribute("id", "highlighted");

*/

newSec();
console.log("Modifying attributes of HTML Elements:");

item = document.querySelector("a");

item.getAttribute("href");
console.log("Original attribute is: " + item.getAttribute("href"));

item.setAttribute("href", "www.changed.com");
console.log("Modified attribute is: " + item.getAttribute("href"));

item = document.querySelector("li");

item.getAttribute("id");
console.log("Original id is: " + item.getAttribute("id"));

item.setAttribute("id", "highlighted");
console.log("Modified id is: " + item.getAttribute("id"));
op();









