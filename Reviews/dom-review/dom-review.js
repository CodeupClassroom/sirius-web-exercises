// when you click on a button, change the background color

// when the page loads, create an alert

// toggle the font size from small to large and back to small when you
// click on that element
// ✅ element we're trying to change - targetted element
// ✅ element we click on to make the changes
// ✅ what event is goiong to be listened for
// ✅ what happens after the event happens
// handle toggle
// toggleClass
// add css to a the class we're toggling.

// let changeMe = $(".bg"); // paragraph
// let listenin = $("#tgl"); // btn
//
// listenin.click(function () {
//     console.log("clicked");
//     changeMe.toggleClass("color")
// })

// SAME BUT USING $(THIS) AND CLICKING ON THE PARAGRAPH:
// let changeMe = $(".bg"); // paragraph
// let listenin = $("#tgl"); // btn
//
// changeMe.click(function () {
//     console.log("clicked");
//     $(this).toggleClass("color")
// })

// ⭐️ make the paragraph disappear ever time it's clicked on
// let changeMe = $(".bg"); // paragraph
// let listenin = $("#tgl"); // btn
//
//
// listenin.click(function () {
//     console.log("clicked");
//     changeMe.toggleClass("hideMe")
// })

// ⭐️ make the paragraph disappear forever ever time it's clicked on
// let changeMe = $(".bg"); // paragraph
// let listenin = $("#tgl"); // btn
//
//
// listenin.click(function () {
//     console.log("clicked");
//     changeMe.css("visibility", "hidden");
// })


// DIFFERENCE BETWEEN USING DOM / JQUERY

// jquery
// let changeMe = $(".bg"); // paragraph
// let listenin = $("#tgl"); // btn

// dom
// document.getElementsByClassName("bg");
// document.getElementById("tgl");
//

window.onload = function () {
    alert("loaded!")
};
$(document).ready(function () {
    alert("ready!")
});











