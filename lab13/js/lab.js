// /**
//  * Author:    Kaden Sedmak-Locke, Jacob Penland
//  * Created:   10/17/2022
var finalstring=''
var factor1 = 3;
var factor2 = 4;
var factor3 = 5;
var factor4 = 7;
for (let i = 1; i <= 200; i++) {
  var outstring='';
  if(i%factor1==0){
    outstring+='Fizz';
  }
  if(i%factor2==0){
      outstring+='Buzz';
    }
  if(i%factor3==0){
    outstring+='Boom';
  }
  if(i%factor4==0){
    outstring+='Bang!';
  }
  if (outstring.length>0){
      console.log(i+ '-'+outstring);
      finalstring+=i+'-'+outstring+"!</br>";
  }
  else{
    console.log(i);
    finalstring+=i+"</br>";
  }
}
$('#output').html(finalstring);
