require 'sinatra'

get '/' do
	erb :index
end

get '/new-path' do 
	"A new path"
end

get "/:name" do
	"This is #{params[:name]}'s name"
end 