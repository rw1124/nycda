# 1. 
# class Food
# 	def foods
#     [Mexican.new, Italian.new, Peruvian.new]
#   	foods.each do |foods|
#       puts "I like to eat #{foods}"

#   end
# end
#2
class User
	# not sure if we need the admin on the attr accessor?
	attr_accessor : first_name, : last_name, : admin

	def intialize (first_name:, last_name:, admin: )
		@first_name = first_name
		@last_name = last_name
		@admin = admin

	def display_info
		# this will print out the first and last name 
		puts "#{@first_name}" "#{@last_name}"
	end	

	def toggle_admin  
	# I am not sure if this is the right way to toggle, fingers crossed   
	@admin= !@admin 
	end # Use Bang (!) to toggle   
end

#3 Take the following string: 
# "Kayla. Darren. Michael. Elizabeth"

# Transform it into a string that looks like this, instead: 
# "Kayla, Darren, Michael, Elizabeth"

# "a, b, c, d, e, f, g".split(', ')

"Kayla. Darren. Michael. Elizabeth".split(', ')
"Kayla. Darren. Michael. Elizabeth".gsub(".",",")


#4 Implement FizzBuzz using recursion (a method that calls itself!).

# Print Fizz for numbers divisible by 3
# Print Buzz for numbers divisible by 5
# Print FizzBuzz for numbers divisible by 15

	@number = 100
	def divide_by_three
		puts Fizz
		@number %= 3
	end 

	@number = 100
	def divide_by_five
		puts Buzz
		@number %= 5
	end 

	@number = 100
	def divide_by_fifteen
		puts Buzz
		@number %= 15
	end 


# def subtract
#     puts @number 
# 	@number -= 1
#     subtract if @number > 0
 
# end 



