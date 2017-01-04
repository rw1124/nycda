// after lunch acitivity
// Math.floor(Math.random() * 20) + 1;

// 1. Create a variable that generates a random number between 1 and 10.

// var randomNumber = Math.floor(Math.floor() * 10) + 1;

// 2. Creae a variable that holds the result of the prompt of asking someone what nuber they want to guess



 // - wrong (the guess does NOT equal the random number)
 // - right (the guess DOES equal the random nummber)

//  if (randomNumber == guess){ //  this has no way of knowing what the 
//  	alert("You're Right");
//  }	else {
//  	alert("ERRRR.");
//  }

function guessingGame(){

	var randomNumber = Math.floor(Math.random() * 10) + 1;
	// console.log(randomNumber);
	var guess = prompt("Guess a number between 1 and 10!");

	console.log(guess);
	if(guess == null){
		return

	} 


	//  for(var i=1; i<=3; i++){
	// 	var guess = prompt("Guess a number between 1 and 10!");
		
	// 	if (randomNumber == guess){
	//  	alert("You're Right");
	//  	return
	//  }	else {
	//  	alert("ERRRR.");
	//  	}
	// }
	// }

	// guessingGame

	while(randomNumber != guess){
		if(randomNumber > guess){
			alert("You're guess is to low!");
		}	else {
			alert("You're guess is to high!");

		}
		// alert("ERRRR.");
		guess = prompt("Guess a number between 1 and 10!");
	}

	alert("You're Right");
}
 	// guessingGame()


