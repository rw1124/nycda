# name_array = [:luke,:katie,:kevin,:amanda]

# grade_array = ["96","78","46","84"]

# name_and_grade_array = {name_array[0] => '96', name_array[1] => '78', name_array[2] => '46', name_array[3] => '84'}

# puts name_and_grade_array

# puts "What is your name?"

# name = gets.chomp

# puts 



amanda = { name: "amanda", grade: 84}

katie = { name: "katie", grade: 78}

kevin = { name: "kevin", grade: 46}

luke= { name: "luke", grade: 96}


# puts "Whats your grade ?"
# grade = gets.chomp
# grade = grade.to_i

students.each do |student|
	grade = student [:grade]
	name = student [:name]

	letter_grade =

	if grade >= 90
		 "A"
	elsif grade >= 80
		 "B"
	elsif grade >= 70
		 "C"	
	elsif grade >= 60
		"D"
	else
		 "F"
	end
	puts "#{name}: #{letter_grade}"
end


# ruby-doc.org








