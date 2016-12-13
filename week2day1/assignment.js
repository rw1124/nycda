function add(a,b){
	var answer = a + b;

	console.log(answer);
	return answer;
}

function subtract(a,b){
	var answer = a - b;
	
	console.log(answer);
	return answer;
}

function multiply(a,b){
    var answer = a * b;
	
	console.log(answer);
	return answer;
}

function divide(a,b){
	var answer = a / b;
	
	console.log(answer);
	return answer;
}



var a = add(5,6);
var b = subtract(12,2);
var c = add(a,b);

var x = multiply(5,6);
var y = divide(80,12);
var z = multiply(x,y);

console.log(`The variable c is equal to ${c} and the variable z is equal to ${z}`);

