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
                    $('#output').append("<h1 id = title1/> <img class = comicimage img src="+imgsrc +">");
                    $('#title1').append(comicObj['title']);
                },

                // Error handling
                error: function (error) {
                    console.log(`Error ${error}`);
                }
            });

        }

  function getAndPutData() {
    var currentPage = 614;
              $.ajax({

                  // Our sample url to make request
                  url:
                      'https://xkcd.com/' + current + '/info.0.json',

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
                      $('#output').append("<h1 id = title1 /> <img class = comicimage img src="+imgsrc+" alt=" + imgalt +">");
                      $('#title1').append(comicObj['title']);

                  },

                  // Error handling
                  error: function (error) {
                      console.log(`Error ${error}`);
                  }
              });

          }

        $('#activate').click(function() {
            ajaxCall();

          });

        $('#change').click(function() {
            ajaxCall();

          });
