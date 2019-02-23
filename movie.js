var axios = require("axios");
var fs = require("fs");

var Movie = function () {
    this.findMovie = function (movie) {
        var URL = "http://www.omdbapi.com/?t=" + movie + "&apikey=fd02f9db";
        axios.get(URL).then(function (response) {
            // Place the response.data into a variable, jsonData.
            var jsonData = response.data;

            // showData ends up being the string containing the show data we will print to the console
            var showData = [
                "Title: " + jsonData.Title,
                "Year: " + jsonData.Year,
                "IMDB Rating: " + jsonData.imdbRating,
                "Country: " + jsonData.Country,
                "Language: " + jsonData.Language,
                "Plot: " + jsonData.Plot,
                "Actors: " + jsonData.Actors
                
            ];
            console.log(showData);

        });
    };
    this.defaultMovie = function () {
        var URL = "http://www.omdbapi.com/?t=+Mr.+Nobody&apikey=fd02f9db";
        axios.get(URL).then(function (response) {
            // Place the response.data into a variable, jsonData.
            var jsonData = response.data;

            // showData ends up being the string containing the show data we will print to the console
            var showData = [
                "Title: " + jsonData.Title,
                "Year: " + jsonData.Year,
                "IMDB Rating: " + jsonData.imdbRating,
                "Country: " + jsonData.Country,
                "Language: " + jsonData.Language,
                "Plot: " + jsonData.Plot,
                "Actors: " + jsonData.Actors
                
            ];
            console.log(showData);

        });
    };
}
module.exports = Movie;
