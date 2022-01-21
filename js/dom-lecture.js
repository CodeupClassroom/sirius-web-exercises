// CHANGE THE SPAN TO SAY THE USER INPUT NAME

// ✅ 1. make a prompt to ask user for name
// ✅    2. save that name to a variable
// 3. input the name saved into the span.
// ✅ 3a. GET THE SPAN(or element) (id, class, tag name)
// ✅ 3b.  save the retrieved span somewhere
// ✅ 3c change the inner contents of the span to the saved input variable
// (promptAnswer);


// var promptAnswer = prompt("what's your name?"); //Laura

var retrievedSpan = document.getElementById("name");

// console.log("promptAnswer: ", promptAnswer);
console.log("retrievedSpan: ", retrievedSpan);

// UPDATES ENTIRE HTML ELEMENT
// document.getElementById("myspan").innerHTML="newtext";
// retrievedSpan.innerHTML = promptAnswer;

// JUST UPDATES TEXT
// document.getElementById("myspan").textContent="newtext";
retrievedSpan.textContent = "millionaire";


// --
// document --> the name of the DOM object
// METHODS THAT RETRIEVE OBJECTS FROM THE DOM
// getElementById("idNameGoesHere") --> by id --> WILL (AND SHOULD) ONLY
// RETURN ONE
// ELEMENT
// getElementsByClass("theClassName") -- by class --> COULD RETURN MANY
// ELEMENTS WITH
// THE SAME CLASS NAME
// getElementsByTagName("tagNameGoesHere") --> by tag --> COULD RETURN MANY
// ELEMENTS

// RETRIEVING MULTIPLE ELEMENTS:
// GOOGLE: how to get elements by class using the DOM

// 1. declare a variable
// 2. document.getElementByClassName
// 3. specify the class we're looking for --> odd
// 4. console.log the variable to make sure I'm grabbing the info I need

var myElements = document.getElementsByClassName("odd");
console.log(myElements) // RETURNS ARRAY each element in the array is
// each of the elements it found with that class name

myElements.innerHTML = "hello world";
// GOOGLE: getElementsByClassName -- MDN
// GOOGLE: getelementsByClassName contents not changing with innerHTML
// returns an array

// LOOP THROUGH AN ARRAY TO CHANGE EACH ELEMENT RETURNED
for(var i = 0; i < myElements.length; i++){
    // access to each indiviudal element in the array (each element
    // with that class name)
    myElements[i].innerHTML = "hello world";
}

// RETRIEVING FORM INPUT ELEMENTS

// 1. create a variable to store input value
// 2. retrieve the input value
// 2a. object notation to retrieve that value
//
// var userInput = document.forms["login"].username;
// console.log(userInput);
// var inputVal = userInput.value;
// console.log(inputVal);


// LET'S CHANGE THE COLOR OF MY H1 TAG TO PURPLE
// 1. access the element we want to change
// 2. change the style (attribute) to purple
// 3.

var myH1 = document.getElementById("greeting");
// // setAttribute("attribute name", "attribute new value");
//
// // myH1.setAttribute("color", "purple");
//
// // myH1.setAttribute("style", "color: purple");
// //
// // myH1.setAttribute("class", "border");
// console.log(myH1);
//
//
myH1.setAttribute("color", "red"); // method -- typically pass in values
myH1.style.color = "red"; // value // typically re-assign values
myH1.setAttribute("class", "newClass");
myH1.remove();

// 1. what element are you trying to access
// 2. how are you going to retrieve that element
//3. what (if anything) / how areyou changing about that elment?
// 4. what are you changing it to

document.getElementById("greeting").innerText = "hello world";


let nums = [2,4,5,6];
console.log(nums.length) // 4































