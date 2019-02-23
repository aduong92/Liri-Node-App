var Music = require("./spotify");
var music = new Music();

var Movie = require("./movie");
var movie = new Movie();

var Band = require("./bands");
var band = new Band();

var fs = require("fs");
var array = fs.readFileSync('random.txt').toString().split(",");
var txt1 = array[0];
var txt2 = array[1];

// Write code here to parse command line arguments and store them into variables
userInput = process.argv.slice(2, process.argv.length);
userInput1 = process.argv.slice(3).join(" ");

process.argv.splice(0, 2);
process.argv.splice(0, 3);


if (userInput[0] == 'spotify-this-song') {
    if (userInput1.length) {
        //console.log('bye');
        music.findSong(userInput1);
    }
    else {
        music.defaultSong();
    }
}

if (userInput[0] == 'movie-this') {
    if (userInput1.length) {
        //console.log('bye');
        movie.findMovie(userInput1);
    }
    else {
        movie.defaultMovie();
    }
}

if (userInput[0] == 'concert-this') {
    if (userInput1.length) {
        //console.log('bye');
        band.findBand(userInput1);
    }
    else {
        band.defaultBand();
    }
}

if (userInput[0] == 'do-what-it-says') {
    if (txt1 == 'spotify-this-song') {
        if (txt2.length) {
           
            music.findSong(txt2);
        }
        else {
            music.defaultSong();
        }
    }
    if (txt1 == 'movie-this') {
        if (txt2.length) {
            
            movie.findMovie(txt2);
        }
        else {
            movie.defaultMovie();
        }
    }
    if (txt1 == 'concert-this') {
        if (txt2.length) {
          
            band.findBand(txt2);
        }
        else {
            band.defaultBand();
        }
    }
}