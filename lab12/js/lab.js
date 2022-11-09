// /**
//  * Author:    Kaden Sedmak-Locke, Jacob Penland
//  * Created:   10/17/2022


function sortingHat(str){
  var len=str.length;
  var mod= len%4;
  return mod;
}

$('#button').click(function(){
  var house=sortingHat($('#input').val());
  var houses = ["Gryffindor", "Ravenclaw", "Slytherin","Hufflepuff"];
  var descript = ["Test description", "Raven Claw Descript", "Slytherin","Hufflepuff"]
  $('#output').append("The Sorting Hat has sorted you into " + houses[house] + "<br>" + "<p id = descript></p>");
  $('#descript').append(descript[house]);
});
