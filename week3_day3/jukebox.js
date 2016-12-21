
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
		this.pause();
		document.getElementById(song.id).play();
		this.currentSong = song;
		// document.ElementById('current-song').innerHTML = song.songName;
	}
	this.pause = function () {
		console.log('Made it to pause song');
		if (this.currentSong!=""){
			document.getElementById(this.currentSong.id).pause();
		}
	}
	this.stop = function () {}
	this.shuffle = function () {}
	this.addSong = function (song){
	this.songs.push(song);
	}
}

function Song (songName, fileName, id) {
	this.songName = songName;
	this.fileName = fileName;
	this.id = id;
	this.queue = false;
}

function playSong(song){
	bob.play(song);
	document.getElementById("current-song").innerHTML = song.songName;

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
	// randomSongIndex =generate a random number from 0 to maximum songs array length
	var randomNumberIndex = Math.floor(Math.random()* (bob.songs.length));
	console.log("random index is: "+randomNumberIndex);
	var randomSong = bob.songs[randomNumberIndex];
	playSong(randomSong);
}

// function playSound(song) {
//     var thissound = document.getElementById();
//     thissound.play();
// }

// function stopSound(song) {
//     var thissound=document.getElementById();
//     thissound.pause();
//     thissound.currentTime = 0;
// }
var bob = new Jukebox();

var wishSong = new Song("Wish", "wish.mp3", 'wish');
var highwaymanSong = new Song("Highwayman", "highwayman.mp3", 'highwayman');
var sixteenSong = new Song("16", "16.mp3", '16');
var commonSong = new Song("Common", "common.mp3", 'common');
// var song2 = new Song("sn2", "fn");
// var song3 = new Song("","");

bob.addSong(wishSong);
bob.addSong(highwaymanSong);
bob.addSong(sixteenSong);
bob.addSong(commonSong);

// for(i=0; i<bob.songs.length; i++){
	bob.play(bob.songs[0]);
	
// }
// bob.play(bob.songs[0]);
// bob.play(bob.songs[1]);











