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
  var descript = ["Gryffindor house is where you would find the pluckiest and most daring students (there's a reason the house symbol is the brave lion). The house colours are scarlet and gold, the common room lies up in Gryffindor Tower and the Head of House is Professor Minerva McGonagall. (https://www.wizardingworld.com/features/hogwarts-house-meanings)", "Ravenclaws possess the traits of cleverness, wisdom, wit, intellectual ability and creativity. According to Slytherin prefect Gemma Farley, Ravenclaws are so competitive when it comes to academic success that they are known to back stab each other, and likely other students, in order to get top marks. (https://pottermore.fandom.com/wiki/Ravenclaw#:~:text=Ravenclaws%20possess%20the%20traits%20of,order%20to%20get%20top%20marks.)", "Each house has a set of traits and characteristics associated with it, and those in Slytherin are known for being ambitious, cunning, and resourceful. Slytherins are also sometimes regarded as being evil thanks to the fact that many of the most sinister witches and wizards have been associated with this house. (https://pottermore.fandom.com/wiki/Slytherin)","Hufflepuff was one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was the medieval witch Helga Hufflepuff. Hufflepuff was the most inclusive among the four houses, valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its members. (https://harrypotter.fandom.com/wiki/Hufflepuff)"]
  $('#output').append("The Sorting Hat has sorted you into " + houses[house] + "<br>" + "<p id = descript></p>");
  $('#descript').append(descript[house]);
});
