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
# 插入笔记
INSERT INTO notes_test (note_title,note_describe,note_content,note_createtime,note_sort)
VALUES ('vue基础','主要包括vue的初始化、指令、生命周期等知识点。','asf','2022-4-24 16:51:00','node');
# 
SELECT * FROM notes_test;
USE myblog;
# 根据id删除笔记
DELETE FROM notes_test WHERE id=2;
# 根据页和条数查询笔记
SELECT id,note_title,note_describe,note_createtime,note_sort FROM notes_test LIMIT 0,10;
# 根据分类查询笔记
USE myblog;
SELECT * FROM notes_test WHERE note_sort='vue';
SELECT note_content FROM notes_test WHERE id=79;
# 查询所有笔记信息（不包含笔记内容）
SELECT id,note_title,note_describe,note_createtime,note_sort FROM notes_test;
# 查询笔记前n条（根据创建日期）
SELECT id,note_title,note_describe,note_createtime,note_sort 
FROM notes_test ORDER BY id DESC LIMIT 10;
# 根据id查询某个笔记内容
SELECT * FROM notes_test;
SELECT * FROM notes_test WHERE id=79;
# 修改某个笔记内容
UPDATE notes_test SET note_title=?,note_describe=?,note_content=?,note_sort=? WHERE id=?;


