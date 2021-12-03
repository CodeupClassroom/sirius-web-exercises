// Write a function that accepts the top three bowling scores and returns the average.
//     Write a function that accepts the best score and returns true if its divisible by 3 or 5 and false if it’s not
// Write a function that accepts the name of the bowling place (“ThEbEsTbOwLiNgPlAcEever”) and returns it in all lower case BONUS: write a function that returns “TheBestBowlingPlaceEver” and return it all lowercase with a space between each word
// Given these variables: let score = 109; let name = “bowling Is Fun”; let isBowlingFun = true; let players = [“tom”, “jerry”, “Garfield”]; Write a function that returns the type of each of the variables (call the function once per variable);
// Write a function that executes all of the above functions
// Copy and execute the following functions, and find the Error: (Hint: try console logging the result)

// Write a function that accepts the top three bowling scores and returns the average.
//✅ 1. write a function
//✅ 2. pass in parameters
// ✅ 3. 3 scores ( variables)
// ✅ 4. return something (number)

let first = 120;
let second = 234;
let third = 90;

function nameOfFunction(score1, score2, score3){
    // code
    let args = arguments.length;
    console.log(args);
    let average = (score1 + score2 + score3) / 3;
    return average;
}

console.log(nameOfFunction(first, second, third));

// Given these variables: let score = 109; let name = “bowling Is Fun”;
// let isBowlingFun = true; let players = [“tom”, “jerry”, “Garfield”];
// Write a function that returns the type of each of the variables (call the function once per variable);
// ✅ 1. write a function
// ✅ 2 return type of var
// 3. call function 3 times

let score = 109;
let name = "bowling Is Fun";
let isBowlingFun = true;
let players = ["tom", "jerry", "Garfield"];
function findType(thing){
    return typeof thing;
}
console.log(findType(isBowlingFun));
console.log(findType(score));
console.log(findType(name));
console.log(findType(players));


function myFunction(firstName, lastName) {
    return firstName + " " + lastName;
};

console.log(myFunction("laura", "ruiz"));

function makeLowercase(name) {

    let letters = name.split("");
    let tempString = letters[0].toLowerCase();

    for (let x = 1; x < letters.length; x++) {
        if (letters[x] == letters[x].toUpperCase()) {
            tempString += ' ' + letters[x].toLowerCase();
        }
        else {
            tempString += letters[x];
        }
    }

    return tempString;
}

console.log(makeLowercase("TheBestBowlingPlaceEver"));

function toLower(str) {
    return str.toLowerCase();
}

console.log(toLower("TheBestBowlingPlaceEver"));
// function thatsNotMyName(name){ if(name = "Laura"){ return "that's me!, I'm " + "name"} } else { return "that's not my name" }



