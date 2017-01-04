//1.
var string = "shipStation"

var boolean = true

var integer = 10

var names = ['a,b']

var multiArray = [['greg','orange'],['harry','red'],['larry','blue']]

var object = { name: 'Eric', toes: '10', hairColor: 'blonde'}
	console.log("Your buddy Eric has 10 toes and his hair is blonde");
	console.log(object.name);
	
//2.
var a = "This is a string with a problem"

var b = ['this','should','be','a','seven','element','array','now']

var c = { firstKey: 'first', secondKey: 'second', thirdKey: 'third'}

function tellMeSomethingNice (a){
	var answer = a * a;

	console.log("You Look great!");
	return answer;

}

// Loops

var luke = {name: 'luke', grade: 96 }

var katie = {name: 'katie', grade: 78 }

var kevin = {name: 'kevin', grade: 46 }

var amanda = {name: 'amanda', grade: 84 }

var ross = { name: 'ross', grade: 50}

var students = [luke, katie, kevin, amanda, ross]




// loop through students
// if/else (conditional) for grades
// for loop

// for(var i=0; i<=2; i++){
// 		console.log(`${friends[i][0]} likes the color ${friends[i][1]}.`);
// 		}

for(var index=0; index< students.length; index++){
		// i = 0; luke students[0]
		// i = 1; katie students[1]
		// i = 2; kevin students[2]
		var currentStudentName = students[index].name // student[0] == {name: 'luke', grade: 96 } true
		var currentStudentGrade = students[index].grade
		console.log(`${currentStudentName}: ${currentStudentGrade}`);

		// debugger - used the debugger to run thru each statement to make sure they run

		if(currentStudentGrade <= 59 ){
			console.log("F");
		}else if(currentStudentGrade >= 60 && currentStudentGrade <= 69){
			console.log("D")
		}else if(currentStudentGrade >= 70 && currentStudentGrade <= 79){
			console.log("C") 
		}else if(currentStudentGrade >= 80 && currentStudentGrade <= 89){
			console.log("B")
		}else if(currentStudentGrade >= 90 && currentStudentGrade <= 100){
			console.log("A")
		}
}



// if(numberGrade <= 59){
// 	alert('F');
// }
// else if(numberGrade >= 60){
// 	alert('D');
// }
// else if(numberGrade >= 70){
// 	alert('C');
// }
// else if (numbergrade >= 80){
// 	alert('B');
// }
// else if (numberGrade >= 90){
// 	alert('A');
// }

// // variable scope

// 1. The difference between global scope and local variable scope is that a local 
// variable scope is in a function.
// Example: // Globally Scoped
// var numbers = [0, 20, 56,678]

// // Locally scoped

// // function numberTest (something) because this is in the function
// // var numbers = "0,1,2,3"
// 2. Global 
	// var a = 5

	// Trick Question
	// function myFunction(a){
    // Global, local, or trick question? ;)
//     return a;
// }

	// Local
// function varReader(){
//     // Global or local?
//     return a;
// }
	// Local, this will print 10 to the console 
// function newExample() {
//     // Global or local?
//     var a = 10;
//     // what will this print to the console?
//     console.log(a);
//     return a;
// }
// // What will this print to the console?
// console.log(a);

// function badExample(){
//     // Global or local?
//     a = 10;
//     // what will this print to the console?
//     console.log(a);
//     return a;
// }

// // Now what will this print to the console?
// console.log(a);

