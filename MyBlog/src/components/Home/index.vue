<template>
  <div class="sidenav">
    <!-- 左侧盒子 -->
    <div class="left-box">
      <!-- 导航信息列表 -->
      <ul>
        <li
          @click="jump(item.path)"
          class="item"
          v-for="item in directory"
          :key="item.path"
        >
          <!-- 图标 -->
          <i :class="item.class"></i>
          {{ item.text }}
        </li>
        <hr />
        <li class="item" @click="jump('contact')" >
          <i class="iconfont icon-lianjie"></i>
          关于我
        </li>
      </ul>
      <!-- 左侧底部 -->
      <div class="my-info">
        <img src="@/assets/Headportrait.jpg" />
        <span>Liberty</span>
        <i class="iconfont icon-user"> </i>
      </div>
    </div>
    <!-- 右侧盒子 -->
    <div class="right-box">
      <router-view></router-view>
      <div class="handler"></div>
    </div>
    <!-- 底部 -->
    <div class="bottom"><a href="https://beian.miit.gov.cn" target="_blank">蜀ICP备2022007017号-1</a></div>
  </div>
</template>

<script>
export default {
  created() {
    // vue浏览器刷新跳转指定页面
    // if(this.$router.path !== '/sidenav') {
    //   this.$router.replace('/sidenav')
    // }
    // 发起请求
    // this.getDirectory()
  },
  data() {
    return {
      // 目录项
      directory: [
        { path: "introduce", class: "iconfont icon-user", text: "自我介绍" },
        { path: "resume", class: "iconfont icon-namecard", text: "简历" },
        { path: "demo", class: "iconfont icon-form-fill", text: "练习  Demo" },
        { path: "study", class: "iconfont icon-suggest", text: "我的笔记" },
        { path: "comments", class: "iconfont icon-3column", text: "留言" },
        // { path: "contact", class: "iconfont icon-lianjie", text: "联系" },
      ],
    };
  },
  methods: {
    // 跳转的函数
    jump(path) {
      this.$router.push(`/${path}`);
    },
    // 请求获取directory数据
    async getDirectory() {
      const data = await reqDirectory();
      this.directory = data;
    },
    // 侧边栏的显示与隐藏
    showNav() {
      let handler = document.querySelector(".handler");
      let left_box = document.querySelector(".left-box");
      handler.addEventListener("click", function () {
        console.log(this.classList);
        if (!this.classList.contains("close")) {
          left_box.style.width = 0;
          left_box.style.opacity = 0;
          this.classList.add("close");
        } else {
          left_box.style.width = 250 + "px";
          left_box.style.opacity = 1;
          this.classList.remove("close");
        }
      });
    },
    // 控制导航框的选择停留
    navStay() {
      let items = document.querySelectorAll(".item");
      items.forEach((item) => {
        item.addEventListener("click", function() {
          items.forEach((item) => {
            item.classList.remove("active");
          });
          this.classList.add("active");
        });
      });
    },
  },
  mounted() {
    // 侧边栏的显示与隐藏
    this.showNav();
    // 控制导航框的选择停留
    this.navStay();
  },
};
</script>

<style lang="less" scoped>
.sidenav {
  position: relative;
  // 100%仓库高度
  width: 80%;
  margin: 0 auto;
  height: 740px;
  padding-top: 6px;
  overflow: hidden;
  display: flex;
}
.iconfont {
  color: #fff;
  font-size: 24px;
}
.left-box {
  width: 250px;
  
  height: 720px;
  // 半透明背景
  background-color: rgba(95, 150, 190, .3);
  // background-color: #2f90b9;
  // 背景模糊（毛玻璃）
  // backdrop-filter: blur(30px);
  position: relative;
  color: #fff;
  font-size: 14px;
  // 弹性布局 垂直排列
  display: flex;
  flex-direction: column;
  // 设置过渡
  transition: 0.5s ease;
  // 不让文字换行
  white-space: nowrap;
  // 圆角边框
  border-radius: 10px;

  ul {
    width: 90%;
    margin: 25px auto;
    padding: 0;
    // 将高度铺满
    flex: 1;

    li {
      height: 46px;
      // 弹性布局 垂直居中
      display: flex;
      align-items: center;
      padding-left: 12px;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.3s;

      &.active,
      &.active:hover {
        background-color: rgba(255, 255, 255, 0.4);
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }

      .iconfont {
        margin-right: 16px;
      }
    }
    hr {
      width: 90%;
      margin: 18px auto;
      border: none;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
  }

  .my-info {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    padding: 24px;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 14px;
    }
    span {
      flex: 1;
    }
    .iconfont {
      font-size: 20px;
      margin-right: 0;
    }
  }
}

.right-box {
  flex: 1;
  position: relative;
  // border: 2px solid blue;
  margin: 0px 20px;
  box-sizing: border-box;
  
  min-width: 730px;
  min-height: 700px;
  // height: 720px;
  padding: 20px;

  .handler {
    width: 10px;
    height: 50px;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s;

    &::before,
    &::after {
      content: "";
      background-color: rgba(255, 255, 255, 0.9);
      position: absolute;
      left: 0;
      width: 100%;
      height: 50%;
      border-radius: 10px 10px 0 0;
      /* 过渡 */
      transition: 0.2s;
    }
    &::after {
      bottom: 0;
      border-radius: 0 0 10px 10px;
    }
    &:hover::before {
      transform: skewX(-15deg);
    }
    &:hover::after {
      transform: skewX(15deg);
    }
    &.close:hover::before {
      transform: skewX(15deg);
    }
    &.close:hover::after {
      transform: skewX(-15deg);
    }
  }

  &:hover .handler {
    opacity: 1;
  }
}

.bottom {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  a {
    color: #5796e3;
    font-size: 10px;
  }
}
</style>