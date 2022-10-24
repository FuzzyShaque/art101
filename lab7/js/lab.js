/**
 * Author:    Kaden Sedmak-Locke, Jacob Penland
 * Created:   10/17/2022
 **/

//Function
function nameInput(userName){
  //userName input
  var userNameTwo= userName.replace(/\s/g, '');
  console.log("userName =", userNameTwo);
  //convert name into array
  var letterArray = userNameTwo.split('');
  console.log("letterArray =", letterArray);
  //sort the array alphabetically
  var sortArray = letterArray.sort((a,b) => b.localeCompare(a));
  //sort the array randomly
  var sortArrayTwo= sortArray.sort(() => Math.random() - 0.5);
  console.log("sortArray =", sortArrayTwo);
  //join the array back into a string
  var sortName = sortArray.join('');
  console.log("letterArray =", sortName);
  //return the sorted name
  return sortName;
}
var promptName= window.prompt("What is your name?: ");
//Output
document.writeln("Oh hey,I've fixed your name: ", nameInput(promptName),"</br>");
