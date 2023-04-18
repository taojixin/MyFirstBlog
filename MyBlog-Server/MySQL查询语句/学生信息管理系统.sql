CREATE DATABASE stumanager;
USE stumanager;
CREATE TABLE message(
	id INT PRIMARY KEY AUTO_INCREMENT,
	stuId VARCHAR(20) NOT NULL,
	stuName VARCHAR(20) NOT NULL,
	stuSex VARCHAR(20) NOT NULL,
	stuBirthday VARCHAR(20) NOT NULL,
	stuPhone VARCHAR(20) NOT NULL,
	stuDorm VARCHAR(20) NOT NULL
);
INSERT INTO message(stuId,stuName,stuSex,stuBirthday,stuPhone,stuDorm) 
VALUES ("1001", "张三", "男", "2022.1.1","18581453102","308");
INSERT INTO message(stuId,stuName,stuSex,stuBirthday,stuPhone,stuDorm) 
VALUES ("1002", "李四", "男", "2022.1.1","18581545102","354");
INSERT INTO message(stuId,stuName,stuSex,stuBirthday,stuPhone,stuDorm) 
VALUES ("1003", "王二", "男", "2022.1.1","185817454502","308");
INSERT INTO message(stuId,stuName,stuSex,stuBirthday,stuPhone,stuDorm) 
VALUES ("1004", "李鑫", "女", "2022.1.1","18581733102","304");
CREATE TABLE users(
	id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(10) NOT NULL,
	userpassword VARCHAR(20) NOT NULL
);
INSERT INTO users VALUES(1,"admin","123456");