function Photo(fileName,location){
	this.fileName = fileName;
	this.location = location;
}

function Album(albumName){
	this.albumName = albumName;
	this.photos = [];
	this.addPhotos = function(fileName,location){
	var newPhoto = new Photo(fileName,location);
	this.photos.push(newPhoto);
	}
	this.listPhotos = function(){
		for(var index=0; index<this.photos.length ; index++)
			console.log(this.photos[index].fileName);
	}
}
// for(var index=0; index<this.photos.length ; index++){
// 	var wildlife = newAlbum("Deer.jpg","Pearsall")
// 	var wildlife = newAlbum("Pig.jpg","Leesville")
// 	var wildlife = newAlbum("Redbird.jpg","Blanco")

// }

var wildlife = new Album ("Wildlife");
wildlife.addPhotos("Deer.jpg","Pearsall");
wildlife.addPhotos("Pig.jpg","Leesville");
wildlife.addPhotos("Redbird.jpg","Blanco");

var whiteboard = new Album ("Whiteboard");
whiteboard.addPhotos("Byrsh.jpg","leftside");
whiteboard.addPhotos("github.jpg","middle");
whiteboard.addPhotos("tags.jpg","rightside");

wildlife.listPhotos();


