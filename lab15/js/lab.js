// /**
//  * Author:    Kaden Sedmak-Locke, Jacob Penland
//  * Created:   11/21/2022

// Using the core $.ajax() method
function ajaxCall() {
            $.ajax({

                // Our sample url to make request
                url:
                    'https://pokeapi.co/api/v2/pokedex/2',

                // Type of Request
                type: "GET",

                // Function to call when to
                // request is ok
                success: function (data) {
                    var x = JSON.stringify(data);
                    for (y in data['pokemon_entries']){
                      $('#output').append("The name of the Pokemon in entry "+ (parseInt(y)+1)+ " of the Kanto Dex is " + data['pokemon_entries'][y]['pokemon_species']['name'] + "<br>"+"<br>");
                    }
                },

                // Error handling
                error: function (error) {
                    console.log(`Error ${error}`);
                }
            });

        }


        //
        // function ajaxCallNASA() {
        //             $.ajax({
        //
        //                 // Our sample url to make request
        //                 url:
        //                     'https://images-api.nasa.gov/search?',
        //
        //                 // Type of Request
        //                 type: "GET",
        //                 crossDomain: true,
        //                 xhrFields: {
        //                     'withCredentials': true // tell the client to send the cookies if any for the requested domain
        //                     },
        //                 dataType: 'jsonp',
        //                 headers: {
        //                   'Authorization': '69B16Gfrt49rFCJOWDilQpYq6evXwBYkv7hUuaYb'
        //                 },
        //
        //                 // Function to call when to
        //                 // request is ok
        //                 success: function (data) {
        //                     var x = JSON.stringify(data);
        //                     console.log(x);
        //                     $('#output').html(x);
        //                 },
        //
        //                 // Error handling
        //                 error: function (error) {
        //                     console.log(`Error ${error}`);
        //                 }
        //             });
        //
        //         }
                $('#activate').click(function() {
                    ajaxCall();

                  });
