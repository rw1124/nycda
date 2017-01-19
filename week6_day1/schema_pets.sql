CREATE TABLE pets(
  id integer PRIMARY KEY AUTOINCREMENT,
  user_id integer,
  name varchar(255),
  species varchar(255),
  dateCreated timestamp DEFAULT current_timestamp
);