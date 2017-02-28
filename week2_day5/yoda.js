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
	// $('#jediName').val(jediName);
	$('#jediNameLabel').text(jediName);

	// return getYourJediName;
	console.log(jediName)

	return jediName;
}



$(document).ready(function(){

	$('#last').on('input', getYourJediName);
	$('#first').on('input', getYourJediName);
	$('#momsName').on('input', getYourJediName);
	$('#birth').on('input', getYourJediName);
	
})

	

