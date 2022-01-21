// change color of table of contents element to orange when
// the table of contents element is clicked on

//  ✅1. identify which element we want listening for an event
//  ✅2. retrieve the element we want from step 1 & save to variable
//  ✅3. add event listener to the element from step 2.
//  ✅4. identify what event the el should be listening for ... WHAT IS the
//  event? --> "click"
//  ✅5. add an  function that triggers when the event happens
//  6. inside of the listener function, what change do we want to make?
//  (color - orange)
//  ✅6a. identify which element we want to change the color of
//  ✅6b. change color using style property to re-assign its value to
//    orange

var el = document.getElementById("orange");

el.addEventListener("click", function(){
    console.log('table of contents was clicked on');
    el.style.color = "orange";
})


// CHANGE COLOR OF TABLE OF CONTENTS TO ORANGE
// id=orange
// var el = document.getElementById("orange");
// el.style.color = "orange";

// CHANGE THE COLOR OF "HELLO WORLD" TO PINK WHEN WE CLICK ON THE BUTTON
// ✅1. define the hello world element (element that will change on click)
// ✅2. define the button that will be listening for the click
// ✅3. add the event listener to the button ( .addEventListener() )
// ✅4. define what event is being listened for ("click")
// 5. actually change the color of hello world (style.color = "pink")
// (listener function)

var helloWorldEl = document.getElementsByTagName("h1")[0];
console.log(helloWorldEl);

var btn = document.getElementById("btn");
console.log(btn);

btn.addEventListener("click", function () {
    helloWorldEl.style.color = "pink";
    helloWorldEl.style.backgroundColor = "purple";
    alert("ha ha! you clicked on a button");
    console.log(8+14);
    return 8 + 14;
})

// DARK MODE
document.getElementById("dark-mode").addEventListener("click", function(){
    // document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    let bod = document.getElementsByTagName("body")[0]
    console.log(bod.style.backgroundColor);
    if(bod.style.backgroundColor !== "black") {
        bod.setAttribute("style", "background-color: black; color: white;")
        alert("dark mode on");
    } else {
        bod.setAttribute("style", "background-color: white; color: black;")
    }
    // document.getElementById("btn").style.border = "1px solid red";
})

function changeTextSize(){
    // this.style.color = "red";
    // this.style.backgroundColor = "yellow";
    this.setAttribute("style", "color: red; background-color: yellow");
}

// function changeBgColor() {
//     this.style.backgroundColor = "yellow";
//
//
// }

// REMOVE EVENT LISTENER
var h2 = document.getElementById("change-me");

h2.addEventListener("mouseover", changeTextSize);

// h2.removeEventListener("mouseover", changeTextSize);

//
function add(num1, num2){
    return num1 + num2
}

console.log(add(4, 8, 4, 2,2,1 ));
















