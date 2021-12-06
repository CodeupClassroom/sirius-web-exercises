console.log("Welcome to objects");

let array = [1, 2, 3, true, false]

let birthdayObject = {
    month: "November",
    day: 22,
    getDetails: function () {
        return this.month + "," + birthdayObject.day
    }
}

let person = {
    name: "Jack",
    birthday: birthdayObject,
    isTall: false,
    getDetails: function () {
        return this.name
    }
}

function createPerson(name) {
    return {
        firstName: name,
        greeting: function () {
            console.log("hello, my name is " + this.firstName)
        }
    }
}

let personTwo = createPerson("laura");
let personThree = createPerson("Ry");


// let person = new Object();
const newPropertyName = "name"

// person[newPropertyName] = "Matt lewis";
// person.birthday = "Sep,22";
// person.isTall = true;


// console.log(person)

let dog = {
    breed: "Huskey",
    colors: ["brown", "black", "white"],
    sex: "f",
    name: "Luna",
    isFloofer: true,
    bark: function (loud) {
        if (loud) {
            console.log("Woof Woof!!");
        } else {
            console.log("ruf ruf");
        }
    },
    getDetails: function () {
        return this.colors[0] + " " + this.breed + " named " + this.name;
    }
};

function createDog(name, colors, breed) {
    return {
        breed: breed,
        colors: colors,
        sex: "f",
        name: name,
        isFloofer: true,
        bark: function (loud) {
            if (loud) {
                console.log("Woof Woof!!");
            } else {
                console.log("ruf ruf");
            }
        },
        getDetails: function () {
            return this.colors[0] + " " + this.breed + " named " + this.name;
        }
    }
}

let collectionOfDogs = []

collectionOfDogs.push(createDog('Knuckles', ['black', 'white'], 'mutt'))
collectionOfDogs.push(createDog("Roxy", ["pink","black"], "German Shepard"))
collectionOfDogs.push(createDog("bob", ["brown", "black"],  "poodle"))
collectionOfDogs.push(createDog("Camper", ["blue", "white"], "Collie"))

collectionOfDogs.forEach(function (dog){
    console.log(dog.colors[3])
})






