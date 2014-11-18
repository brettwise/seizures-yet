$(document).ready(function(){


var array = ["red", "blue", "yellow"];

var counter = 0;
var nextColor;

function  bgchange() {
    console.log (counter);
    counter = (counter + 1) % array.length;
    nextColor = array[counter];

    $(".box").css("background-color", nextColor);

}


    setInterval(bgchange, 10)


});