USE myblog;
SHOW TABLES;
# 创建测试notes表
CREATE TABLE IF NOT EXISTS notes_test (
	id INT PRIMARY KEY AUTO_INCREMENT,
	note_title VARCHAR(20) NOT NULL,
	note_describe VARCHAR(100) NOT NULL,
	note_content TEXT NOT NULL,
	note_createtime DATETIME NOT NULL,
	note_sort VARCHAR(20) NOT NULL  DEFAULT 'other',
	FOREIGN KEY(note_sort) REFERENCES sort(sort_name)
)
# 创建用户表
CREATE TABLE IF NOT EXISTS `users` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(10) NOT NULL UNIQUE,
	PASSWORD VARCHAR(20) NOT NULL,
	createtime DATETIME NOT NULL 
);
SELECT * FROM users;
SELECT * FROM users WHERE NAME = 'admin';
# 用户表插入一条信息
INSERT INTO users (NAME, PASSWORD, createtime) 
	      VALUES ('admin', 't18581766104', '2022-4-24 08:42:01');
	      
# 创建笔记分类表
CREATE TABLE IF NOT EXISTS sort (
	sort_name VARCHAR(20) PRIMARY KEY
);
# 插入笔记分类
INSERT INTO sort(sort_name) VALUES ('javascript'),('css'),('mysql'),('node'),('issue'),('other');
INSERT INTO sort(sort_name) VALUES ('css');
INSERT INTO sort(sort_name) VALUES ('javascript');
INSERT INTO sort(sort_name) VALUES ('node');
INSERT INTO sort(sort_name) VALUES ('vue');
INSERT INTO sort(sort_name) VALUES ('mysql');
INSERT INTO sort(sort_name) VALUES ('issue');
INSERT INTO sort(sort_name) VALUES ('other');