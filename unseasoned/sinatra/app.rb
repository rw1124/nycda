require 'sinatra'

 get '/' do
        "Hello World"
    end

 get '/' do
    erb :index
	end

10.times do |i|
    i * i
	end

get '/people/:name' do
        @name = params[:name].capitalize
        erb :person
    
    end

     get '/' do
        @color = "red"
        erb :index
    end
