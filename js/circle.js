(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

                                // Equivalent to Math.pow(this.radius, 2)
            return Math.PI * ( this.radius ** 2 )
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            let areaValue;

            if (doRounding){
                areaValue = Math.round(this.getArea())
            }else {
                areaValue = this.getArea();
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + areaValue);
        }
    };

    // Extra Validation Question
    // function multiply(x,y){
    //
    //     if (isValidNumber(x) && isValidNumber(y)){
    //         return x * y;
    //     }
    //
    //     return false
    //
    // }
    //
    // function isValidNumber(input){
    //     return typeof input === "number" || !isNaN(input)
    // }

    // console.log(multiply("3", 4));

    console.log("circle Area",circle.getArea());

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();