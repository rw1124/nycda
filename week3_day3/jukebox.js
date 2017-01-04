function Jukebox () {
	this.songs = [];
	this.currentSong = "";
	this.increaseVolume = function () {
		if (this.currentSong!="") {
		document.getElementById(this.currentSong.id).volume+=0.1;
		}
	}
	this.decreaseVolume = function () {
		if (this.currentSong!="") {
			document.getElementById(this.currentSong.id).volume-=0.1;
		}
	}
	this.play = function (song) {
		console.log(song);
		this.pause();
		this.currentSong = song;
		songToPlay = song;
		console.log("SongToPlay");
		console.log(songToPlay);
		document.getElementById(song.id).play();
		console.log("Starting: "+this.currentSong.songName+" at "+document.getElementById(this.currentSong.id).currentTime);
		document.getElementById("current-song").innerHTML = song.songName;

	}
	this.pause = function () {
		console.log('Made it to pause song');
		if (this.currentSong!=""){
			if (!document.getElementById(this.currentSong.id).paused){
				document.getElementById(this.currentSong.id).pause();
			}
			// setTimer to allow pause to complete action -- can throw DOM promise exception occassionally
			setTimeout(function(){},150);
			console.log("Pausing: "+this.currentSong.songName+" at "+document.getElementById(this.currentSong.id).currentTime);
		} else {
			console.log("Nothing to pause");
		}
	}
	this.stop = function () {
		console.log('Made it to stop song');
		this.pause();
		// reset start point to zero
		var currentSongElement = document.getElementById(this.currentSong.id)
		currentSongElement.currentTime = 0;
		console.log("Stop currentTime = "+ currentSongElement.currentTime);
	}
	this.shuffle = function () {
		// randomSongIndex =generate a random number from 0 to maximum songs array length
		var randomNumberIndex = Math.floor(Math.random() * (this.songs.length));
		console.log("random index is: "+randomNumberIndex);
		var randomSong = this.songs[randomNumberIndex];
		// reset current song to start a begining if one was playing
		if (this.currentSong!=""){
			this.stop();
			console.log(this.currentSong.songName+" is reset to " + document.getElementById(this.currentSong.id).currentTime);
		}
		this.play(randomSong);
	}
	this.addSong = function (song){
	this.songs.push(song);
	}
}

function Song (songName, artist, id) {
	this.songName = songName;
	this.artist = artist;
	this.id = id;
	this.queue = false;
	this.getElement = function(){
		return document.getElementById(this.id)
	}
}

function playSongWithReset(song){
	if (bob.currentSong!=""){
		bob.stop();
	}
	bob.play(song);
}

function playSong(song){
	bob.play(song);
}

function stopSong(){
	bob.stop();
}

function pauseSong(){
	bob.pause();
}

function increaseVolume() {
	bob.increaseVolume();
}

function decreaseVolume() {
	bob.decreaseVolume();
}

function shuffle() {
	bob.shuffle();
}

function toggleImg(){
	if (document.body.style.backgroundImage == 'url("HyperDerby.jpg")'){

		document.body.style.backgroundImage = 'url(https://i.scdn.co/image/4c7a0b089f59e0b635a84ddc431ca8d1ed128345)';
	} else {
		document.body.style.backgroundImage = 'url("HyperDerby.jpg")';
	}
	return false
}
function toggleImg1(){
	if (document.body.style.backgroundImage == 'url("HyperDerby.jpg")'){

		document.body.style.backgroundImage = 'url(https://i.scdn.co/image/8b56d7be709a8d918d8aaef1145a4fc787cfe52a)';
	} else {
		document.body.style.backgroundImage = 'url("HyperDerby.jpg")';
	}
	return false
}

function toggleImg2(){
	if (document.body.style.backgroundImage == 'url("HyperDerby.jpg")'){

		document.body.style.backgroundImage = 'url(https://i.scdn.co/image/76214c6e85b9c5fb33dad204734c831188359e74)';
	} else {
		document.body.style.backgroundImage = 'url("HyperDerby.jpg")';
	}
	return false
}

function toggleImg3(){
	if (document.body.style.backgroundImage == 'url("HyperDerby.jpg")'){

		document.body.style.backgroundImage = 'url(https://i.scdn.co/image/017965c5948195535a93c0588cd3b9e28d5aa8c1)';
	} else {
		document.body.style.backgroundImage = 'url("HyperDerby.jpg")';
	}
	return false
}


var bob = new Jukebox();

var fireandrainSong = new Song("Fire And Rain", "James Taylor", 'fireandrain');
var doctormyeyesSong = new Song("Doctor My Eyes", "Jackson Browne", 'doctormyeyes');
var howdoyafeeltonightSong = new Song("How Do Ya Feel Tonight", "Bryan Adams",'howdoyafeeltonight');
var ohbabewhatwouldyousaySong = new Song("Oh Babe, What Would You Say?", "Hurricane Smith",'ohbabewhatwouldyousay');

