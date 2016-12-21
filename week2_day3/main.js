function changeHeader(event){
	event.preventDefault();
	console.log(event);

	var firstNameElement = document.getElementById('first-name');

	// grab the value of the first mname input
	// set equalto a variable

	var firstName = firstNameElement.value;
	// grabe the header html element


	var headerHtmlElement = document.getElementById('header');

	headerHtmlElement.innerHTML = firstName; 

	// You can put a welcome not or anything by:
	// headerHtmlElement.innerHTML = "welcome," + firstName + ".";

	// set innerHTML value of the header element 
	// equal to the variable that holds the value
	// of the first name input
}
// document.getElementById('my-form').addEventListener("submit", changeHeader);
// this is one way to us the submit to give you the changeHeader event

// you can also change the "submit" to "click" //

// addEventListener(eventListeningFor,callbackFunction)

// submit
// click

// var changeMe = function(){   another way to change the function

// }

document.getElementById('my-form').addEventListener("click",changeHeader);