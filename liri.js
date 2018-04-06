// require data to set up dotenv configuration.
require("dotenv").config();

// set constant variable to pull from/require the data/text inside keys.js file.
const keys = require('./keys.js')
// set constant variable to require data from the spotify api / npm spotify pkg.
const Spotify = require('node-spotify-api')
// constant variable to require data from npm twitter pkg.
const Twitter = require('twitter')

// set variable to pull data from the spotify keys / spotify ID.
var spotify = new Spotify(keys.spotify);
// set variable to pull data from the twitter consumer/access keys.
var client = new Twitter(keys.twitter);

// set 3rd param to take command, and the rest is input to equal the process.argv****DEFINE THIS LATER*****
let [one, two, command, ...input] = process.argv;
console.log(command); // print the command to the console.

// ***DEFINE THIS LATER -- NEED VAR INPUT OR LET/CONST 1ST??? ***
input = input.join(" ")

// ***LOOK THIS UP ***
var fs = require('fs')

// using switch, case and break in replacement of if/else statements to console.log commands
switch (command) {
    case "my-tweets":
        console.log("my tweets was called") // WORKS!
        break
    case "spotify-this-song":
        console.log("this song rocks!") // WORKS!
        break
    case "movie-this":
        console.log("Love this movie!") // WORKS!
        break
    case "do-what-it-says":
        console.log("do the chicken dance!")  // WORKS!
        break
}    

// *** WHAT DOES THIS DO? ---TYPE COMMAND FOLLOWED BY MORE TEXT/INPUT & JUST PRINTS TO THE SCREEN??? *****
let liri = {
        commands: (my_tweets, spotify_this, movie_this, do_what_it_says, input) => {
            liri.my_tweets(input)
            liri.spotify_this(input)
            liri.movie_this(input)
            liri.do_what_it_says(input)
        // },

// Added credentials. Using environment variables to keep info private and safe.        
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });
  // set params to equal to my twitter screen name & grab my tweets from my timeline. - All 20 were grabbed without setting a limit.
  //***I CREATED A DUMMY ACCOUNT & ONLY ENTERED 20 TWEETS --- HOW DO I LIMIT TO 10 TWEETS??? *****
  var params = {screen_name: 'kmy_ucsd'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets); // print my timeline tweets to the console.
    }
  });

    // THIS IS ROB'S CODE FOR TWITTER TWEETS -- **** UNSURE HOW TO GET IT TO WORK FOR MY CODE *****
//         my_tweets: (input) => {
//             console.log("hi")
//             var params = {screen_name: 'kmy_ucsd',
//                 count: 20
//             };
//             client.get('statuses/user_timeline', params, function (error, tweets, response) {
//                 if (!error) {
//                     console.log("Last 20 Tweets");
//                     for (i = 0; i < tweets.length; i++) {
//                         console.log(i + 1 + ". " + tweets[i].text)
//                         fs.appendFile('./log.txt', i + 1 + ". " + tweets[i].text, 'utf8', (error) => {
//                             if (error) throw err;
//                         })
//                     }
//                 } else {
//                     console.log(error)
//                 }
//             });
//         }
// }

