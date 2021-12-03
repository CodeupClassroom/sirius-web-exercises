// LOOPS

// -- WHILE --
// 20 parking spots
// 1 car driving around
// ? how many times we'll have to drive around before finding a spot

// while(condition){
//     // code here at every iteration
// }

// while(car is unparked){
//     keep driving
// }

// let parkingSpots = 20;
// let aisles = 10;
// let movingCars = 1;
// // if(parkingSpots == 0)
// let isEmpty = false;


// while(isEmpty == false){
//     console.log(movingCars);
//     movingCars++
// }

// let num = 2;
// let age = 31;
// console.log(num = num++);
// console.log(age = ++age);
// num = num++;
// age = ++age;
// console.log(num);
// console.log(age);

// let i = 0; // starting point
// while(i < 10){
//     console.log("iteration: ", i);
//     i++;
//     // i--;
//     // i = i + 1;
// }
// 0 available spots
// 20 parking spots (ending point)
// loop until a parking spot opens up
// iterating through the loop
// there are X number of spots available;
//
// how many parking spots are available in a parking garage. write a loop that counts the spots available as 20 cars leave
// a 20 car parking garage.

// let numberOfCars = 20;
// let usedSpots = 20;
// let parked = false;
// let counter = 0;
// while(!parked){
//     console.log("we're on loop: " + counter + "-----------------------")
//     if(usedSpots == numberOfCars){
//         console.log("there's no parking")
//         numberOfCars--;
//         console.log("num of cars: ", numberOfCars);
//         counter++;
//         console.log("counter: ", counter);
//     } else  {
//         parked = true;
//         console.log("you found a parking spot")
//         console.log("num of cars: ", numberOfCars);
//         console.log("counter: ", counter);
//     }
// }

// let usedSpots = 20;
// while(usedSpots > 0) {
//     usedSpots--;
//     console.log(`There are ${20 - usedSpots} available.`)
// }

// let parkingSpots = 20
// let emptyParkingSpotNum = Math.floor(Math.random() * 20)
//
// let i = 0;
// while(i <= parkingSpots) {
//     console.log("-------");
//     // console.log(i)
//     i++;
//     if(i === emptyParkingSpotNum){
//         console.log("park in spot " + i)
//         break;
//     }
//     console.log(i)
// }

// while(condition is true){
//     execute this code.
// }

// loop until our number reaches 15;
// let i = 0;
// while(i <= 15){
//     console.log("--------");
//     console.log("i before ++i: ", i)
//     i++;
//     console.log("i after ++i: ", i);
// }

// do while - ALWAYS RUNS FIRST and then it checks the condition
// let i = 20;
// do {
//     console.log("i before ++i: ", i)
//     i++;
//     console.log("i after ++i: ", i);
// } while (i <= 15);

// loop through numbers 0 - 50 by 2s

//loop through numbers 0 - 10 using a while loop and again with a do
// while loop
// let i = 0;
// while(i <= 10){
//     console.log(i);
//     i++;
// }
//
// let k = 0
// do{
//     console.log(k);
//     k++
// } while (k <= 10);

// TODO: using prompt() and alert(), write a loop that will continue to
//  ask for the correct password until the correct password is given.
// hint: start by defining the correct password

//


// FOR LOOPS -----

// for(1; 2 ; 3; ){
//     // code;
// };
//
// 1. starting point;
// 2, stopping point; / condition
// 3. how to iterate
// let animals = ["frog", "dog", "cat", "horse"];
// for(let i = 0; i<animals.length; i++){
//     console.log("my favorite animal is: " + animals[i]);
// }

// let i = 0;
// while(i<animals.length){
//     console.log("my fave animal is: " + animals[i]);
//     i++;
// }


// // 4 dozens
// 1. starting point
// 2. condition/ stopping point
// 3. how to iterate
// let dozens = 0;
// for(let eggs = 1; eggs <= 48; eggs++){
//     if(eggs %12===0){
//         dozens++;
//     }
//     // dozens = eggs/12;
//     console.log("dozens: ", dozens);
//     console.log("eggs: ", eggs);
// }

// NESTED LOOPS
// count 1 to 5
for(let counter = 1; counter <=5; counter++){
    console.log('FIRST counter: ' + counter);
    //counts from 5 to 1
    for(let counterTwo = 5; counterTwo > 0; counterTwo--){
        console.log('SECOND counter: ' + counterTwo);
        // break;

    }
}
