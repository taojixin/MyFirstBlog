USE jdbctest;
SHOW TABLES;
SELECT * FROM test;
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
VALUES("第4题", "富","士","大","分","分");
SELECT * FROM exercises;
SELECT * FROM exercises WHERE id=?;
SELECT * FROM exercises ORDER BY RAND() LIMIT 5;

CREATE TABLE answer(
	id INT PRIMARY KEY AUTO_INCREMENT,
	selects VARCHAR(10) NOT NULL,
	
);
DELETE FROM exercises WHERE id=?;
UPDATE exercises SET content=?,answer1=?,answer2=?,answer3=?,answer4=?,right_answer=? WHERE id=?;
CREATE TABLE users(
	id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(10) NOT NULL,
	userpassword VARCHAR(20) NOT NULL
);
INSERT INTO users VALUES(1,"admin","123456");