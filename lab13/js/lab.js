// /**
//  * Author:    Kaden Sedmak-Locke, Jacob Penland
//  * Created:   10/17/2022



//Function to determine and output the factor-phrase relation
function fizzBuzz(max, numInput, txtInput) {
  //Empty Final String Declaration
  var finalstring=''
  //for loop that iterates within the inputed range
  for (var num = 1; num <= max; num++) {
    var outstring='';
    //for loop that iterates through each position of the matching arrays
    for (var input in txtInput){
      if (num % numInput[input] == 0) {
        console.log("Debugger test one");//Prexisting debugging console.log statement we used while debugging lab 13
        debugger;//debugger stop statement
        outstring += txtInput[input];
      }
    }
    //conditional for checking if there is a factor in the first place and appending the combination
    if (outstring.length>0){
        console.log(num+ '-'+outstring);
        debugger;//debugger stop statement
        finalstring+=num+'-'+outstring+"!</br>";
    }
    //otherwise just output the raw number
    else{
      console.log(num);
      finalstring+=num+"</br>";
    }
}
//appending the result of the function iteration
$('#output').html(finalstring);
}
//button event listener, that initializes the 2 arrays of field inputs
$('#button').click(function() {

  var numArr=[$('#num0').val(),$('#num1').val(),$('#num2').val(),$('#num3').val()];

  var inputArr=[$('#input1').val(),$('#input2').val(),$('#input3').val(),$('#input4').val()];

  fizzBuzz($('#input0').val(),numArr, inputArr);
});
