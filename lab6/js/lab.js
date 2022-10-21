/**
 * Author:    Kaden Sedmak-Locke, Jacob Penland
 * Created:   10/17/2022
 **/

//Variables
myTransport= ["Bus","Skateboard","Car","Bike"];
myMainRide = {make:"Ferrari", model:"F355 Spider", color:"red",year:"1995",age:function(){return 2019-age}};
//Output
 document.writeln("The kinds of transportation I use: " + myTransport + "</br>");
 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
