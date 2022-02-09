// $.get("http://api.openweathermap.org/data/2.5/weather?APPID=" + WEATHERMAP_TOKEN + "&q=Berlin,+DE" + "&units=metric")
//     .done(data => {
//         console.log(data);
//         let container = $(".container");
//         let temp = data.main.temp;
//         container.append(`<h5>${data.name}</h5><p>Here's the temp: </p> <h4>${temp}</h4> in celsius. `);
//     })
//
// // $.get("http://api.openweathermap.org/data/2.5/weather?APPID=" + WEATHERMAP_TOKEN + "&q=Honolulu,+HI" + "&units=metric")
// //     .done(data => {
// //             console.log(data);
// //             let container = $(".container");
// //             let city = `<h5>${data.name}</h5>`;
// //             let temp = data.main.temp;
// //             let forecast = "<p>Here's the temp: </p>" +
// //                 container.append(`<h5>${data.name}</h5><p>Here's the temp: </p> <h4>${temp}</h4> in celsius. `);
// //     })

$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${51.1657}&lon=${10.4513}&appid=${WEATHERMAP_TOKEN}`)
    .done(function (weather) {
        console.log(weather);
        $(".container").append(`<p>${weather.main.sea_level}</p>`)
    })





















