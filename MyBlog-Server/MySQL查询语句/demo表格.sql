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
DROP TABLE demo;
SELECT * FROM demo;
INSERT INTO demo VALUES
(1,1,'简约动态标签','transform:rotate、translate，opacity，transition',NULL,'2022-5-22 16:51:00');
INSERT INTO demo(user_id,demo_describe,demo_knowkedge,demo_code,demo_createtime,path) VALUES
(1,'简约动态标签','transform:rotate、translate，opacity，transition',NULL,'2022-5-22 16:51:00', 'dsf');
# 删除某条数据
DELETE FROM demo WHERE id = 3;
# 修改某条数据
UPDATE demo SET demo_describe=?,demo_knowkedge=?,demo_code=? WHERE id=?;
# 删除数据，不能回滚
TRUNCATE TABLE demo;