require 'sinatra'

require 'sinatra/activerecord'

require './song'

set :database, "sqlite3:music.sqlite3"


# You will get an ERROR if you try to find an element in the database that does not exist. 
# So do NOT do a find for elements until you know you have elements in the DB
# get '/' do
#   "Hello World"

# end

get '/' do
    @songs = Song.all
    erb :index
end

post '/songs' do
    @song = Song.create(params)
    redirect to("/")
end

get '/songs/:id' do 
	@song = Song.find(params[:id])
end