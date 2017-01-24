class Calculator

	def add
    puts "Which numbers would you like to add?"
    n1 = gets.to_i
    n2 = gets.to_i
    answer = n1 + n2
    puts "The sum is...#{answer}"
  end

 def subtract
    puts "Which numbers would you like to subtract?"
    n1 = gets.to_i
    n2 = gets.to_i
    answer = n1 - n2
    puts "The sum is...#{answer}"
  end

 def multiply
    puts "Which numbers would you like to multiply?"
    n1 = gets.to_i
    n2 = gets.to_i
    answer = n1 * n2
    puts "The sum is...#{answer}"
  end

 def divide
    puts "Which numbers would you like to divide?"
    n1 = gets.to_i
    n2 = gets.to_i
    answer = n1 / n2
    puts "The sum is...#{answer}"
  end
end