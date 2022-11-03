/**
 * Author:    Kaden Sedmak-Locke, Jacob Penland
 * Created:   10/17/2022
 **/

//Variables

// var nameField = document.getElementById("user-name").value;
// console.log(nameField)
// var nameButton = document.getElementById("Submit");
// nameButton.addEventListener('button', () => {
//     nameInput(nameField);
// });

function nameInput(){
  //userName input
  var userName= document.getElementById('user-name').value;
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
  document.getElementById("output").innerHTML = 'Sorted name is: ' + sortName;
}
