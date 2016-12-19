var petnames = "Tyson";

var toes = 10;

var tired = false;

var fruits = ['banana','apple','orange'];

var friends = [['Eric', 'blue'], ['Rachel', 'green'], ['Jen','gray']];

var person = { name: 'Eric', toes: '10', hairColor: 'blonde'}
	console.log("Your buddy person.name has person.toes and his hair is person.hairColor");
	console.log(person.name);
	console.log(person)

function squared(a){
	var answer = a * a;

	console.log(answer);
	return answer;
}

function area(length, width){
	var answer = length * width;

	console.log(answer);
	return answer;
}




var square = squared(6);
console.log(square);

var area = area(9,5);
console.log(area);

console.log(fruits.reverse());


var selectedDoor = prompt("which door do you choose? 1, 2 or 3?");

if(selectedDoor == 1){
	alert("you've won a car");
}
else if(selectedDoor == 2){
	alert("you've won a horse");
}
else if (selectedDoor == 3){
	alert("you've won a spaceship");
}

	

