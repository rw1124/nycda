require 'sinatra'

require 'sinatra/activerecord'

require './user'

set :database, "sqlite3:example.sqlite3"

get '/' do
  # user = User.create(email: 'rossw1124@gmail.com', first_name: 'Ross', last_name: 'Weidner', admin: true)
  # user= User.find(1)
  # puts user
  # "Hi, #{ussr.first_name}"
  # user.inspect
  @users = User.all
  erb :index
end

post '/create-user' do
	user = User.create(params)
	if !user.nil?
		"Thanks, #{user.first_name}!"
	end
end

get '/users/:id' do 
	params[:id]
	@user = User.find(params[:id])
	puts @user
	"This is the page for 
	#{@user.first_name}."
end

# SELECT * from users
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
