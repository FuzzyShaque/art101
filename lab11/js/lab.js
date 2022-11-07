/**
 * Author:    Kaden Sedmak-Locke, Jacob Penland
 * Created:   10/17/2022
 **/
$('#challenges').append('<button id = "buttonOne">Click One</button>');
$('#problems').append('<button id = "buttonTwo">Click Two</button>');
$('#results').append('<button id = "buttonThree">Click Three</button>');

$('#buttonOne').click(function(){
  $('#challenges').toggleClass('special');
  $('#buttonThree').toggleClass('special3');
});

$('#buttonTwo').click(function(){
  $('#problems').toggleClass('special1');
});

$('#buttonThree').click(function(){
  $('#results').toggleClass('special2');
  $('#buttonOne').toggleClass('special2');
});
