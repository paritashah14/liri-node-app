// the new change for code to grab the key
var fs = require('fs');
//twitter npm from the documention
var twitter = require('twitter');
//spotify npm from the documention  (new spotify)
var Spotify = require('node-spotify-api');
// OMDB request for API need a key given in class
var request = require('request');
//basically loops through the command line arguments passed in the terminal while executing the file tweets, spotify, movie.
var command = process.argv[2];

// Getting Twitter Keys from keys.js file 
var twitterKeys = fs.readFile('keys.js', 'utf8', (err, data) =>{
	if(err) throw err;
});
var twitterKeys = require('./keys');


// Twitter from npm documentation
if (command === 'my-tweets'){
	// twitter keys stored in variable named client
	var client = new twitter(
		twitterKey.twitterKeys
	);
	// 
	var twittertweets = {screen_name: 'rutgersshah'};
	client.get('statuses/user_timeline', twittertweets, function(error, tweets, response) {
  if (error) {
    
  }
  
});
}

// Spotify from the npm documention from new spotify steps client id/secret
if (command === 'spotify-this-song'){
	// song title
	var songSearch = process.argv[3];
	var spotify = new Spotify({
  		id: 'de34deec9fbb44ca8aca101d69a22beb',
 		secret: '532dcf12e95f43919967d7579626dc4e'
	});
 
	spotify.search({ type: 'track', query: songSearch }, function(err, data) {
  		if (err) {
    	return console.log('Error occurred: ' + err);
  	}
console.log('The Artist: ' + data.tracks.items[0].album.artists[0].name);
console.log('Song Title: ' + data.tracks.items[0].name);
console.log('Preview the Song: ' + data.tracks.items[0].preview_url);
console.log('The Album: ' + data.tracks.items[0].album.name);
});
}

// OMDB

if (command === 'movie-this'){
//OMDB API Key given in class
var omdbKey = "40e9cece";
//returns an array containing the command line arguments passed 
//http://www.omdbapi.com/?apikey='from the omdb site usage section
request('http://www.omdbapi.com/?apikey=' + omdbKey + '&t=' + inputSearch, function (error, response, body) {
	console.log('error:', error); 
	console.log('statusCode:', response); 
	console.log('body:', body); 
});
};
