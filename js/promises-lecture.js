// Promises

// a js object, used as a placeholder , used often with requests

// function add(a, b){
//     return a +b;
// }
//
// add(4,6); // trigger immediately once it's called
//
// $.ajax("\"https://api.github.com/zen\"")
//     .done(function(res){
//         console.log(res);
//     }) //waits for the response before it triggersexecuted

// similar to a conditional, in that a function will not  run unless X
// condition(typically timely condition) is ready

// PROMISE STATES:
// PENDING -waiting for the response/ waiting for the condition to be met
// RESOLVED - when condition waiting for is successfully met - your
// resolved function will execute
// REJECTED -when event happens, but the condition is not meet
// successfully, fails -- trigger the function that is going to handle
// the failed error

// FETCH REQUESTS

// comes from FETCH API - doesn't have to be embedded into our code in
// orer to use

// GET Request using FETCH API

// fetch()
// fetch("https://api.gthub.com/zen") // make the request // send info to
// // make the request
//
// // how do we handle the response? json
// // console.log(res);
//
//     // .then()
//     // handle the response
//     // accepts two parameters
//     // 1 - callback function -> get executed only when the request
//     // comes back successfully --> state of the promise = resolved
//     // 1 -> always going to accept the successful response object from
//     // the request as a paremter
//     // 2 - callbackfunction --> gets executed only if the request is
//     // made but fails --> state of promise = rejected
//     // 2 - accept as a parameter? failed response /  error
//     .then(
//         function (res) {
//         console.log(res);
//         console.log("successful!!")
//         }, // resolved
//         function(err){
//             console.log(err);
//             console.log("failed!!")
//
//         } // rejected
//     )




// // ARROW FUNCTIONS IN FETCH REQUESTS
// fetch("https://www.boredapi.com/activity")
//     .then(function (res) {
//         console.log(res);
//     })
//
// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(dogs => dogs.json())
//     .then((res) => {
//         document.getElementById("dog").setAttribute("src", res.message);
//     },
//      (err) => {
//         console.log(err);
//         console.log("failed")
//      }
//  )


// .catch() - handles any rejected response
// accepts a callback function
// that callback function accepts the error message as its paraemter

// fetch("https://dog.ceo/api/breeds/image/random")
//     // ✅ succcessful response object becomes the parameter for the
//     // callback function in the .then() method
//     .then(response =>
//         response.json())
//     // .then() accepts another callback function, which accepts the
//     // returned item (the result) )from the previous chain
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log("error: ", err)
//     })


// let myAPIRequest = fetch('https://jsonplaceholder.tyicode.com/todo')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json)
//         myAPIRequest;
//     })
//     .catch((error) => {
//         console.error('Error caught in catch method:', error);
//     });



// MARKS COMPLICATED QUESTION ABOUT RECURRSION THAT I COUDLN'T FIGURE OUT
// let number = 0;
// let url = "";
//
// let myTodosRequest =
//     fetch(`https://jsonplaceholder.typicode.com/todos`)
//     .then(response => response.json())
//     .then(json => {
//         console.log(json)
//         return "hello";
//     })
//         .catch(err => {
//             console.log(err)
//         })
//
// function startApp(fn){
//     fn()
// }
//
// startApp(myTodosRequest);




// CUSTOM PROMISES
// we can create custom promises using the Promise object by
// initializing a new Promise object


// const myPromise =
//     new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let randomNum = Math.random()
//         if (randomNum > 0.5) {
//             console.log("random number: ", randomNum );
//             resolve();
//         } else {
//             reject();
//             console.log("random number: ", randomNum );
//         }
//     }, 2500);
// });
//
// console.log(myPromise); // a pending promise
//
// myPromise.then(() => console.log('resolved!'));
// myPromise.catch(() => console.log('rejected!'));

// custom promise
// instantiate it

// new - new keyword allows us to create a new instance of an object
// template
// let myCustomPromise = new Promise(
//     function (resolve, reject) {
//             setTimeout(() => {
//         let randomNum = Math.random()
//         if (randomNum > 0.5) {
//             console.log("random number: ", randomNum );
//             console.log('THIS IS A SUCCESS')
//             resolve(); // triggering the resolve function
//         } else {
//             reject(); // execute the rejection function
//             console.log("random number: ", randomNum );
//             console.log("THIS IS A FAILURE")
//         }
//     }, 3000);
//     }
// )

// fetch() .then() catch()
// console.log(myCustomPromise)
// myCustomPromise.then(res => {console.log(res)})
// myCustomPromise.catch(err => console.log(err))


// // promise structure, sortA
// function promiseStructure (
//     // callback function: executor
//     function(
//         // 1st param
//         // callback function - resolved
//         function(){},
//         // 2nd param
//         // callback function - rejected
//         function(){}
//     ){
//
//     }
// ){
//     // executor code
// }


// const promise1 = new Promise(
//     (resolve, reject) => {
//         resolve("this is confusing")
//         // setTimeout(() => {
//         //     resolve('foo');
//         // }, 3000);
//
//     }
// );
//
// promise1.then(
//     (value) => {
//     console.log(value);
//     // expected output: "foo"
// });
//
// console.log(promise1);
// // expected output: [object Promise]











