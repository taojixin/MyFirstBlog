# MyBlog数据库相关代码
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
# 根据name查询用户在表中是否存在
SELECT * FROM users WHERE NAME = ?;

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
# 根据日期查询最近10条评论
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

# 创建Demo信息表
CREATE TABLE IF NOT EXISTS demo(
	id INT PRIMARY KEY AUTO_INCREMENT, 	# id唯一标识
	user_id INT NOT NULL,		   	# 外键，绑定用户表users
	demo_describe VARCHAR(200) NOT NULL,    # demo描述
	demo_knowkedge VARCHAR(200) NOT NULL,   # demo知识点
	demo_code TEXT NULL,			# demo代码
	demo_createtime DATETIME NOT NULL,	# 上传时间
	path VARCHAR(50) UNIQUE,		# 路径，用于vue跳转	
	FOREIGN KEY(user_id) REFERENCES users(id)
);
INSERT INTO demo VALUES
(1,1,'简约动态标签','transform:rotate、translate，opacity，transition',NULL,'2022-5-22 16:51:00');
INSERT INTO demo(user_id,demo_describe,demo_knowkedge,demo_code,demo_createtime,path) VALUES
(1,'简约动态标签','transform:rotate、translate，opacity，transition',NULL,'2022-5-22 16:51:00', 'dsf');
# 删除某条数据
DELETE FROM demo WHERE id = 3;
# 修改某条数据
UPDATE demo SET demo_describe=?,demo_knowkedge=?,demo_code=? WHERE id=?;

# 创建图片保存表
CREATE TABLE IF NOT EXISTS demoimg(
	id INT PRIMARY KEY AUTO_INCREMENT,
	filename VARCHAR(100) NOT NULL UNIQUE,
	mimetype VARCHAR(30),
	size INT,
	demo_id INT UNIQUE,
	FOREIGN KEY(demo_id) REFERENCES demo(id)
);
# 插入信息
INSERT INTO demoimg(filename,mimetype,size,demo_id) VALUE(
'169dbed210aa095944d8994ae73c5aa2', 'image/png', 90483, 1);
# 删除某个图片信息
DELETE FROM demoimg WHERE demo_id=?;
# 修改某个图片信息
UPDATE demoimg SET filename=?,mimetype=?,size=? WHERE demo_id=?;

# 创建个人信息表
CREATE TABLE introduce(
	my_id INT,
	my_name VARCHAR(10) NOT NULL,
	my_phone VARCHAR(11) NOT NULL,
	my_sex VARCHAR(1) NOT NULL,
	my_email VARCHAR(30) NOT NULL,
	my_birthday VARCHAR(10) NOT NULL,
	my_qq VARCHAR(10) NOT NULL,
	my_address VARCHAR(30) NOT NULL,
	my_koseki VARCHAR(30) NOT NULL,
	my_education VARCHAR(10) NOT NULL,
	my_school VARCHAR(10) NOT NULL,
	my_professional VARCHAR(10) NOT NULL,
	my_state VARCHAR(10) NOT NULL,
	my_signature VARCHAR(200) NOT NULL,
	my_hobbyies VARCHAR(200) NOT NULL,
	FOREIGN KEY(my_id) REFERENCES users(id)
);
DROP TABLE introduce;
# 插入数据
INSERT INTO introduce VALUE(
1,'陶继鑫','18581766104','男','491675919@qq.com','2001.07.24','491675919',
'四川省资阳市','四川省资阳市','本科','四川工商学院','软件工程','学生就读',
'如果debugging是一种消灭bug的过程，那编程就一定是把bug放进去的过程。',
'吃饭睡觉打豆豆！');
# 修改数据
UPDATE introduce SET my_name='陶继鑫' WHERE my_id=1;
UPDATE introduce SET my_id=?,my_name=?,my_phone=?,my_sex=?,my_email=?,my_birthday=?,my_qq=?,my_address=?,my_koseki=?,my_education=?,my_school=?,my_professional=?,my_state=?,my_signature=?,my_hobbyies=? WHERE my_id=1;

# 创建笔记表
CREATE TABLE IF NOT EXISTS notes (
	id INT PRIMARY KEY AUTO_INCREMENT,
	note_title VARCHAR(20) NOT NULL,
	note_describe VARCHAR(100) NOT NULL,
	note_content TEXT NOT NULL,
	note_createtime DATETIME NOT NULL,
	note_sort VARCHAR(20) NOT NULL  DEFAULT 'other',
	FOREIGN KEY(note_sort) REFERENCES sort(sort_name)
)
# 插入笔记
INSERT INTO notes (note_title,note_describe,note_content,note_createtime,note_sort)
VALUES ('vue基础','主要包括vue的初始化、指令、生命周期等知识点。','asf','2022-4-24 16:51:00','vue');
# 删除笔记
DELETE FROM notes WHERE id=1;

# 创建笔记分类表
CREATE TABLE IF NOT EXISTS sort (
	sort_name VARCHAR(20) PRIMARY KEY
);
# 插入笔记分类
INSERT INTO sort(sort_name) VALUES ('javascript'),('css'),('mysql'),('node'),('issue'),('other');
INSERT INTO sort(sort_name) VALUES ('vue');
	
	