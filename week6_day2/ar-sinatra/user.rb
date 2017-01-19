class User < ActiveRecord::Base

end

# # SELECT * from users
# User.all
# # Insert
# User.create(attribute: value)

# # Select * from users Where id =1
# User.find(1)

# # Select * from users Where attribute=value
# User.where(attribute:value)

# # Select * from users Where attribute=value Linit 1
# User.find_by(attribute:value)

# # Delete
# User.find(1).destroy!

# # UIpadte 
# User.find(1).update_attrributes(attribute: value)