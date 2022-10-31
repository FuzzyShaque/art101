/**
 * Author:    Kaden Sedmak-Locke, Jacob Penland
 * Created:   10/17/2022
 **/

//Variables
var outputEl = document.getElementById("output");
var new1El= document.createElement("p");
var new2El= document.createElement("p");
//Setting Values
new1El.innerHTML="Element one is snazzy";
new2El.innerHTML="Element two is cool";
//appending to output divs
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
