// Create a Person object type. From this object type, extend an Adult object type and a 
// Child object type. Each of these object types should have attributes and methods pertinent to what 
// they describe. Also create a Family object that stores instances of children and adults. 
// Make sure to write code afterwards that creates instances of these objects to make sure that what 
// you've written works well and you're able to store the necessary data in each object.

// function Person(head, eyes){
// 	this.head = head;
// 	this.eyes = eyes;
// 	this.looks = function(distance){
// 		var myDistance = distance || 1;
// 		return "You look" + distance + "feet ahead.";
// 	}

// }

// 	var myPerson = new Person ("Male","White");
// 	var howFar = myPerson.looks(15);

// 	myPerson.shouts = function (){

// 	}

// 	Person.prototype.shouts = function(){
// 		return this.head + "shouted!";
// 	}

// 	function Baby(head,eyes,ears){
// 		this.ears = ears;
// 		Person.apply(this,arguments);
// 	}

// 	Baby.prototype = Object.create(Person.prototype);

// 	var myBaby = new Baby ("Diapers","Pampers","Dirty");

// 	Person.prototype.scream = function(){
// 		return "Screamed."	
// 	}

// function Album(albumName){
// 	this.albumName = albumName;
// 	this.photos = [];
// 	this.addPhotos = function(fileName,location){
// 	var newPhoto = new Photo(fileName,location);
// 	this.photos.push(newPhoto);
// 	}
// 	this.listPhotos = function(){
// 		for(var index=0; index<this.photos.length ; index++)
// 			console.log(this.photos[index].fileName);
// 	}

function Person(name,gender,age){
	this.name = name;
	this.gender = gender;	
	this.age = age;

}

// Create an Adult constructor that inherits from Person
// Then make sure that the Adult prototype inherits from the Person Prototype
function Adult(lastName){
	this.lastName = lastName;
	this.members = [];
	// this.addMember = function(personObject){
	// var newMember = new Member (name,gender);
	// this.listMembers.push(newMember);
	// }
	// this.listMembers = function(){
	// 	for (var index=0; index<this.members.length ; index++)
	// }
// Create a Child constructor that inherits from Person
// Then make sure that the Child constructor inherits from the Person Prototype


function Child(lastName){
	this.lastName = lastName;
	this.members = [];
	this.addMember = function(personObject){
		var newMember = new Member (name,gender);
	this.listMembers.push(newMember);
	}
	this.listMembers = function(){
		for (var index=0; index<this.members.length ; index++)
	}
// Do a prototype here!!!!!

// ---------------------------------

function Family(lastName){
	this.lastName = lastName;
	this.members = [];
	this.addMember = function(personObject){
		// code to push a new person into the members array (see album/song example!)
	}
}
// I think I need to add  a for loop here to push a new person in the members array


var family = new Family("Weidner");
	var george = new Adult("George Weidner","Male",85, "retired")
	family.addMember(george);
	var ann = new Adult("Ann Weidner","Female",75,"retired");
	family.addMember(ann)
	var george = new Adult("Tank Weidner","Male",60, "working");
	family.addMember(tank)
	var george = new Adult("Gina Weidner","Female",57, "working");
	family.addMember(gina)
	var george = new Adult("Trina Weidner","Female",27, "working");
	family.addMember(trina)
	// change all of this to pass a person OBJECT to the add member function

// Create a new FAMILY, and push all of these members to the new family!!
var family  = new Child ("Weidner");
	var george = new Child("Frank Weidner","Male",6, "school")
	family.addMember(frank);
	var george = new Child("Fergie Weidner","Female",4, "home")
	family.addMember(fergie);
	var george = new Child("David Weidner","Male",5, "school")
	family.addMember(david);
	var george = new Child("Beyonce Weidner","Female",2, "home")
	family.addMember(beyonce);
	var george = new Child("Kim Weidner","Female",10, "school")
	family.addMember(kim);
	
	







