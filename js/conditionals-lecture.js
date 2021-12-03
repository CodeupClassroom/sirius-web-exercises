// "use strict";
// MORNING WARMUP:
// Write a function called reverseString(string) that reverses a string


// In plain English, what would change in your outfit if it were: sunny
// vs. rainy vs. snowy

// sunny --> shirt
//if statement:
// if weather is sunny, wear shirt.
// let weather = "sunny";
//     if (weather === "sunny") {
//         console.log("wear shirt");
//     }  else if (weather === "rainy"){
//         console.log("bring umbrella");
//     } else if (weather === "snowy"){
//         console.log("wear 10 jackets")
//     }
//     else {
//         console.log("wear whatever");
//     }

//
// let myAge = 21;
// let actualAge = 31;
// // params
//     function checkAge(givenAge, realAge){
//         console.log(givenAge, realAge);
//         if (givenAge === realAge){
//             console.log("myAge is my actual age")
//         }
//         console.log("tht's cool!")
//     }
//     // arguments
//     checkAge(28, 28);

// let myVar = 9;
// == // value
// === // type AND value


// if(true === !!""){
//     console.log("matches");
// } else {
//     console.log("not matches")
// }

// (condition) {true do this} else {do that}
// condition ? if true- do this : do that
// let weather = "sunny"
// let temp = 90;
// weather === "sunny"
//     ? temp == "90"
//     ? console.log("matches")
//     : console.log("not matches")
//     : console.log("it's sunny")

// let numGrade = 80
// let student = "Steve";
// numGrade !== 80
//     ? console.log("you got another grade")
//     : console.log("you got an eighty!");


// weather sunny = sunglasses, rainy = umbrella, snowy = 10 jackets

let weather = "sunny";
switch(weather){
    case "sunny": // true
        break;
        console.log("hello")
    case "rainy": //false
        console.log("umbrella");
    case "snowy": //true
        console.log("ten jackets");
    case "tornado":
        console.log("hide")

}


