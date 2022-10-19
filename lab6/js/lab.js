/**
 * Author:    Kaden Sedmak-Locke, Jacob Penland
 * Created:   10/17/2022
 **/

//Variables
 const myTransport= {"Bus","Skateboard","Car","Bike"}
 const myMainRide = {make:"Ferrari", model:"F355 Spider", color:"red",year:"1995",age:function(){return 2019-age}};
//Output
 document.writeln("Getting around: " + myTransport + "<br>");
 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
