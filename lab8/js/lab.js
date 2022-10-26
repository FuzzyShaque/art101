/**
 * Author:    Kaden Sedmak-Locke, Jacob Penland
 * Created:   10/17/2022
 **/

//Variable declaration
var numArray = [2, 4, 6, 8, 10];
//Function
function anonFunction(x) {
    var result = x + 1;
    return result;
}
//console log results
console.log(anonFunction(2));
console.log(anonFunction(5));
console.log(numArray.map(anonFunction));
console.log(numArray.map(function(x){
    return x ** 0.5;
}));

//Display output
var outputEl = document.getElementById("output");
outputEl.innerHTML = "Original Array: "+ numArray + "</br> Added array: " + numArray.map(anonFunction)+ "</br> Square root array: "+ numArray.map(function(x){
    return x ** 0.5});
