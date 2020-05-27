CREATE DATABASE apiBlog;

USE apiBlog;

CREATE TABLE post (
	id INT PRIMARY KEY NOT NULL,
    titulo VARCHAR (255) NOT NULL,
    extracto VARCHAR (255) NOT NULL,
    curerpo TEXT NOT NULL, 
    img TEXT NOT NULL
);