DROP DATABASE IF EXISTS vamos;
CREATE DATABASE vamos;
USE vamos;
CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(255),
  lastName varchar(255),
  email varchar(255),
  password varchar(255),
  adress varchar(255),
  city varchar(255),
  phoneNumber int ,
  PRIMARY KEY (id)
);


/* excute schema  */
/* mysql -u root -p <server/database_mysql/schema.sql
 */