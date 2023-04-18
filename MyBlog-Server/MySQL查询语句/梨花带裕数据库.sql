# 创建数据库
CREATE DATABASE IF NOT EXISTS pearflower;
DROP DATABASE pearflower;
# 创建用户表
USE pearflower;
CREATE TABLE IF NOT EXISTS users(
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	user_name VARCHAR(10) NOT NULL,
	user_phone VARCHAR(11) NOT NULL,
	user_password VARCHAR(20),
	user_pay_password VARCHAR(6)
);
# 插入第一个用户数据
INSERT INTO users(user_name,user_phone,user_password,user_pay_password) 
	   VALUES('风花雪月','18581776184','t123456789','123456');
INSERT INTO users(user_name,user_phone,user_password,user_pay_password) 
	   VALUES('还看今朝','18581776184','t123456789','123456');
INSERT INTO users(user_name,user_phone,user_password,user_pay_password) 
	   VALUES('岁月无情','18581776184','t123456789','123456');
SELECT * FROM users;
# 创建文章表
DROP TABLE essay;
CREATE TABLE IF NOT EXISTS essay(
	essay_id INT PRIMARY KEY AUTO_INCREMENT, 	 # 文章id
	essay_title VARCHAR(10) NOT NULL,		 # 文章标题
	essay_content TEXT NOT NULL,		 	 # 文章内容
	essay_createtime VARCHAR(20) NOT NULL,		 # 文章发布时间
	essay_author VARCHAR(10) NOT NULL,		 # 文章作者
	essay_authorid INT NOT NULL,			 # 文章作者id
	essay_goodnum VARCHAR(100) NOT NULL DEFAULT '0', # 点赞数
	essay_views VARCHAR(100) NOT NULL DEFAULT '0',	 # 浏览量
	essay_comment VARCHAR(100) NOT NULL DEFAULT '0', # 评论数
	FOREIGN KEY(essay_authorid) REFERENCES users(user_id)
);
INSERT INTO essay VALUES(1,'今日分享','风雨之后，我在一个清晨走上街道，发现一切都已改变。我不是说那些折断在地的树枝和散落于泥泞路面的黄叶，而是说某些深层的，难以说清的东西已经改变，就像晨曦之中此刻随处可见的成群蜗牛，潮湿的土壤中说不清楚的气味，不新鲜的空气等．这些都是一切已永远改变了的明证。我站在一个泥坑前，盯着它看。水坑底是软软的泥浆，仿佛在等待某种征兆、某种呼唤，再远一点的地方，苜蓿叶上似有水滴，它的四周有慢慢泛黄的草地，折断的蕨类植物和绿色的草本植物。在我的右方，沿着我漫步、思索的峭壁之底，一只海鸥在缓缓盘旋--它的处境看上去比以往更为危险，却表现得愈发坚定勇敢。当然，所有这些事情——这种清楚的感知，这种不知从何而来的狂风骤然带来的寒流，这被暴风雨洗刷得如此洁净的天空，这种整个自然都呈现出的新色彩——也许只是一种欺骗性的幻象。但在漫步的时候，我确实感到，在暴风雨来临之前，鸟儿和小虫子，树木和石头，垃圾箱和倾斜的电线杆——所有这些都对生活失去了兴趣，失却了目标，忘记了为何身在此处。后来，当子夜消逝，黎明第一道曙光升起之前，暴风雨突至，重现了一切失却的意义，失却的热望。人们是否需要在深夜时分，在窗户的咔嗒声中、在狂风穿过门窗缝隙之际、在雷声里醒来，只是为了感受生活原本比我们想象的要深刻得多，世界的意义要丰富得多？我半睡半醒，从床上跳起来冲向窗户，一扇扇关上它，然后熄掉还亮着的桌灯，就像水手在暴风雨之夜醒来，本能地冲向他的船帆那样。做完这些后，我来到厨房，坐在那里喝了杯水——厨房的顶灯在呼啸的大风中摇晃。突然，一阵狂风袭来，仿佛摇撼了整个世界，紧接着停电了。一切陷入黑暗，厨房的瓷砖在我赤裸的脚下感觉那样冰冷。从坐着的地方，我可以透过窗户、透过摇摆的松树和白杨树，看见白色泡沫自越来越大的海浪中飞起。在雷鸣声中，闪电仿佛就要击中近处的海面。随后，在持续的闪电中，疾走的层云、翻卷的树梢、大地与天空，全都纠缠在一起。我站在厨房窗前，看着外面的世界，手里握着一个空杯子，感到十分满足清晨时分，我四处游荡，恰似侦察员围绕凶案、暴乱等暴力事件搜索证据，想看清楚周围究竟发生了什么。我对自己说：这是动乱景象，风雨来袭时的景象啊！要记得我们都生活在同一个世界，再后来，我看到折断的树枝和横倒在地的自行车，不禁又想：当风雨来袭的时候，我们不仅明白我们生活在一个世界上，而且还会感到．我们经历着同样的生活。一只小麻雀掉进了泥泞中——我不知道为什么——就要死了，我充满好奇，却无动于衷地描摹着它。大雨倾盆，打湿了我的本子和素描。',
			'2022-5-15 14.56','风花雪月',1,'546','585','3');
