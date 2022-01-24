console.log($("#pink").next());

// .next() // SETTER
// $("#pink").next().css("border", "2px solid black");


// grab the element first
// children

// $("#first").children().children().css("border", "2px solid red");

// $("#first:nth-child(1)").css("border", "2px solid red");

// $("#first").children(":nth-child(1)").css("border", "2px solid red");

// $("#pink").parent().css("border", "2px solid red");

// console.log($("li"));
// $("li").each(function (index) {
//     if(index % 2 == 0) {
//         $(this).css("font-size", "24px");
//     }
// })

// reducer

// const array1 = [1, 2, 3, 4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;
//
// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10
//
// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

// .first()  0 --> end of the array of elements(jquery obj)
// .last()  end --> 0


// console.log($("li"));
// $("li").first().css("background-color", "blue");
// $("li").last().css("background-color", "green");
// console.log($("li").first().parent());


// PROBLEM:  write a function that accepts a string of numbers and returns the sum of those numbers
// INPUT 1: "42958372" --- EXPECTED OUTPUT 1: 40
// INPUT 2: "917485"      --- EXPECTED OUTPUT 2: 34 (edited)

// Creating array
let input1 = "42958372";
let arr = input1.split(''); // ['4','2','9',8...]
let numArr = [] // [4,2,9,5 ...]
arr.forEach(num => {

    num = Number(num);
    numArr.push(num);
})
console.log(numArr);

// Using reduce function to find the sum
let sum = numArr.reduce(function (x, y) {
    return x + y;
}, 0); // returns a single value


document.write("Sum using Reduce method: " + sum);
console.log(sum);









