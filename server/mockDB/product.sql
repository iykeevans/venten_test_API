DROP DATABASE IF EXISTS products;
CREATE DATABASE products;

\c products;

CREATE TABLE shoes (
  ID SERIAL PRIMARY KEY,
  name TEXT,
  description TEXT,
  price INTEGER,
  category TEXT,
  image TEXT,
  color TEXT
);

INSERT INTO shoes (name, description, price, category, image, color)
  VALUES (
  'Vans',
  'an awesome shoe for any event',
  100,
  'luxury',
  'https://images.unsplash.com/photo-1512327536842-5aa37d1ba3e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'silver'
  );