INSERT INTO essay(essay_title,essay_content,essay_createtime,essay_author,essay_authorid)
VALUES('好物分享','风雨之后，我在一个清晨走上街道，发现一切都已改变。我不是说那些折断在地的树枝和散落于泥泞路面的黄叶，而是说某些深层的，难以说清的东西已经改变，就像晨曦之中此刻随处可见的成群蜗牛，潮湿的土壤中说不清楚的气味，不新鲜的空气等．这些都是一切已永远改变了的明证。我站在一个泥坑前，盯着它看。水坑底是软软的泥浆，仿佛在等待某种征兆、某种呼唤，再远一点的地方，苜蓿叶上似有水滴，它的四周有慢慢泛黄的草地，折断的蕨类植物和绿色的草本植物。在我的右方，沿着我漫步、思索的峭壁之底，一只海鸥在缓缓盘旋--它的处境看上去比以往更为危险，却表现得愈发坚定勇敢。当然，所有这些事情——这种清楚的感知，这种不知从何而来的狂风骤然带来的寒流，这被暴风雨洗刷得如此洁净的天空，这种整个自然都呈现出的新色彩——也许只是一种欺骗性的幻象。但在漫步的时候，我确实感到，在暴风雨来临之前，鸟儿和小虫子，树木和石头，垃圾箱和倾斜的电线杆——所有这些都对生活失去了兴趣，失却了目标，忘记了为何身在此处。后来，当子夜消逝，黎明第一道曙光升起之前，暴风雨突至，重现了一切失却的意义，失却的热望。人们是否需要在深夜时分，在窗户的咔嗒声中、在狂风穿过门窗缝隙之际、在雷声里醒来，只是为了感受生活原本比我们想象的要深刻得多，世界的意义要丰富得多？我半睡半醒，从床上跳起来冲向窗户，一扇扇关上它，然后熄掉还亮着的桌灯，就像水手在暴风雨之夜醒来，本能地冲向他的船帆那样。做完这些后，我来到厨房，坐在那里喝了杯水——厨房的顶灯在呼啸的大风中摇晃。突然，一阵狂风袭来，仿佛摇撼了整个世界，紧接着停电了。一切陷入黑暗，厨房的瓷砖在我赤裸的脚下感觉那样冰冷。从坐着的地方，我可以透过窗户、透过摇摆的松树和白杨树，看见白色泡沫自越来越大的海浪中飞起。在雷鸣声中，闪电仿佛就要击中近处的海面。随后，在持续的闪电中，疾走的层云、翻卷的树梢、大地与天空，全都纠缠在一起。我站在厨房窗前，看着外面的世界，手里握着一个空杯子，感到十分满足清晨时分，我四处游荡，恰似侦察员围绕凶案、暴乱等暴力事件搜索证据，想看清楚周围究竟发生了什么。我对自己说：这是动乱景象，风雨来袭时的景象啊！要记得我们都生活在同一个世界，再后来，我看到折断的树枝和横倒在地的自行车，不禁又想：当风雨来袭的时候，我们不仅明白我们生活在一个世界上，而且还会感到．我们经历着同样的生活。一只小麻雀掉进了泥泞中——我不知道为什么——就要死了，我充满好奇，却无动于衷地描摹着它。大雨倾盆，打湿了我的本子和素描。',
			'2022-5-15 14.56','风花雪月',1);
SELECT * FROM essay;
# 创建评论表
DROP TABLE comments;
CREATE TABLE comments(
	comment_id INT PRIMARY KEY AUTO_INCREMENT,		# 评论id
	comment_user VARCHAR(10) NOT NULL,			# 评论人
	comment_essayid INT NOT NULL,				# 评论的文章id
	comment_content VARCHAR(200),				# 评论内容
	comment_commentid INT NULL,				# 那个评论下的评论
	FOREIGN KEY(comment_essayid) REFERENCES essay(essay_id)
);
INSERT INTO comments(comment_user,comment_essayid,comment_content)
	      VALUES('还看今朝','1','666厉害啊');
INSERT INTO comments(comment_user,comment_essayid,comment_content, comment_commentid)
	      VALUES('岁月无情','1','我也觉得很厉害', 1);
SELECT * FROM comments;

	

