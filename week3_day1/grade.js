// These are the variables from the other workshop 

var luke = {name: 'luke', grade: 96 }

var katie = {name: 'katie', grade: 78 }

var kevin = {name: 'kevin', grade: 46 }

var amanda = {name: 'amanda', grade: 84 }

var student = [luke, katie, kevin, amanda]

function Student(name,grade){ 
	// name and grade are the attrributes in the function 
	this.name = name;
	// .something that is a function is called a "Method"
	this.grade = grade;
	this.currentStudentGrade = function(){
		// this.currentStudentGrade is pulling in the console, the next step to find the name 
		// is to use the student.name and this will display the name on the console.
			var letterGrade = ""

			if(this.grade <= 59 ){
				letterGrade = "F";
					// using the this. , gives you the function that you are currently in and computes to the consolethe letter grade.
			}else if(this.grade >= 60 && this.grade <= 69){
				letterGrade = "D"
			}else if(this.grade >= 70 && this.grade <= 79){
				letterGrade = "C" 
			}else if(this.grade >= 80 && this.grade <= 89){
				letterGrade = "B"
			}else if(this.grade >= 90 && this.grade <= 100){
				letterGrade = "A"
			}

				return this.name + " received a " + letterGrade ;
			// Yesssss, I was able to understand this with the return the way that I wanted the information displayed in the console.

		}
	}
		// Always make sure to have the squiggly brackets aligned.

var student = new Student("Katie", 78); 
	

