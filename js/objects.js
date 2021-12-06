(function () {
    "use strict";

    console.log("Hello there")

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Samuel",
        lastName: "Moore",
        cellphone: {
            type: "galaxy",
            size: "med"
        }
    }

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "Hello from " + this.firstName + " " + this.lastName + "! They own a " + this.cellphone.type + "."
    }

    console.log(person.sayHello())

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    // Collection             // Individual element
    shoppers.forEach(function (shopper, index) {

        let discount = shopper.amount * 0.12
        let discountedTotal = shopper.amount - discount;

        if (shopper.amount > 200) {
            console.log(`${shopper.name} gets a discount
            The original price was $${shopper.amount.toFixed(2)},
            The discount is $${discount.toFixed(2)}
            The total due is $${discountedTotal.toFixed(2)}`)
        } else {
            console.log(`${shopper.name} does not get a discount
            The total due is $${shopper.amount}`)
        }

    })


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: "Brave New World",
            author: {
                lastName: "Unknown",
                firstName: "Unknown"
            }
        },
        {
            title: "The Testaments",
            author: {
                firstName: "Margaret",
                lastName: "Atwood"
            }
        },
        {
            title: "The Great Gatsby",
            author: {
                firstName: "F Scott",
                lastName: "Fitzgerald",
            }
        },
        {
            title: "Harry Potter and the Sorcerer\'s Stone",
            author: {
                firstName: "Joanne",
                lastName: "Rowling"
            }
        },
        {
            title: "Sapiens: A Brief History of Humankind",
            author: {
                firstName: "Yuval",
                lastName: "Harari"
            }
        }
    ]


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // Reference
    // {
    //     title: "Sapiens: A Brief History of Humankind",
    //         author: {
    //              firstName: "Yuval",
    //              lastName: "Harari"
    //          }
    // }

    books.forEach(function (book, index) {
        // console.log(`Book # ${index + 1}\nTitle: ${book.title}\nAuthor: ${book.author.firstName}  ${book.author.lastName}\n---`)

        console.log("Book # " + (index + 1))
        console.log("Title: " + book.title)
        console.log("Author: " + book.author.firstName + " " + book.author.lastName)
        console.log("---")


    })


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(bookTitle,authorFirstName, authorLastName){
        return {
            title: bookTitle,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            },
            showBookInfo: function (){

                console.log("Title: " + this.title)
                console.log("Author: " + this.author.firstName + " " + this.author.lastName)
                console.log("---")
            }
        }
    }

    const newBook = createBook("The old man and the Sea","Ernist","Hemingway")

    newBook.showBookInfo()

})();