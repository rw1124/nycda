CREATE TABLE books(
  id integer PRIMARY KEY AUTOINCREMENT,
  title varchar(70),
  published_year varchar(50),
  author_id varchar(50),
  dateCreated timestamp DEFAULT current_timestamp 
);