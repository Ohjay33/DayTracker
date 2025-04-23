
var d = new Date();
var day = d.getDay();
var msg = ["Sunday Funday!",
    "Back to the grind!",
    "aye It's Taco Tuesday!",
    "Boom! Wednesday!",
    "Thirsty Thursday, yo!",
    "It's Friday! We should be kickin' it!",
    "Paaarrrtttyyy!"]

$('#' + day).attr('id', 'today');
$("#message").text(msg[day]);
console.log("we getting somewhere");






// How to get the day with javascript

/* <p id="datetime"></p> */

// get current date and time
// var now = new Date();
// var datetime = now.toLocaleString();
// var msg = ["Sunday Funday!",
//     "Back to the grind!",
//     "aye It's Taco Tuesday!",
//     "Boom! Wednesday!",
//     "Thirsty Thursday, yo!",
//     "It's Friday! We should be kickin' it!",
//     "Paaarrrtttyyy!"]

// Insert date and time into HTML
// document.getElementById("date").innerHTML = datetime;

