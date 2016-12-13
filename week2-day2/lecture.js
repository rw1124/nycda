// we need an array of numbers
// we need to reverse the array
// if else statement that checks to see of the numbers is greater or less than ten
// alert log the result
// this should be inside a for loop


// Globally Scoped
var numbers = [0, 20, 56,678]

// Locally scoped

// function numberTest (something) because this is in the function
// var numbers = "0,1,2,3"
numbers.reverse();

for(var i = 0; i < numbers.length; i++){
	if(numbers[i] < 10 ){
		console.log("Less is more");
	}else {
		console.log("More is better")
	}

}

function changeHeader(){
	var textInputValue = document.getElementById('text-input').value;

	var newHeader = "This is the new header text";

	var header = document.getElementById('header');

	header.innerText = newHeader;
}

