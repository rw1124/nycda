function Car(make,model){
	this.make = make;
	this.model = model;
	this.drive = function(distance){
		var myDistance = distance || 1; 
		// || this is falsy, or function (distance = 1), this would be a default and get you 1, within ()
		return "You drove" + distance + "miles.";
	}
}

var myCar = new Car ("Sable","Mercury");
// myCar.make
// > Sable
// function (distance)
var myCar.drive();
// "You drove  miles."
var myCar.drive(2);
// "You drove 2 miles."

myCar.stop = function(){
	// some code that stops the car
}

// myCar1.stop

car.prototype.stop = function(){
	return "The" + this.make +  "stopped!";
}

myCar.stop();
// "The mercury has stopped"
yourCar.stop();
// YourCar.stop();

function Truck(make,model,towingCapacity){
	this.towingCapacity= towingCapacity;
	Car.apply(this, arguments);
		// when you use arguments this will give you a special object which passes 
		// Parent constructor goes usually on the top - which would be the "car", the truck would be the "child"
		// make sure to have the same arguments and put them first before using the remaining arguments -  -
		// in this case it would hasve been the "towingCapacity"
}

Truck.prototype = Object.create(Car.prototype);
//  this makes a copy of the car prototype -  this is the preferred syntax to combine this prototype

var myTruck = new Truck("Ford","150",6000);

Car.prototype.start = function(){
	return "Started."
}









