DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;
CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30)
);

USE company_db;
CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT,
FOREIGN KEY (department_id)
REFERENCES department(id)
ON DELETE SET NULL
);

USE company_db;
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 first_name VARCHAR(30),
 last_name VARCHAR(30),
 role_id INT,
 manager_id INT,
 index(role_id),
 index(manager_id),
 FOREIGN KEY (role_id) REFERENCES role(id),
 FOREIGN KEY (manager_id)  REFERENCES employee(id)
);

DESCRIBE department;
DESCRIBE role;
DESCRIBE employee;