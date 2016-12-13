function change(){
	document.getElementById('myElement').innerHTML = "My New Text";
}

function promptMe(){
	var name = prompt('What is your name?');
	var greeting = `Hello, ${name}.`;
	document.getElementById('myElement').innerHTML = greeting;
}

var names = [['Mandy', 'Solis'], ['Ross', 'Weidner'], ['Aaron', 'Combs'], ['Guy', 'Davis'], ['Jimmy', 'Nguyen']]

var Ross = { eyeColor: 'hazel', hairColor: 'brown', shoeSize: '10'};

if (5<10){
	console.log(true);
} else {
	console.log(false);
}
var number = 9;
if (number<10){
	console.log("Your number is less than 10");
} else {
	console.log("You got it");
}

var number = prompt('Pick a ${number}');
if (number<10){
	console.log(`Your ${number} is less than 10`);
} else if (number === 10){
	console.log("You got it")
} else{
	console.log(`Your ${number} is greater than 10`);
}




