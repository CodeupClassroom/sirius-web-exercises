


function showMultiplicationTable(x) {
    for (var i = 1; i <= 10; i++) {
        var answer = x * i;
        console.log(x + ' x ' + i + ' = ' + answer);
    }
}
showMultiplicationTable(7)

for (var i = 0; i < 10; i++) {
    var rando = Math.floor(Math.random() * 180) + 20;
    if (rando % 2 === 0){
        console.log(rando + ' is even')
    } else {
        console.log(rando + ' is odd')
    }
}

for (var i = 1; i <= 9; i++) {
    var output = '';
    for (var j = 1; j <= i; j++) {
        output += i;
    }
    console.log(output)
}

for (var i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}

for (var i = 100; i >= 5; i-=5) {
    console.log(i);
}