# class Person

# 	# this code does the dsame thing as writing the getter and setter code
# 	attr_accessor : first_name, : last_name
	
# 	def intialize (first_name, last_name)
# 		@first_name = first_name
# 		@last_name = last_name
# 	end

# 	def intitialize (full_name)
# 		self.full_name = full_name
# 	end


# 	def introduce_yourself
# 		@first_name
# 	def full_name
# 		"#{@first_name} #{@last_name}"
# 	end

# 	def full_name = name
# 		name_array = name.split(" ")
# 		@first_name = name_array[0]
# 		@last_name = name_array[1]
# 	end
# 	# # getter
# 	# def first_name
# 	# 	@first_name
# 	# end
# 	# # setter
# 	# def first_name=(name)
# 	# 	@first_name = name
# 	# end
# end

# @my_person = Person.new
# EXERCISE 1 CAR Model and Make

# class Car

# 	attr_accessor :make, :model, :mpg

# 	def intialize (make:, model:, mpg:nil)
# 		@make = make
# 		@model = model
# 		@mpg = mpg
# 	end

# 	# def car_name = name
# 	# 	name_array = name.split (" ")
# 	# 	@first_name = name_array[0]
# 	# 	@last_name = name_array[1]
# 	# end

# end

# @my_car = car.new

# Exercise 2 Before Lunch Car Exercise

# class Car

# 	attr_accessor :make, :model, :mpg

# 	def intialize (make:, model:, mpg:nil)
# 		@make = make
# 		@model = model
# 		@mpg = mpg
# 	end

# 	def display_info
# 	puts "#{@make}" "#{model}"
# 	end	

# 	def drive (miles)
# 		@mileage += miles
# 	end


# 	def resale_value 
# 		if mileage > 100000
# 		"not worth much"
# 		else
# 		"might be worth something"
# 	end
# end

# @my_car = car.new



# Class Exercise 3
# class Classic 

# 	attr_accessor : wheels

# 	def rev_motor
# 		"loud engine sound"
# 	end
# end

# class Classic < Car
# 	def rev_motor
# 		regular_engine_noise = super
# 		regular_engine_noise + "shazam"
# 		# puts "Woof"
# 	end
# end

# @classic_car = car.new


# Recurision Exercise #4 

@number = 100
def subtract
    puts @number 
	@number -= 1
    subtract if @number > 0
 
end 

subtract




