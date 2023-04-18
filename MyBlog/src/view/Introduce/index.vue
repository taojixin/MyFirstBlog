<template>
  <div class="introduce">
    <el-breadcrumb  separator="/">
      <el-breadcrumb-item :to="{path:'/About'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item>自我介绍</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 顶部 -->
    <header>
      <h1 class="me">Liberty</h1>
      <hr />
      <p class="my_sentence">{{personal.my_signature}}</p>
    </header>
    <!-- 中间 -->
    <article>
      <div class="box_left">
        <img src="@/assets/Headportrait.jpg" alt="" />
      </div>
      <div class="box_right">
        <table>
          <tr>
            <td>姓名 | <span>{{personal.my_name}}</span></td>
            <td>电话 | <span>{{personal.my_phone}}</span></td>
          </tr>
          <tr>
            <td>性别 | <span>{{personal.my_sex}}</span></td>
            <td>邮箱 | <span>{{personal.my_email}}</span></td>
          </tr>
          <tr>
            <td>出生 | <span>{{personal.my_birthday}}</span></td>
            <td>Q Q | <span>{{personal.my_qq}}</span></td>
          </tr>
          <tr>
            <td>居住 | <span>{{personal.my_address}}</span></td>
            <td>户籍 | <span>{{personal.my_koseki}}</span></td>
          </tr>
          <tr>
            <td>学历 | <span>{{personal.my_education}}</span></td>
            <td>学校 | <span>{{personal.my_school}}</span></td>
          </tr>
          <tr>
            <td>专业 | <span>{{personal.my_professional}}</span></td>
            <td>状态 | <span>{{personal.my_state}}</span></td>
          </tr>
        </table>
      </div>
    </article>
    <!-- 底部 -->
    <footer>
      <h3>兴趣爱好：</h3>
      <p>{{personal.my_hobbyies}}</p>
    </footer>
  </div>
</template>

<script>
import {getMyIntroduce} from'../../api/index'
export default {
  async created() {
    this.personal = await getMyIntroduce()
  },
  data() {
    return {
      personal: {
        myName: '陶继鑫',
        phone: '18581766104',
        sex: '男',
        email: '491675919@qq.com',
        birthday: '2001.07.24',
        qqNumber: '491675919',
        address: '四川省资阳市',
        koseki: '四川省资阳市', // 户籍
        education: '本科',
        school: '四川工商学院',
        professional: '软件工程',
        studyState: '学生就读',
        signature: '如果debugging是一种消灭bug的过程，那编程就一定是把bug放进去的过程。',
        hobbies: '吃饭睡觉打豆豆！'
      }
    };
  },
};
</script>

<style lang="less" scoped>
.introduce {
  width: 100%;
  height: 100%;
  // 半透明背景
  // background-color: rgba(100, 166, 197, 0.8);
  // 背景模糊（毛玻璃）
  // backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
}
header {
  flex: 1;

  .me {
    color: #eff0f2;
    margin: 0;
    padding-top: 20px;
    text-align: center;
    /* 自定义属性--c，可通过var函数对其调用 */
    --c: #84a7ec;
    /* 调用自定义属性--c，设置文字阴影（发光效果） */
    text-shadow: 0 0 10px var(--c), 0 0 20px var(--c), 0 0 40px var(--c),
      0 0 80px var(--c), 0 0 160px var(--c);
    /* 执行动画：动画名 时长 线性的 无限次播放 */
    // animation: animate 5s linear infinite;

    /* 定义动画 */
    @keyframes animate {
      to {
        /* 色相旋转滤镜（设置度数可改变颜色） */
        filter: hue-rotate(360deg);
      }
    }
  }
  hr {
    width: 90%;
    margin: 10px auto;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
  .my_sentence {
    color: #8fa8d5;
    text-align: center;
    margin: 5px auto;
  }
}
article {
  flex: 5;
  display: flex;
  // border: 1px solid red;

  .box_left {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1;

    img {
      width: 200px;
      height: 200px;
      border-radius: 100px;
      margin: 10 auto;
    }

  }

  .box_right {
    flex: 2;
    // border: 1px solid blue;
    color: #0b9ade;

    table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 50px 50px;

      tr {
        flex: 1;
        display: flex;
        margin: 20px 0;

        td {
          display: block;
          flex: 1;
          span {
            color: #46659f;
          }
        }
      }
    }
  }
}

footer {
  flex: 1;
  color: #093b99;
  padding: 0 150px;

  h3 {
    margin: 0;
  }
  p {
    margin: 5px 0;
    font-size: 15px;
    text-indent: 3em;
  }
}
</style>