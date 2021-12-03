"use strict"

let samsDogs = ["blue","luna","scamp"];

console.log("before",samsDogs);

samsDogs.unshift("spot");

console.log("after unshift",samsDogs);

samsDogs.push("rex");

console.log("after push",samsDogs)

console.log("removing last index using pop() method");

samsDogs.pop();

console.log("after pop",samsDogs)

console.log("running shift() method")

samsDogs.shift()

console.log("after shift", samsDogs)

console.log("fetching index of \"luna\"...")

console.log("Luna's index ", samsDogs.indexOf("luna"))



console.log(
    "exposure to filter method filtering by letter 'a'",
    samsDogs.filter(function (dog) {
    return dog.includes("a")
}));

// let sliced = samsDogs.slice(1,3)
//
// console.log("sliced",sliced)

console.log("org", samsDogs)

console.log("reversing array")

samsDogs.reverse()

console.log("reversed", samsDogs)


    let numbers = [5,72,-5]

console.log(numbers.sort());

console.log("sort() dogs", samsDogs.sort())

console.log("samsDogs as string ", samsDogs.join("<br>"))

let searchTerm = "soup,tomato,no-garlic,1Hour"

let parsedSearchTerms = searchTerm.split("")

console.log("Parsed Search Terms",parsedSearchTerms)

let myName = "Samuel";

console.log("flipped Name",myName.split("").reverse().join(""));

console.log([...samsDogs, ...numbers]);

numbers = [9.2, ...numbers]
console.log([...numbers, 9.2])







