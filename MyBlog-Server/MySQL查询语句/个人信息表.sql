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
# 查询
SELECT * FROM introduce;
# 修改数据
UPDATE introduce SET my_name='陶继鑫' WHERE my_id=1;
UPDATE introduce SET my_id=?,my_name=?,my_phone=?,my_sex=?,my_email=?,my_birthday=?,my_qq=?,my_address=?,my_koseki=?,my_education=?,my_school=?,my_professional=?,my_state=?,my_signature=?,my_hobbyies=? WHERE my_id=1;


	
	