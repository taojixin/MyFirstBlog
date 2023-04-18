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
# 
SELECT * FROM demoimg;
# 删除某个图片信息
DELETE FROM demoimg WHERE demo_id=?;
# 修改某个图片信息
UPDATE demoimg SET filename=?,mimetype=?,size=? WHERE demo_id=?;
# 删除数据，不能回滚
TRUNCATE TABLE demoimg;
# 删除表
DROP TABLE demoimg;

