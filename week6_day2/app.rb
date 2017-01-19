require 'sinatra'
require 'sinatra/activerecord'
require './book'
set :database, "sqlite3:library.sqlite3"


get '/' do
  # user = User.create(email: 'rossw1124@gmail.com', first_name: 'Ross', last_name: 'Weidner', admin: true)
  # user= User.find(1)
  # puts user
  # "Hi, #{ussr.first_name}"
  # user.inspect
  # @users = User.all
  # erb :index
  "Hello World!"
  # book = Book.create(title: "Hunt for Red October", author: "Tom Clancy", year_published: 1987)
  book = Book.find(1)
  puts book
  if book.persisted?
  		"Book: #{book.title}, #{book.author}, #{book.year_published}"
  end
end