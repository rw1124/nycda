function takeFirst3LettersOfLastName(){

	var firstThreeLast = $('#last').val()
	return firstThreeLast;
}

function takeFirst2LettersOfFirstName(){
	
	var firstTwoFirst = $('#first').val();
	return firstTwoFirst; 
}

function takeFirst2LettersMomsFirstName(){
	
	var firstTwoMom = $('#momsName').val();
	return firstTwoMom; 
}
function takeFirst3LettersOfBirthCity(){
	
	var firstThreeBirth = $('#birth').val();
	return firstThreeBirth;  
}

function getYourJediName(){
	var first3LettersOfLastName = takeFirst3LettersOfLastName();
	var first2LettersOfFirstName = takeFirst2LettersOfFirstName();
	var first2LettersMomsFirstName = takeFirst2LettersMomsFirstName();
	var first3LettersOfBirthCity = takeFirst3LettersOfBirthCity();
	// var fullName =
	var getyourJediName = $('#jediName').val();
	return getYourJediName;
}



$(document).ready(function(){

	$('#last').onInput(first3LettersOfLastName);
	$('#first').onInput(first2LettersOfFirstName);
	$('#momsName').onInput(first2LettersMomsFirstName);
	$('#birth').onInput(first3LettersOfBirthCity);
	$('#jediName').val()
})

	

