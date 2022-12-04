USE company_db;
INSERT INTO department (name)
VALUES
("marketing"),
("sales"),
("hr"),
("development"),
("customer service");
SELECT * FROM department;

USE company_db;
INSERT INTO role (title, salary, department_id)
VALUES
("director of marketing", 160000, 1),
("marketing analyst", 80000, 1),
("sales development representative", 120000, 2),
("sales consultant", 75000, 2),
("talent management", 90000, 3),
("employee benefits", 60000, 3),
("senior developer", 130000, 4),
("junior developer", 80000, 4),
("technical help", 70000, 5),
("consumer complaints", 70000, 5);
SELECT * FROM role;

USE company_db;
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
-- Marketing Team
-- jose (dir of mrktg) boss to stevie and garrett (mrktg analysts)
("jose", "gonzales", 1, null),
("stevie", "nics", 2, 1),
("garrett", "smalls", 2, 1),
-- Sales Team
-- aliyah (sales dev rep) boss to sarah and noell (sales consultants)
("aliyah", "hahn", 3, null),
("sarah", "steele", 4, 4),
("noell", "mejia", 4, 4),
-- Hr Team
-- zach (talent management) boss to demarion and aaron (employee benefits)
("zach", "mercer", 5, null),
("demarion", "davila", 6, 7),
("aaron", "kemp", 6, 7),
-- Development Team
-- octavio (senior dev) boss to bridger and heaven(junior devs)
("octavio", "palmer", 7, null),
("bridger", "zavala", 8, 10),
("heaven", "nash", 8, 10),
-- Customer Service Team
-- talan (technical help) boss to perla and presley(consumer complaints)
("talan", "barton", 9, null),
("perla", "hatfield", 10, 13),
("presley", "odom", 10, 13);
SELECT * FROM employee;