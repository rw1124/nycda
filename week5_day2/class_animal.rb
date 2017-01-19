# class Animal
# 	attr_accessor : legs

# 	def make_noise
# 		"some animal noise"
# 	end
# end

# class Dog < Animal
# 	def make_noise
# 		regular_animal_noise = super
# 		regular_animal_noise + "woof"
# 		# puts "Woof"
# 	end
# end

# class Login < Devise::Authentication
# 	def authenticate
# 		super 
# 		redirect_to "home"
# 	end
# end

class Zoo

  def exhibits
    [Lion.new, Tiger.new, Owl.new]
  end

  def make_noises
    exhibits.each do |animal|
      puts "The #{animal.animal_type} says #{animal.make_noise}"
    end
  end
end


class Animal
  attr_accessor :legs

  def make_noise
    "growl"
  end

  def animal_type
    self.class
  end
end

# DRY - Don't repeat yourself.
class Lion < Animal
  def make_noise
    "roar"
  end

end

class Tiger < Animal
  def make_noise
    "roar"
  end

  def make_angry_noise
    make_noise * 10
  end
end

class Owl < Animal
  def make_noise
    "hoot"