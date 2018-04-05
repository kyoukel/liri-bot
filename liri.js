require("dotenv").config();

const keys = require('./keys.js')
const Spotify = require('node-spotify-api')
const Twitter = require('twitter')


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

let [one, two, command, ...params] = process.argv;
console.log(command);

switch (command) {
    case "my-tweets":
        console.log("my tweets was called")
        break
    case "spotify-this-song":
        console.log("this song rocks!")
        break
    case "movie-this":
        console.log("Love this movie!")
        break
    case "do-what-it-says":
        console.log("do the chicken dance!")
        break
}    

// create function and pass params into function