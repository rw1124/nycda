CREATE TABLE authors_table(
  id integer PRIMARY KEY AUTOINCREMENT,
  fname varchar(50),
  lname varchar(50),
  genre varchar(50),
  dateCreated timestamp DEFAULT current_timestamp 
);