DROP DATABASE IF EXISTS mvpdb;

CREATE DATABASE mvpdb;

\c mvpdb;




CREATE TABLE aparrel (
 id BIGSERIAL NOT NULL,
 color VARCHAR(20) NOT NULL,
 description VARCHAR(150),
 url VARCHAR(150) NOT NULL,
 type VARCHAR(35)
);
ALTER TABLE aparrel ADD CONSTRAINT aparrel_pkey PRIMARY KEY (id);

CREATE TABLE favorite (
 id BIGSERIAL NOT NULL,
 top VARCHAR(25) DEFAULT 'NULL',
 sweater VARCHAR(25) DEFAULT 'NULL',
 outerWear VARCHAR(25) DEFAULT 'NULL',
 bottoms VARCHAR(25) DEFAULT 'NULL',
 footwear VARCHAR(25) DEFAULT 'NULL'
);


ALTER TABLE favorite ADD CONSTRAINT favorite_pkey PRIMARY KEY (id);