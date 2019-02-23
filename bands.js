var axios = require("axios");
var fs = require("fs");
var moment = require('moment');

var Band = function () {
    this.findBand = function (artist) {
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
        axios.get(URL).then(function (response) {
            // Place the response.data into a variable, jsonData.
            var jsonData = response.data[0];

            // showData ends up being the string containing the show data we will print to the console
            var showData = [
                "Name of Venue: " + jsonData.venue.name,
                "Venue Location: " + jsonData.venue.city + ", " + jsonData.venue.country,
                "Date: " + moment(jsonData.datetime).format("MM/DD/YYYY")
            ];
            
            console.log(showData);

        });
    };
    
    this.defaultBand = function () {
        var URL = "https://rest.bandsintown.com/artists/Maroon 5/events?app_id=codingbootcamp"
        axios.get(URL).then(function (response) {
            // Place the response.data into a variable, jsonData.
                // Place the response.data into a variable, jsonData.
                var jsonData = response.data[0];
    
                // showData ends up being the string containing the show data we will print to the console
                var showData = [
                    "Name of Venue: " + jsonData.venue.name,
                    "Venue Location: " + jsonData.venue.city + ", " + jsonData.venue.country,
                    "Date: " + moment(jsonData.datetime).format("MM/DD/YYYY")
                ];
                
                console.log(showData);
    
            });
        };
        
}

module.exports = Band;