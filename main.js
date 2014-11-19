$(document).ready(function(){

var colors = ["red", "blue", "yellow"];
var numbers = ["-3px", "-4px", "-5px", "-6px"];
var counter = 0;
var nextColor;

function bgchange() {
    counter = (counter + 1) % colors.length;
    nextColor = colors[counter];
    $(".box").css("background-color", nextColor);
}
    setInterval(bgchange, 10)

// function positionChange() {
// 	counter = (counter + 1) % numbers.length;
// 	nextPosition = numbers[counter];
// 	$("h1:after").css("left", nextPosition);
// }
// 	setInterval(positionChange, 10)
});