

// Objecgt Literal Syntax //
var student = { name: 'Eric', grade: '10', favoriteFood: 'turkey'}
var student = {name: 'Joe', grade: '11', favoriteFood: 'bread'}
	
	student.name
	// "Shannon"
	student['name']
	// "Shannon"

	student.grade
	// 10
	student ['grade']
	// 10

	student['favoriteFood'];
	// student.favoriteFood
	// turkey

	// Constructor function - make the object capitalized
	function Student(name, grade, favoriteFood){
		this.name = name;
		this.grade = grade;
		this.favoriteFood = favoriteFood;

	}


	var jimmy = new Student ("Jimmy", 125, "Fries");
	var george = new Student ("George", 45, "Bacon");


	jimmy.name
	jimmy.grade
	jimmy.favoriteFood

	function Animal(species,color, hair){
		this.species = species;
		this.color = color;
		this.hair = hair;
		this.run = function(){
			return `${species} is running.`
		}
	// .something that is a function is called a "Method"

	}

	Animal.prototype.eat = function(){
		return `${this.species} is eating.`
	}
	
	var cheetah = new Animal("cheetah", "orange and brown");

	cheetah.eat = function() {return `${this.species} is eating.`
	}


	var mouse = new Animal("cheetah", "gray" , true);
	// mouse.eat is not a function

	Animal.prototype.eyes = true;

	var cheetah2 = new Animal("cheetah", "brown and orange")

	function Fish(species, color, finCount){
		this.fins = true;
		this.finCount = finCount;
		Animal.apply(this, arguments);
}
	Fish.prototype = new Animal();
		return "I am a fish so I swim";

	var myFirstFish =  new Fish("Goldfish", "gold", 4);
	}