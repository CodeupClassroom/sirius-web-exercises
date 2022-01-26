// AJAX REQUESTS & RESPONSES

// AJAX - asynchronous JavaScript and XML (and json)  -->
// ASYNCHRONOUS - not at the same time 
//  thanksgiving turkey
        //  while the turkey is cooking you can make the
        //  stuffing, cranberry sauce, set the table, you dont stand there
        //  waiting for the turkey to cook before you start working on other things
//  yelling into a canyon (you don't know when that echo will reach
        // back to you, so you go about doing what you do instead of stand
        // there waiting for that echo to come back
        // ) 
// SYNCHRONOUS - 
    //  relay race -- the second person in the race can't go until the
    //  baton is passed to the second person, the second person has to wait
    //  for the first person to complete their circle first before they can go


// XML - eXtensible Markup Language  --
// // designed to store and transport data

// Web Server -- server that holds your website
// // software: handle requests, sends data, it understands URLs
// (addresses), allows us to interact with the servers, host files,
// it helps us control the process of retrievng and sending info/data
// with HTTP server

// // hardware: computers storing data
// host - gives it a location to live,


// HTTP Server - osftware that understands URLs (addresses) and is able
// to to commnicate with the browser to  view webpages

// JSON -- JavaScript Object Notation
// {  "team": 'spurs',
//    "wins": 7
// }

// API - application programming interface (DOG CEO API, JSON TYPICODE)

// ------ ---- 


// AJAX Request (using jQuery methods to make AJAX requests)
// get information from our random dog API

// $.ajax() // jquery syntax for AJAX GET request

// console.log($.ajax("https://dog.ceo/api/breds/image/random")); // GET
//
// console.log($.ajax("https://jsonplaceholder.typicode.com/posts", {
//     type: "POST",
//     // data we want to save to the server:
//     body: JSON.stringify({
//         title: 'EXAMPLE',
//         body: 'EXAMPLE',
//         userId: 1,
//     })
// }));
// console.log($.ajax("https://jsonplaceholder.typicode.com/posts"));


// REQUESTS:
// GET
// POST --> sending information (JSON) to be stored on the server
// DELETE --> send information about the thing you want to delete //
// not really if successful, response is limited
// PUT --> edit  / send the info about the thing you're editing, and
// you'll receive the edited thing back


// DOCUMENTATION

// $.ajax("url");
//
// $.ajax("url", {
//     type: "POST", // type of request
//     data: { // if POSt, PUT, DELETE: SEND INFO ALONG WITH THE REQUEST
//         username: 'lauraruizroehrs',
//         post: "I love javascript"
//     }
// })




//
// // GET - RESPONSE
// $.ajax("https://dog.ceo/api/breeds/image/random").done(function(data, status){
//     console.log("request is DONE!")
//     console.log("--- DATA ---");
//     console.log(data)
//     console.log("--- How'd it go?---")
//     console.log(status);
// })

// $.ajax("https://dog.ceo/api/breeds/image/radom").fail(function () {
//     console.log("your request has failed")
// })

// request an image of a dog from DOG CEO API and render it dynamically
// on my html page

// select the element we want to change
// change its src attribute and give it a value
// retrieve data from API
// handle the response
// retrieve the actual item we need from the response // data.message
// --> string
// pass the string retrieved into the value of src being changed

// let imgStr = "";
// console.log("1 ", imgStr);
//
// $("#doggo").attr("src", "???")
//
// // sends the request
// $.ajax("https://dog.ceo/api/breeds/image/random")
//     .done(function (data, status) {
//         console.log("2 ", imgStr);
//         console.log(data);
//         console.log(data.message);
//         // console.log(status);
//         // $("#doggo").attr("src", data.message)
//         imgStr = data.message;
//         console.log("3 ", imgStr);
//
//     })
//
// console.log("4 ", imgStr);


$.ajax("https://dog.ceo/api/breeds/imge/random") // SENDS A GET REQUEST
    .fail(function () {
        $("h2").html("SORRY YOUR REQUEST FAILED")
        // console.log("sorry yo, your request failed!")
    })
    .always(function(){
        $("h3").html("thanks for visiting!")
    })
    .done(function (data, status) {
        $("img").attr("src", data.message);
        $("p").html(status);
        console.log(status)
    })



// interpret data returned ... you have to first know what the
// information you get back looks like. this can be done via the
// documentation of the place where you're getting the information from
// or console.log(data) inside of your .done() method and inspect the
// object you get back


// .DONE --> TRIGGERS THE CALLBACK FN ONLY IF SUCCESSFUL
// .FAIL --> TRIGGERS THE CALLBACK FN ONLY IF FAIL
// .ALWAYS --. TRIGGERS THE CALLBACK FN ON SUCCESSFUL OR FAIL


// $.ajax("https://dog.ceo/api/breeds/image/random", {
//     type: "POST",
//     data: {
//         message: "https://thumbs.dreamstime.com/b/dog-golden-retriever-jumping-autumn-leaves-autumnal-sunlight-77861618.jpg"
//     }
// }).done(function (data, status) {
//     console.log('request successful')
// }).fail(function () {
//     console.log("request failed")
// }).always(function () {
//     console.log("woohoo we're making requests")
// })


// // get data from server
// $.get("")
// $.ajax(url)
//
// //post - sending data to server
// $.post()
// $.ajax(url, options)



// ⭐️ MORE AJAX ⭐

// -- posts https://jsonplaceholder.typicode.com/comments

// ✅ - GET the url - using an AJAX request
// ✅loop through the array of data
// forEach - failing
// ✅jquery's .each()
// while, do while, for loops, .map()
//  get the actual names of the comments
// ✅.done() method -- to capture the data when it's returned
// append to element
// select/find the element that we want to append to
// create an element
//

$.get("https://jsonplaceholder.typicode.com/comments")
    .done(function (data) {
        console.log(data); // --> confirm if it's an object or an array
        // HERE WE HAVE ACCESS TO THE DATA RRETURNED

        // loop through data returned (which I know is an array from
        // console logging it)
        $.each(data, function (i, comment) {
            console.log(comment.name); // ✅
            // "this " + myVariiable + " is a number."
            // `this ${myVariable} is a number`
            let newEl = `<h1> ${comment.name} </h1>`

            // select element we're appending to,
            // append going to add whatever we pass in as child
            // elements to the element selected
            $(".container").append(newEl);

            // MORE SECURE
            // let newEl = document.createElement("h1");
            // let name = comment.name;
            // newEl.innerHTML = name;
            // $(".container").append(newEl);
        })
    })

// forEach --> doesn't return anything it just changes the original array
// map() -> returns a new array
// $.each(data, function(iterator, el){}) -- jquery's for each loop

// template literals vs concatenation
// let myVar = 18;
// console.log("this is my favorite number: " + myVar + "! what's yours?"); // concatenation
// console.log(`this is my favorite number: ${myVar}! What's yours?`) // template literals


//
// .ajax(url, options) // by default - GET || specify the request TYPE
// in the options
// .get(url) --> GET only
// .post(url, options) // --. POST request only







