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
# 查询笔记
SELECT * FROM notes;
# 删除笔记
DELETE FROM notes WHERE id=1;
SHOW TABLES;
DROP TABLE notes;

# 创建笔记分类表
CREATE TABLE IF NOT EXISTS sort (
	sort_name VARCHAR(20) PRIMARY KEY
)
SELECT * FROM sort;
# 插入笔记分类
INSERT INTO sort(sort_name) VALUES ('javascript'),('css'),('mysql'),('node'),('issue'),('other');
INSERT INTO sort(sort_name) VALUES ('vue');

