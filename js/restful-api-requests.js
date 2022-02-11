console.log("--------------------------------")
console.log("RESTful API Requests");
console.log("--------------------------------")

// fetch GET request

// Headers:
// // CONTENT-TYPE: application/json
// fetch("api/url", {
//     //  does it send and return json format
//     content-type: 'application/json'
// })

// METHOD TYPE - WHAT KIND OF ACTION DO YOU WANT TO TAKE WITH THE API
// GET, POST, PUT, DELETE, PATCH
// GET - GETTING information (reading)
// what's required for a GET request
// - url + endpoint
// - api token
// - sometimes an id of something
// WHAT WILL THE RESPONSE BE LIKE?
// - response object => response.json()
// {"id": 4, "username": "laura"}

// POST - adding information/ pushing data into the API (writing)
// what's required when making a POST request
//  - url  + endpoint
//  - what we're adding - JSON OBJECT
// WHAT WILL THE RESPONSE BE LIKE?
// - confirmation is not guaranteed
// response object --> res => res.json() --> res.status || res.ok
// err if err
// how can we confirm if it was posted successfully?
// - we can either make a second get request after the post request was
// made
// - we can look into the data/api itself  --> if you have access to it
// - trusting the status of the response



// PUT - changes something that's already on the API (editing)
//  what should be sent with a PUT request?
// - identify the data you're changing (what you're changing)
// - what you're changing to -- JSON object
// WHAT WILL THE RESPONSE BE LIKE?
// don't get actual data back, have to check the status or make another
// GET request to see if it updated.


// DELETE - delete a specific data from the API
// what's required to make a DELETE requets
//  - id of the thing you're deleting
// WHAT WILL THE RESPONSE BE LIKE?
// response obj => res => res.json() => res.status



// // EXAMPLE API - SUPER SIMPLIFIED
// {
//     'stars': 4,
//     'name': 'mcdonalds',
//     'location': 'everywhere'
//     'id': 001
// }


// access key (headers)

// request body
// data to be added

// POST

// url
// content being added - json
// token - possibly
// endpoint - possibly
// method type - specify that we're making a POST request

// const url = 'https://codeup-restful-example.glitch.me/reviews';
// const reqBody =  {
//     "id": 248,
//     "restaurant_id": 1,
//     "name": "Laura",
//     "createdAt": 1504095567183,
//     "updatedAt": 1504095567183,
//     "rating": "5",
//     "comments": "LAURA WAS HERE"
// }
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(reqBody)
// };
//
// // POST
// fetch(url, options)
//     .then(res => res.json())
//     .then(jsonObj => console.log(jsonObj))
//



fetch('https://codeup-json-server.glitch.me/movies', {
    method: 'POST',
    body: JSON.stringify(    {"title": "SIRIUS",
        "director": "SIRIUS",
        "year": "2022",
        "genre": "ROMCOM",
        "actors": "EVERYONE",
        "plot": "SCARY",
        "rating": "5",
        "poster": "https://m.media-amazon.com/images/M/MV5BNGMwNGI0NzAtY2U1Zi00MTI3LTk2NWQtMTU0ZmQ3OGZmMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY1200_CR86,0,630,1200_AL_.jpg",
        "id": 255
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));



// ~~~~~~~~~~~~~~~~~~~~~`


// DELETING A SPECIFIC MOVIE

// unique id of the thing we're deleting
// how user is going to delete -- > button to click on
// button event listener
// on event trigger --> delete from API
// delete from API --> FETCH DELETE REQUEST
// -- what does that fetch delete request require?
// where is the data located? --> url
// unique id of the thing we're deleting --> end of url after endpoints
// options (2nd parameter)
// // method type: DELETE
// before the fetch method --> grab the id of the movie that's being
// clicked on  // data-id (attribute)








