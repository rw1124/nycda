function popAlert(){
	alert("whatever");

}


function findH1(){
	console.log(document.getElementsByTagName('h1')[0].innerHTML);

	console.log($('h1').text());


	// console.log(document.getElementById('greeting').innerText);
	// console.log('#greeting')[0].innerText;
	
	console.log($('#greeting').text());

	
}

function changeGreeting(greetingText = ""){
	$('#greeting').text(greetingText)

}

function fadeinH3(){
	$('#hide').fadeIn(1000);
}

function hideThenShowH3(){
	$('#hide').hide(400,fadeInH3);
}

function hideH3(){
	$('#hide').hide(1000);
	// $('#hide').fadeIn();
	// $('#hide').fadeIn("slow");
	// $('#hide').fadeIn(6000);

}
// function hideH3(){ Trial didnt work
// 	$('#hide').fadeIn();
// 	$('#hide').fadeIn("slow");
// 	$('#hide').fadeIn(5000);



$(document).ready(function(){

	findH1();
	setTimeout("changeGreeting('Wonderful Morning')", 3000); 
	// This will change the first greeting that is hard coded and then 3 seconds later change the greeting
	// to the wonderful morning.	
	setTimeout(hideH3, 4000);
	// setTimeout(fadeinH3, 5000); fade in after 5 secs,1 sec after faded out
	// popAlert();	
	// fadeIn(hideH3,8000); trial , didnt work

});

	
