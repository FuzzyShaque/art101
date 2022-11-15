// /**
//  * Author:    Kaden Sedmak-Locke, Jacob Penland
//  * Created:   10/17/2022
var finalstring=''
function fizzBuzz(max, numInput, txtInput) {
  for (var num = 1; num <= max; num++) {
    var outstring='';
    for (var input in txtInput){
      if (num % numInput[input] == 0) {
        outstring += txtInput[input];
      }
    }
    if (outstring.length>0){
        console.log(num+ '-'+outstring);
        finalstring+=num+'-'+outstring+"!</br>";
    }
    else{
      console.log(num);
      finalstring+=num+"</br>";
    }
}
}

$('#button').click(function() {

  var numArr=[$('#num0').val(),$('#num1').val(),$('#num2').val(),$('#num3').val()];

  var inputArr=[$('#input1').val(),$('#input2').val(),$('#input3').val(),$('#input4').val()];

  fizzBuzz($('#input0').val(),numArr, inputArr);
  $('#output').html(finalstring);
});
