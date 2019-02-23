require("dotenv").config();

var axios = require("axios");
var fs = require("fs");
var Spotify = require('node-spotify-api');

//spotify keys info
var keys = require("./key.js");
var spotify = new Spotify(keys.spotify);



var Music = function () {

    this.findSong = function (track) {
        spotify.search({ type: 'track', query: track, limit: 1 })
            .then(function (response) {

                var jsonData = response.tracks.items[0];

                var showData = [
                    "Artists: " + jsonData.artists[0].name,
                    "Song Name: " + jsonData.name,
                    "Preview Link: " + jsonData.preview_url,
                    "Album: " + jsonData.album.name
                ];

                console.log(showData);
                //console.log(response.tracks.items[0].artists[0].name); artists name
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    this.defaultSong = function () {
        spotify.search({ type: 'track', query: 'The Sign' })
            .then(function (response) {
                var songs = [];
                songs = response.tracks.items;


                for (var i = 0; i < songs.length; i++) {
                    if (songs[i].name == 'The Sign') {
                        for (var j = 0; j < songs[i].artists.length; j++) {
                            if (songs[i].artists[j].name == 'Ace of Base') {
                                var showData = [
                                    "Artist: " + songs[i].artists[j].name,
                                    "Song Name: " + songs[i].name,
                                    "Preview Link: " + songs[i].preview_url,
                                    "Album: " + songs[i].album.name

                                ];

                                console.log(showData);
                            }
                        }
                    }
                }


            })
            .catch(function (err) {
                console.log(err);
            });
    };
    

};



module.exports = Music;
