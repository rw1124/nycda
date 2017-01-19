require 'sinatra'
require 'dotenv'
Dotenv.load
# get '/' do
#         "Hello World"
# end

get '/' do
    erb :index
end

get '/people/:name' do
   @name = params[:name].capitalize
   erb :person
end

get '/' do
        @color = "red"
        erb :index
end

# get '/people/:name'
get '/dotenv' do
	"test: #{ENV['MY_PASSWORD']}"
end
 # get '/my-route-name' do
 #        # Your Code Here
 # end

 # get '/post/:id' do
 #        @post_id = params[:id]
 #        "The id of this post is #{@post_id}"
 # end
# get '/' do
# 	erb :index
# end

# get '/new-path' do 
# 	"A new path"
# end