'use strict';
// BOM Intro
let sirius = {
    numStudents: 30,
    classroom: "Pedernales/remote",
//    methods - functions stored inside of an object
    takeAttendance: function(){

        prompt("how many students?");
        return this.classroom;
    },
    prompt: function (){
        // returns prompt window;
    }
}

sirius.takeAttendance();
sirius.prompt();
//
// .prompt()

// let BOM = {
//     window: {
//         currentPage: "www.google.com",
//         prevPage: "www.facebook.com",
//
//     },
//     // methods
//     prompt: function (){
//         return "prompt window";
//     },
//     setInterval: function (){
//         // sets the interval
//     }
// }

// let favoriteNumber = 18; // global scoped
//
// function add(num1){
//     let num2 = 10; // locally scoped
//     return num1 + num2;
// }
//
// console.log(add(favoriteNumber));



// // SYSTEM DIALOGUE
// let name = prompt("what's your name?");
// console.log("your name is: ", name);
//
// let numStudents = prompt("how many students are in your class?"); // 27
//
// function takeAttendance(students, num2){
//     return 30 - students;
// }
//
// console.log("this many students are absent today: ", takeAttendance(numStudents));


// -- BOM METHODS --
// SET INTERVAL (after a set amount of time)
// ⚠️⚠️⚠️⚠️ be aware of infinite loops

var count = 0; // starting point //1
var max = 10; // max number we want to get to
var interval = 5000; // interval time in milliseconds

var intervalId =
    setInterval(
        function () {
            if (count >= max) {
                clearInterval(intervalId); //stop setInterval
                console.log('All done');
            } else {
                count++;
                console.log('Repeating this line ' + count);
            }
        },  interval);


// clearInterval(intervalId); //stop setInterval

// SET TIMEOUT

// var delay = 5000; // delay time in milliseconds
//
// function promptMsg(){
//     alert('Here is a delayed hello!');
// }
//
// var timeoutId = setTimeout(function () {
//     alert('Here is a delayed hello!');
// }, delay);


// we can also separate the function and pass in the name of the
// function as the first param in setTimeout
// function promptMsg(){
//     alert('Here is a delayed hello!');
// }
//
// var timeoutId = setTimeout(promptMsg, delay);

// WINDOW LOCATION
// window.location // {"localhost234://..."}

// window.location = "https://java.codeup.com/" // 'java.codeup.com'

let faveNum = 18;
faveNum = 12;
console.log(faveNum); // 12

var delay = 5000; // delay time in milliseconds

var delayedRedirect = setTimeout(function () {
    window.location = "https://java.codeup.com/";
}, delay);



