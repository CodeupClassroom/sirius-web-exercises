(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun")
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    // Push Method
    // planets.push("Pluto")

    // Spread Method
    planets = [...planets, "Pluto"]
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift()
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop()
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log("Earth's index :" + planets.indexOf("Earth"));

    console.log("Reversing the order of the planets array.");
    planets.reverse()
    console.log(planets);

    console.log("Sorting the planets array.");

    // This is here to show the weirdness when mixing data types
    // planets = [...planets,2,true, null, false, -37]
    // Mixed Data Types Result
    //[-37, 2, 'Earth', 'Jupiter', 'Mars', 'Mercury', 'Neptune', 'Saturn', 'Uranus', 'Venus', false, null, true]
    planets.sort()
    console.log(planets);
})();