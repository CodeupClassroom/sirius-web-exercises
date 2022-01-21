// "use strict";
//
// document.getElementById("heading"); // DOM
//
//
// //jQuery
// let myEl = $("#p-one");
// console.log(myEl);
//
// let heading = $("#heading").text();
// console.log(heading);
//
// console.log($("#heading").html());
// // console.log($("#heading").html());
//
// // add a class of "border" to my p tag
//
// $( "#p-one" ).addClass( "border" );

// add a border to the heading if user is logged in:
// check value of isLoggedIn
// grab the value of isLoggedIn
// save that value to a variable
// compare value of logged in to true
// add a border
// assign a class to the element, if true
// find the element
// add a class

// let user1 = {
//     name: "laura",
//     isLoggedIn: true,
//     age: 31
// }
//
// let loginStatus = user1.isLoggedIn;
//
// if(loginStatus === true){
//     $("#heading").addClass("border");
// }
//



// $(".blue-bg").css("background-color", "blue");
//
// // change only list items (li)
// $('li').css("font-size", "24px");
//
// let lastLi = $("ul li:nth-child(3)").text();
// console.log(lastLi)

// change two separate css properties on one element
// $("#p-one").css("font-size", "8px").css( "color", "magenta");

// $("#p-one").css({"color": "red", "font-size": "12px"})

// style multiple elements

// $("p, ul li").css("border", "4px solid blue");
//
//
// // style *ALL* elements - asterisk
// $("*").css("background-color", "lightblue");
// $("body, html").css("background-color", "white");
//


// $("") --> select elements from the DOM
// # --> id
// . --> class
// element/tag name -->  element/tag
//  , --> select multiple elements
// :nth-child(n) --> select a child at the nth place from the
// parent/selected element
// .method().method().method() --> methods can be chained together
// .method(params) --> some methods accept one or more parameters

// .css("property", "value") // accepts two parameters
// .val()
// .text(optionalParam)


// DOM

// select -> add event listener --> tell it which event listener to
// listen for --> here's the function to run when event happens

// document.getElementById("heading").addEventListener("click", function () {
//     console.log("clicked by DOM");
// })

// jQUERY
// $("#heading").click(function () {
//     console.log("clicked by jQuery");
// })

// when the first paragraph gets clicked on, let it create a
// border around the second paragraph.
// 1 el) listening for the event
// 2 el) what's being affected by the event

// ✅ - call the first paragraph element
// ✅ - create the click event
// ✅ - make the function I want to execute
// ✅ - call the element that needs to be changed (2nd paragraph)
// ✅ - do the actual thing we want to happen (create a border)
//
// $("#p-one").click(function () {
//     $("#p-two").css("border", "3px dotted purple");
// })

// let's put things into variables to make it a bit cleaner
// - p1
// - function
// - p2
// - css prop value
// - css prop&val
// -- all of it

// let p1 = $("#p-one");
// console.log(p1);
// let p2 = $("#p-two");
// let cssVal = "3px dotted purple"
//
// let purpleBorder = function(){
//     p2.css("border", cssVal);
// }
//
// // p1;
// p1.click(purpleBorder);

// DOUBLE CLICK
// just another event - it listens 2 clicks

// ✅ - find element that I'm going to work on
// ☀️- give button an id just in case
// ✅ - put it into variables
// ✅- create a function
// ✅- on dbclick, change background to dark color,
// ✅- change font to light color
// ✅ - select element that will be changed

// let btn = $("button");
//
// btn.dblclick(function () {
//     $("*").css({"background-color":"darkblue", "color":"white", "border":"4px solid yellow"});
// })


// when hovering over an li, let's change the background color to light
// blue and when you hover out of it let's chang the background color
// to lightgreen

// ✅identify the element (li)
// ✅hover event
// ✅function for event ( hover in)
// ✅--> change bg color to blue
// function for event ( hover out )
// --> change the bg color to green
//

let onHover = function () {
    $(this).css("background-color", "lightblue");
}
let hoverOff = function () {
    $(this).css("background-color", "lightgreen");
}

$("li").hover(onHover, hoverOff);

$("#heading").mouseleave(onHover);

$("#one").html(`<button>I'm now a button</button>`);






















