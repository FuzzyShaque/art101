// /**
//  * Author:    Kaden Sedmak-Locke, Jacob Penland
//  * Created:   10/17/2022
var finalstring=''
for (let i = 1; i <= 200; i++) {
  var outstring='';
  if(i%3==0){
    outstring+='Fizz';
  }
  if(i%5==0){
      outstring+='Buzz';
    }
  if(i%7==0){
    outstring+='Boom';
  }
  if (outstring.length>0){
      console.log(i+ '-'+outstring);
      finalstring+=i+'-'+outstring+"</br>";
  }
  else{
    console.log(i);
    finalstring+=i+"</br>";
  }
}
$('#output').html(finalstring);
