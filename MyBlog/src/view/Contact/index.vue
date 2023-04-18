<template>
  <div class="contact">
    <!-- 面包屑到导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/About' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>关于我</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 展示区域 -->
    <div class="show-me">
      <!-- Just about me -->
      <h2>Just about me</h2>
      <ul>
        <p>处于二十岁的开头，忧郁并堕落着，痛并快乐着。</p>
        <p>现在的状态：摆也摆不烂，卷也卷不赢，躺又躺不平......</p>
        <p>
          年少轻狂的我同样有对未来的迷茫，对生活的愤懑，对社会的厌恶，对世道的鄙夷......
        </p>
        <p>
          在阅尽沧桑的饱览岁月的人看来，这些也许很幼稚，但这不正是青春的特质吗？
        </p>
        <p>
          青春既然不能够被挽留，也不能够被拒绝，那就用自己的方式去挥霍或者，珍惜。
        </p>
        <hr />
      </ul>
      <!-- About the blog -->
      <h2>About the blog</h2>
      <ul>
        <p>域名：http://www.libertys.cn</p>
        <p>制作时间：2022年2月低-2022年5月底</p>
        <p>
          本博客是自己独立完成的第一个完整的前后端分离项目，页面很简洁，用到了自己几乎所有学到的东西。从购买云服务器、域名备案，再到后来整个的完成过程，学到了很多，了解了很多，也巩固了很多，完成后这个项目我不会再美化与更改，虽然有很多不足，但更想留着成为一份纪念。
        </p>
        <p>博客技术在：vue2、axios、element-ui、node.js、MySQL以及各种库。</p>
      </ul>
      <h2>My contact information</h2>
      <!-- 联系方式 -->
      <div class="qq-box">
        <i class="iconfont icon-QQ-circle-fill"></i>
        <div class="img-box">
          <img src="@/assets/qq.png" alt="" />
          <div class="sanjiao"></div>
        </div>
      </div>
      <!-- 微信 -->
      <div class="wx-box">
        <i class="iconfont icon-weixin"></i>
        <div class="img-box">
          <img src="@/assets/wx.png" alt="" />
          <div class="sanjiao"></div>
        </div>
      </div>
      <!-- github -->
      <div class="github-box">
        <a href="https://github.com/taojixin" target="_blank">
          <i class="iconfont icon-github"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.contact {
  .show-me {
    position: relative;
    margin-top: 20px;
    height: 650px;

    h2 {
      color: rgb(79, 109, 116);
      text-shadow: 2px 2px 2px rgb(153, 187, 195);
    }
    p {
      color: rgb(79, 109, 116);
    }
    ul {
      padding-right: 40px;
    }

    // 联系方式
    .qq-box,
    .wx-box,
    .github-box {
      position: absolute;
      bottom: 30px;
      left: 40px;
      &:hover {
        cursor: pointer;
        .img-box {
          display: block;
        }
        i {
          color: #6f94c5;
        }
      }
      .img-box {
        position: absolute;
        top: -120px;
        left: -20px;
        width: 100px;
        height: 100px;
        display: none;
        img {
          position: absolute;
          width: 100px;
          height: 100px;
          z-index: 9;
        }
        .sanjiao {
          position: absolute;
          bottom: -10px;
          left: 40px;
          background: #c3d0e1;
          width: 20px;
          height: 20px;
          transform: rotate(45deg);
        }
      }
      i {
        font-size: 60px;
        color: #94adcd;
      }
    }
    .wx-box {
      left: 120px;
      i {
        font-size: 55px;
      }
    }
    .github-box {
      left: 195px;
      a {
        color: #000;
      }
    }
  }
}
</style>