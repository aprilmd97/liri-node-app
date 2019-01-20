
var fs = require("fs");

require("dotenv").config();

var keys = require("./key.js");
var Spotify = require('node-spotify-api');

// var spotify = new Spotify({
//     id: keys.spotify.id,
//     secret: keys.spotify.secret
// });

var spotify = new Spotify(keys.spotify);



// var bandsintown = require('bandsintown')('codingbootcamp');


if (process.argv[2] === 'spotify-this-song') {

    // var song = process.argv.length.join(" ");
    // this processes all characters as a single argument

    var song = process.argv.slice(3, process.argv.length).join(" ");

};

if (!process.argv[2] || !process.argv[3]) {

   var song = "The Sign Ace Of Base";
};

// if (process.argv[2] === 'concert-this') {
//     var artist = process.argv.slice(3, process.argv.length).join(" ");
// };

// bandsintown
//     .getArtistEventList(artist)
//     .then(function (response) {
//         // return array of events
//         console.log(JSON.stringify(response));
//     }).catch(function (err) {
//         console.log(err);
//     });

spotify
    .search({ type: 'track', query: song, limit: '5' })
    .then(function (response) {

        fs.appendFile("log.txt", song + " ", function (err) {

            if (err) {
                console.log(err);
            } else {
                console.log("Added to Log!");
            };

        });

        response.tracks.items.forEach(function (number) {

            console.log(" ");
            console.log("Artist(s): " + number.album.artists[0].name);
            console.log("Song Name: " + number.name);
            console.log("Spotify Preview: " + number.preview_url);
            console.log("Album: " + number.album.name);

        });
        // console.log("Artist(s): ", JSON.stringify(response.tracks.items[0].album.artists[0].name, null, 2));
        // console.log("Song Name: ", JSON.stringify(response.tracks.items[0].name, null, 2));
        // console.log("Spotify Preview: ", JSON.stringify(response.tracks.items[0].preview_url, null, 2));
        // console.log("Album: ", JSON.stringify(response.tracks.items[0].album.name, null, 2));

    })
    .catch(function (err) {
        console.log(err);
    });





