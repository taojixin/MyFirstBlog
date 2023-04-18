USE myblog;
SHOW TABLES;
# 创建留言表
CREATE TABLE IF NOT EXISTS comments (
	id INT PRIMARY KEY AUTO_INCREMENT,
	com_name VARCHAR(10) NOT NULL,
	create_time DATETIME NOT NULL,
	good_number INT DEFAULT 0,
	com_content VARCHAR(200) NULL
);
# 插入第一条数据
INSERT INTO comments (com_name, create_time, good_number, com_content) 
	      VALUES ('张三', '2022-4-19 19:01:01', 6, '这是第一条评论');
# 更加日期查询最近10条评论
SELECT * FROM comments ORDER BY id DESC LIMIT 10;
SELECT * FROM comments LIMIT 10;
# 查询点赞数
SELECT good_number FROM comments WHERE id = 1;
# 更新数据 点赞
UPDATE comments SET good_number=2 WHERE id=1;
# 根据page页数与行数num查询笔记
SELECT * FROM comments;
SELECT COUNT(id) AS total FROM comments;
SELECT id,com_name,create_time,good_number,com_content,COUNT(id) AS total FROM comments LIMIT 1,10;
# 删除某条评论
DELETE FROM comments WHERE id=30;




# 创建用户表
CREATE TABLE IF NOT EXISTS `users` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(10) NOT NULL UNIQUE,
	PASSWORD VARCHAR(20) NOT NULL,
	createtime DATETIME NOT NULL 
);
# 用户表插入一条信息
INSERT INTO users (NAME, PASSWORD, createtime) 
	      VALUES ('admin', 't18581766104', '2022-4-24 08:42:01');
# 查询所有用户(目前只有自己admin)
SELECT * FROM users;
# 根据name查询用户在表中是否存在
SELECT * FROM users WHERE NAME = '';







	