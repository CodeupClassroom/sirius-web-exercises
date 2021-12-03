
var userNumber = 0;
do {
    userNumber = Number(prompt("Gimme an odd number between 1 && 50!"));
    if (userNumber < 1 || userNumber > 50) {
        alert("Number out of bounds")
    } else if (userNumber % 2 === 0) {
        alert("Number is not odd")
    } else if (isNaN(userNumber)) {
        alert("That's not a number")
    } else {
        alert("Yay! you entered a valid number")
        break;
    }
} while(true)

console.log("Number to skip is: " + userNumber)

for (var i = 1; i <= 50; i+=2) {
    if (i === userNumber) {
        console.log("Yikes: skipping number: " + userNumber)
        continue;
    }
    console.log("Here is an odd number: " + i)
}











