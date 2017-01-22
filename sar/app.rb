require 'sinatra'

require 'sinatra/activerecord'

require './song'

set :database, "sqlite3:music.sqlite3"

Song.create(year_published: 2008, title: 'Notion', author: 'Kings of Leon', genre: 'Alternative') 
Song.create(year_published: 2013, title: 'Started From the Bottom', author: 'Drake', genre: 'Rap')
Song.create(year_published: 2014, title: 'Main Chick', author: 'Kid Ink', genre: 'Rap') 
Song.create(year_published: 2016, title: 'Door to Door Cannibals', author: 'Chevelle', genre: 'Rock')
Song.create(year_published: 2006, title: 'Hang Me up to Dry', author: 'Robbers and Cowards', genre: 'Alternative') 
Song.create(year_published: 2015, title: 'As You Are', author: 'The Weeknd', genre: 'Soul')
Song.create(year_published: 2008, title: 'Swing', author: 'Savage Island', genre: 'Rap') 
Song.create(year_published: 2007, title: 'Breakdown', author: 'Seether', genre: 'Alternative')

# Index
get '/songs' do
    @song = Song.all
    erb :songs
end

# show
get '/songs/:id' do
    @song = Song.find(params[:id])
    erb :song
end

# destroy
delete '/songs/:id' do
    @song = Song.find(params[:id])
    @song.destroy!
    redirect to("/")
end

# update/edit
put '/songs/:id' do
    @song = Song.find(params[:id])
    @song.update_attributes(params)
    redirect to("/songs/#{params[:id]}")
end

# create
post '/songs' do
    @song = Song.create(params)
    redirect to("/")
end