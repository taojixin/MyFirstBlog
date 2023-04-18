CREATE DATABASE selectsystem;
USE selectsystem;
CREATE TABLE exercises(
	id INT PRIMARY KEY AUTO_INCREMENT,
	content VARCHAR(200) NOT NULL,
	answer1 VARCHAR(10) NOT NULL,
	answer2 VARCHAR(10) NOT NULL,
	answer3 VARCHAR(10) NOT NULL,
	answer4 VARCHAR(10) NOT NULL,
	right_answer VARCHAR(10) NOT NULL
);
INSERT INTO exercises(content,answer1,answer2,answer3,answer4,right_answer) 
VALUES("1 + 1 = ?", "1","2","3","4","2");
INSERT INTO exercises(content,answer1,answer2,answer3,answer4,right_answer) 
VALUES("1 + 2 = ?", "1","2","3","4","3");
INSERT INTO exercises(content,answer1,answer2,answer3,answer4,right_answer) 
VALUES("1 + 3 = ?", "1","2","3","4","4");
INSERT INTO exercises(content,answer1,answer2,answer3,answer4,right_answer) 
VALUES("1 + 4 = ?", "5","2","3","4","5");
INSERT INTO exercises(content,answer1,answer2,answer3,answer4,right_answer) 
VALUES("1 + 5 = ?", "6","2","3","4","6");
INSERT INTO exercises(content,answer1,answer2,answer3,answer4,right_answer) 
VALUES("1 + 6 = ?", "7","2","3","4","7");
CREATE TABLE myusers(
	id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(10) NOT NULL,
	userpassword VARCHAR(20) NOT NULL
);
INSERT INTO myusers VALUES(1,"admin","123456");