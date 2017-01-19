function takeFirst3LettersOfLastName(){

	var firstThreeLast = $('#last').val()
	console.log(firstThreeLast)

	return firstThreeLast;
}

function takeFirst2LettersOfFirstName(){
	
	var firstTwoFirst = $('#first').val();
	console.log(firstTwoFirst)

	return firstTwoFirst; 
}

function takeFirst2LettersMomsFirstName(){
	
	var firstTwoMom = $('#momsName').val();
	console.log(firstTwoMom)

	return firstTwoMom; 
}
function takeFirst3LettersOfBirthCity(){
	
	var firstThreeBirth = $('#birth').val();
	console.log(firstThreeBirth)

	return firstThreeBirth;  
}

function getYourJediName(){
	var last = takeFirst3LettersOfLastName();
	var first = takeFirst2LettersOfFirstName();
	var mom = takeFirst2LettersMomsFirstName();
	var birth = takeFirst3LettersOfBirthCity();
	
	var jediName = `${last}${first} ${mom}${birth}`;
	var getyourJediName = $('#jediName').val('last' + 'first' + 'mom' + 'birth');

	// return getYourJediName;
	console.log(jediName)

	return getyourJediName ;
}



$(document).ready(function(){

	$('#last').on('input', takeFirst3LettersOfLastName);
	$('#first').on('input', takeFirst2LettersOfFirstName);
	$('#momsName').on('input', takeFirst2LettersMomsFirstName);
	$('#birth').on('input', takeFirst3LettersOfBirthCity);
	$('#jediName').val();
})

	

