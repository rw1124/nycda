# Create a function that takes a string as an argument and adds the phrase "Only in America!"

# puts 'Where can you drink Pearl Light beer?'

# where = gets.chomp

# this will print out the "Only in America!"
# puts "#{where}, Only in America!"



# Create a function to find the maximum vakue in an array of numbers - dont use .max

# max_array = [100,10,-1000]


#print this line to make sure it prints out max_array
# puts max_array


# this will print out the highest number in the array
# puts max_array.sort.last 



# Create a function that takes two arguments - both of them arrays.  Inside the function , combine the arrays using the
# items form the first arrays as keys and the second array as values. 

# make_array = [:Porsche, :Ferrari]

# type_array = ["Macan", "California"]

# make_and_type = {make_array[0] => 'Macan', make_array[1] => 'California'}

# print out what 
# puts make_and_type

# puts make_and_type [1]



# Write a program that prints the numbers from 1 to 100, except:

# for multiples of three print "Fizz" instead of the number
# for multiples of five print "Buzz"
# Print "FizzBuzz" for numbers that are multiples of both 3 and 5.

# def print_numbers (n)

# 	for i in 1..100

# 		puts numbers
# 	end

# def divide (x,y)
# 	if x == 0 || y == 0

# 	return "We dont do math on zeros"

# end



def multiples

  (1..100).select do |i|


  	# Print "FizzBuzz" for numbers that are multiples of both 3 and 5.
  	if i % 3 == 0 && i % 5 == 0
  		
  		puts 'FizzBuzz'

    
  	# for multiples of three print "Fizz" instead of the number
    elsif i % 3 == 0 

    	puts 'Fizz'

    elsif i % 5 == 0 

    	puts 'Buzz'

    else 

    	puts i


    end

  end

end


multiples







