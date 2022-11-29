// /**
//  * Author:    Kaden Sedmak-Locke, Jacob Penland
//  * Created:   11/21/2022

// Using the core $.ajax() method
function ajaxCall() {
            $.ajax({

                // Our sample url to make request
                url:
                    'https://xkcd.com/614/info.0.json',

                // Type of Request
                type: "GET",

                dataType : "json",
                // Function to call when to
                // request is ok
                success: function (data) {
                  // for (y in data['pokemon_entries']){
                  //   $('#output').append("The name of the Pokemon in entry "+ (parseInt(y)+1)+ " of the Kanto Dex is " + data['pokemon_entries'][y]['pokemon_species']['name'] + "<br>"+"<br>");
                  // }
                    var comicObj = data;
                    var imgsrc= comicObj['img'];
                    var imgalt= comicObj['alt'];
                    $('#output').append("<h2 id = title1/>");
                    $('#output').append("<img id = comicImage img src="+imgsrc +">");
                    $('#title1').append(comicObj['title']);
                },

                // Error handling
                error: function (error) {
                    console.log(`Error ${error}`);
                }
            });

        }
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
      // Function to call when to
      // request is ok
      success: function (data) {
        // for (y in data['pokemon_entries']){
        //   $('#output').append("The name of the Pokemon in entry "+ (parseInt(y)+1)+ " of the Kanto Dex is " + data['pokemon_entries'][y]['pokemon_species']['name'] + "<br>"+"<br>");
        // }
          var comicObj = data;
          maxComic= comicObj['num'];
      },

      // Error handling
      error: function (error) {
          console.log(`Error ${error}`);
      }
  });

  //Default comic display call
  var current;
  $.ajax({

      // Our sample url to make request
      url:
          'https://xkcd.com/614/info.0.json',

      // Type of Request
      type: "GET",
      async: false,
      dataType : "json",
      // Function to call when to
      // request is ok
      success: function (data) {
        // for (y in data['pokemon_entries']){
        //   $('#output').append("The name of the Pokemon in entry "+ (parseInt(y)+1)+ " of the Kanto Dex is " + data['pokemon_entries'][y]['pokemon_species']['name'] + "<br>"+"<br>");
        // }

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

function changeComic(currentComic){
  $.ajax({

      // Our sample url to make request
      url:
          'https://xkcd.com/'+ currentComic+'/info.0.json',

      // Type of Request
      type: "GET",
      async: false,
      dataType : "json",
      // Function to call when to
      // request is ok
      success: function (data) {
        // for (y in data['pokemon_entries']){
        //   $('#output').append("The name of the Pokemon in entry "+ (parseInt(y)+1)+ " of the Kanto Dex is " + data['pokemon_entries'][y]['pokemon_species']['name'] + "<br>"+"<br>");
        // }

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
        var comic= comicSwap();
        console.log(comic[0]);

        $('#last').click(function() {
            if(comic[0] != 0){
              comic[0] -= 1;
              changeComic(comic[0]);
            }



          });
        $('#next').click(function() {
            if (!(comic[0] > comic[1])) {
              comic[0] += 1;
              changeComic(comic[0]);
            }

          });
