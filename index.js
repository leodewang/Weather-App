//request to get API
const request = require("request");
//yargs package to take user input arguments from command terminal
const argv = require("yargs").argv;

let apiKey = "fecf8ff18bd22c01d71c3cbb58af5066";
//if user doenst give city, set default to los angeles
let city = argv.c || "los angeles";
//Weather API
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(url, function(err, response, body) {
  if (err) {
    //if error return error
    console.log("error:", error);
  } else {
    let weather = JSON.parse(body);
    let message = `In ${weather.name}, it is ${weather.main.temp} degrees`;
    console.log(message);
  }
});
