// give all paragraphs a border
// grab all the p elements
// change the css


// setting
$(".border").css("border", "2px solid black");
// let borderCSS = $(".border").css();
// console.log(borderCSS);

// change h1 to say happy monday
// grab the element
// chain a method onto that element
// pass in the value that I want to change it to

// .html() getting? setting?  --> IT DOES BOTH
console.log($("h1").html()); // Hello  // GETTING
$("h1").html("Happy Monday"); // SETTING

console.log($("h1").html()); // Happy Monday // GETTING

// add a class of border to my h2
$("#red").addClass("border"); // SETTER
console.log($("#red"));
$("#red").removeClass(); // (re)SETTER
console.log($("#red"));

// .toggleClass()

// toggle our h1 to be highlighted  on an event
// grab the element we want to change
// grab the element that's
// //listening for the click
//change the css (.css())
// toggle it

$("h1").click(function(){
    $(this).toggleClass("highlight");
})







