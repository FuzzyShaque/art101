/**
 * Author:    Kaden Sedmak-Locke, Jacob Penland
 * Created:   10/17/2022
 **/

//Variables
var outputEl = document.getElementById("output");
var new1El= document.createElement("p");
var new2El= document.createElement("p");
var cooker = document.createTextNode("Text Node instead of  element")
var newPreEl= document.createElement("p");
var headboi = document.head.tagName;
//Setting Values
new1El.innerHTML="Element one is snazzy";
new2El.innerHTML="Element two is cool";
newPreEl.innerHTML = "Element zero is quirky";
//appending to output divs
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
outputEl.appendChild(cooker);
outputEl.prepend(newPreEl);
//styling
newPreEl.style.fontSize="40px";
//console log
console.log(headboi);
