// /**
//  * Author:    Kaden Sedmak-Locke, Jacob Penland
//  * Created:   11/28/2022

// Using the core $.ajax() method
function comicSwap(){
  var maxComic;
  //Find the maximum comic url you can go to
  $.ajax({

      // Our sample url to make request
      url:
          'https://xkcd.com/info.0.json',

      // Type of Request
      type: "GET",
      async: false,
      dataType : "json",

      // request is ok
      success: function (data) {
          var comicObj = data;
          maxComic= comicObj['num'];
      },

      // Error handling
      error: function (error) {
          console.log(`Error ${error}`);
      }
  });

  //Default comic display call that also gets the current comic
  var current;
  $.ajax({

      // Our sample url to make request
      url:
          'https://xkcd.com/614/info.0.json',

      // Type of Request
      type: "GET",
      async: false,
      dataType : "json",
      // request is ok
      success: function (data) {
          var comicObj = data;
          current= comicObj['num'];
          var imgsrc= comicObj['img'];
          var imgalt= comicObj['alt'];
          $('#output').html("<h1 id = title1 /> <img class = comicimage img src="+imgsrc+" alt=" + imgalt +">");
          $('#title1').html(comicObj['title']);

      },

      // Error handling
      error: function (error) {
          console.log(`Error ${error}`);
      }

  });
  return [current,maxComic];
}
//function to change the output html to the next comic using the current one depending on button press
function changeComic(currentComic){
  $.ajax({

      // Our sample url to make request
      url:
          'https://xkcd.com/'+ currentComic+'/info.0.json',

      // Type of Request
      type: "GET",
      async: false,
      dataType : "json",
      // request is ok
      success: function (data) {
          var comicObj = data;
          current= comicObj['num'];
          var imgsrc= comicObj['img'];
          var imgalt= comicObj['alt'];
          $('#output').html("<h1 id = title1 /> <img class = comicimage img src="+imgsrc+" alt=" + imgalt +">");
          $('#title1').html(comicObj['title']);

      },

      // Error handling
      error: function (error) {
          console.log(`Error ${error}`);
      }

  });
}
//setting the default value of the comic to display as well as getting it's id for button use
var comic= comicSwap();
//function for the last comic, takes current and subtracts one, then does an API call
$('#last').click(function() {
            if(comic[0] != 0){
              comic[0] -= 1;
              changeComic(comic[0]);
            }

          });
//function for the next comic, takes current and subtracts one, then does an API call
$('#next').click(function() {
            if (!(comic[0] > comic[1])) {
              comic[0] += 1;
              changeComic(comic[0]);
            }

          });