// These are the sample song variables

var fireandrainsampleSong = new Song("Fire And Rain Sample", "James Taylor", 'fireandrainsample');
var doctormyeyessampleSong = new Song("Doctor My Eyes Sample", "Jackson Browne", 'doctormyeyessample');
var howdoyafeeltonightsampleSong = new Song("How Do Ya Feel Tonight Sample", "Bryan Adams",'howdoyafeeltonightsample');
var ohbabewhatwouldyousaysampleSong = new Song("Oh Babe, What Would You Say? Sample", "Hurricane Smith",'ohbabewhatwouldyousaysample');

bob.addSong(fireandrainSong);
bob.addSong(doctormyeyesSong);
bob.addSong(howdoyafeeltonightSong);
bob.addSong(ohbabewhatwouldyousaySong);

// These are the sample song variables

bob.addSong(fireandrainsampleSong);
bob.addSong(doctormyeyessampleSong);
bob.addSong(howdoyafeeltonightsampleSong);
bob.addSong(ohbabewhatwouldyousaysampleSong);

$(document).ready(function() {
songToPlay = bob.songs[0];
document.body.style.backgroundImage = 'url("HyperDerby.jpg")'
	// songToPlay = bob.shuffle();

	$('.sample').hover(function(){
		toggleImg();
	});

	$('.sample1').hover(function(){
		toggleImg1();
	});

	$('.sample2').hover(function(){
		toggleImg2();
	});

	$('.sample3').hover(function(){
		toggleImg3();
	});
});

var spotifyResponse;
var trackId;
var trackInfo;
var artistInfo;
var albumInfo;
var previewUrl;
var artistId;

$.ajax({
    method: "GET", // optional, GET by default, also takes POST,    
                   // PUT, DELETE. We'll learn more about what these methods
                   // mean later in the course.
    url: "https://api.spotify.com/v1/search", // The API URL you're 
                                              // requesting information from
    data: { // An object that contains other information 
            // you need to send with your request
        type: "track", // type and q (the query) are 
                       // both required to make this request
        q: "doctor my eyes" // per the API documentation.
                       // type can be 'track', 'artist', or 'album'
    },
    success: function(response){  // This function will run
      spotifyResponse = response; // once you get a successful
      console.log(response)       // response from the API!
      // fireAndRainSong.albumArtUrl = spotifyResponse.tracks.items[0].images[0]; this would get the most updated art from the API
    }
});


// var trackId = spotifyResponse.tracks.items[0].id;
// var trackInfo;

// // This time, I only need to set the url and my success callback!
// // 'method' defaults to 'GET', so we don't need to tell it, 
// // and we send the ID as part of the URL (note my string interpolation).
// $.ajax({
//     url: `https://api.spotify.com/v1/tracks/${trackId}`, 
//     success: function(response){
//       trackInfo = response;
//       console.log(response)
//     }
// }).done(function(){
//   spotifyResponse.tracks.items.forEach(function(item){
//       console.log(item.name);
//   });
//   spotifyResponse.tracks.items.forEach(function(item){
//       console.log(item.id);
//  });
// });

// var trackId = "3QcuZo6WLcFkqqLmDs0d95";
// // This time, I only need to set the url and my success callback!
// // 'method' defaults to 'GET', so we don't need to tell it,
// // and we send the ID as part of the URL (note my string interpolation).
// $.ajax({
//     url: `https://api.spotify.com/v1/tracks/${trackId}`,
//     success: function(response){
//       trackInfo = response;
//       console.log(response)
//     }
//     }).done(function(){
//   previewUrl = trackInfo.preview_url;
//   console.log('previewUrl', previewUrl);
// 	});

// var artistId = trackInfo.artists[0].id;
//   console.log('artistId', artistId);

//   albumId = trackInfo.album.id
//   console.log('albumId', albumId);

//   $.ajax({
//       url: `https://api.spotify.com/v1/artists/${artistId}`,
//       success: function(response){
//         artistInfo = response;
//         console.log(response)
//       }
//   });

// var artistId = "3BmcfKWiJOfURa9PI1jFr4"
// $.ajax({
//     url: `https://api.spotify.com/v1/artists/${artistId}`,
//     success: function(response){
//       artistInfo = response;
//       console.log(response)
//     }
// });

// albumId = "3HoSFsrDuaxgwLUBpC2zUE"

// $.ajax({
//     url: `https://api.spotify.com/v1/albums/${albumId}`,
//     success: function(response){
//       albumInfo = response;
//       console.log(response)
//     }
// });









