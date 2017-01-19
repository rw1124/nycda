// $(document).ready(function(){
//   cookieDOM('chip');
//   cookieDOM('sugar');
//   cookieDOM('oatmeal');
//   cookieDOM('macademia');

  // $('#chip-count').text(Cookies.get('chip'));
  // $('#chip').on("click", function(){
  //   addOneMoreCookie('chip');
  //   $('#chip-count').text(Cookies.get('chip'));
  // });

  // $('#sugar-count').text(Cookies.get('sugar'));
  // $('#sugar').on("click", function(){
  //   addOneMoreCookie('sugar');
  //   $('#sugar-count').text(Cookies.get('sugar'));
  // });
  //
  // $('#oatmeal-count').text(Cookies.get('oatmeal'));
  // $('#oatmeal').on("click", function(){
  //   addOneMoreCookie('oatmeal');
  //   $('#oatmeal-count').text(Cookies.get('oatmeal'));
  // });


// })

// 1. get the value of our 'chips' key from our cookies. DONE
// 2. if the value of 'chips' is undefined, we need to set it to 0 so that we can add to it! DONE
// 3. since the value of a cookie is always a string,
// we need to convert the value to an integer
// 4. then we add one more to it!
// 5. Set the 'chips' key to our new value
// function addOneMoreCookie(cookieKey){
//   var cookieCount = Cookies.get(cookieKey); // 1
//   if (cookieCount == undefined){ cookieCount = 0; } // 2
//   cookieCount = parseInt(cookieCount); // 3
//   cookieCount++; // 4
//   Cookies.set(cookieKey, cookieCount); // 5
// }

// // sugar
// // chips
// // oatmeal
// function cookieDOM(cookieType){
//   $(`#${cookieType}-count`).text(Cookies.get(cookieType));
//   $(`#${cookieType}`).on("click", function(){
//     addOneMoreCookie(cookieType);
//     $(`#${cookieType}-count`).text(Cookies.get(cookieType));
//   });
// }

// chips
// sugar
// oatmeal




// Step 1 - stringy function takes size
// Step 2 - Return a string of alternating '1s' and '0s'
// Step 3 - Always start string with '1'
// Step 4 - Make sure to return string where it is equal to the amount of the number ex: 4 = '1010' , 8 = '10101010'

// Stringy Function

// function stringy (size){
// 	// Step 1
// 	var shoeSize = Size.get(sizeChart); 
// 	// Step 2
// 	var returnedArray = [] 
// 	returnedArray.push(1);
// 	// Step 3 and 4
// 	returnedArray.push(0);
// 	return returnedArray; 
	
// 	if(shoeSize == undefined) {shoeSize = ?;}
// 	shoeSize = parseInt (shoeSize);
// 	shoeSize = 1,0;
// 	return 
// }

function stringy(size){
	var result = "";
	var ten = "10"
	var times = size / 2

	if (size <=0){
		return "Size must be a positive integer."
	}
	if (size % 2 == 1){
		return "Size must be an even integer."
	}
	if (size % 1 != 0){
		return "Size must be an integer."
	}
	for (i=1; i<= times; i++){
		result += "10"
	}

	// 10
	// size=6; 101010
	// size = -; error
	// size = .5; error
	// size = odd ; error
	return result;
}

// Reverse Order Integer

// Step 1 - Write out function Integer 
// Step 2 - Get the list of data 
// Step 3 - Present the data in an array
// Step 4 - Return the list of data in reverse order than it came in 

// function named integer Step 1
function integer (number) {
	// Step 2
	var initialArray = ("" + number).text('');
	// Step 3
  	var reversedArray = [];
  	// Step 4
  	for (var i = initialArray.length - 1; i >= 0; i--) {
    reversedArray[i] = parseInt(initialArray.shift(),10);
  }
  	return reversedArray;
}

// Fibonacci

// Step 1 - Build a Fibonacci
// Step 2 - Set variables of a and b + name your return variable
// Step 3 - Create a for loop 
// Step 4 - Return value of your named f=function

// Step 1
function fibonacci(){

	this.looping = function(n) {
		// Step 2
		var a = 0, b = 1, f = 1;
		// Step 3
		for(var i = 2; i <= n; i++){
			f = a + b;
			a = b;
			b = f;
		}
		// Step 4
		return f;
	};


// Coupon Exercise

// Step 1 - Build function called checkCoupon
// Step 2 - verify if coupon is valid or expired
// Step 3 - if statement, if coupon is valid, return true
// Step 4 - if coupon is false, return false
// Step 5 - create variables for testing validity of the code ( code should be exactly 6 characters
			// 3 letters and 3 numbers)
// Step 6 - pass strings in this  format " June 15, 2014 "
// Step 7 - if statement on the date of expiration, if expiration is 1 day less than coupon code return false.

// Step 1
// function checkCoupon(){
// // Step 5
// 	var coupon = coupon;
// 	for (var i = 0; i <=6; i ++){

// function aplhanumeric()
// {
// 	var letters = /^[0-9 a -zA-z] + $/;
// 	if (inputtxt.value.match (letters))
// }
// 	return true; 
// }
// 	else  
// {   
// 	return false;  
// }  
// }  	

function checkCoupon(code,expirationDate){
	checkCode(code);
	checkExpiration()
	// if valid
	return true; 
	// if invalid
	return false;
	}
function checkExpiration(expirationDate){
	var today = new Date;
	var expiration = new Date (expirationDate);
	if(today < expiration){
		return true;
	} 	else{
		return false;
	}
}
function checkCode(code){
	if (code.length != 6){
		return false;
	}
	var codeArray = code.split("")
	var letters = [];
	var numbers = [];

	code.Array.foreach(function(element){
		if (isNaN(element)){
			letters.push(element);
		}
		});


		if(letters.length == 3 && numbers.length ==3 ){
			return true;
		}
			else { 
			return false;
		}


	}
