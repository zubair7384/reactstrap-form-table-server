CREATE DATABASE dform;

CREATE TABLE formtable(
    id SERIAL PRIMARY KEY, name VARCHAR(40), email VARCHAR(40) not null, password VARCHAR(50), text VARCHAR(500)
);