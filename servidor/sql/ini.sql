CREATE DATABASE api_blog;

USE api_blog;

CREATE TABLE post (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    titulo VARCHAR (255) NOT NULL,
    extracto VARCHAR (255) NOT NULL,
    cuerpo TEXT NOT NULL, 
    img TEXT NOT NULL
);

INSERT INTO post (id,titulo, extracto, cuerpo, img) VALUES (1,"Post 1", "Extracto del post 1", "Cuerpo del post 1", "Imagen del post 1");
INSERT INTO post (id,titulo, extracto, cuerpo, img) VALUES (2,"Post 2", "Extracto del post 2", "Cuerpo del post 2", "Imagen del post 2");
INSERT INTO post (id,titulo, extracto, cuerpo, img) VALUES (3,"Post 3", "Extracto del post 3", "Cuerpo del post 3", "Imagen del post 3");
INSERT INTO post (id,titulo, extracto, cuerpo, img) VALUES (4,"Post 4", "Extracto del post 4", "Cuerpo del post 4", "Imagen del post 4");
INSERT INTO post (id,titulo, extracto, cuerpo, img) VALUES (5,"Post 5", "Extracto del post 5", "Cuerpo del post 5", "Imagen del post 5");
INSERT INTO post (id,titulo, extracto, cuerpo, img) VALUES (6,"Post 6", "Extracto del post 6", "Cuerpo del post 6", "Imagen del post 6");
INSERT INTO post (id,titulo, extracto, cuerpo, img) VALUES (7,"Post 7", "Extracto del post 7", "Cuerpo del post 7", "Imagen del post 7");