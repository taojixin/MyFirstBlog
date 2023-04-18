<template>
  <div class="container">
    <!-- 欢迎 -->
    <div class="box-welcome">
      <h2>Liberty'blog</h2>
    </div>
    <!-- 进入 -->
    <div class="enter" @click="enter()">进入</div>
    <!-- <div class="enter" @click="jump('/home')">进入</div> -->
    <!-- 旋转边框 -->
    <div class="box-roating">
      <div class="roating"></div>
    </div>
    <!-- 流星 -->
    <div class="box">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <a href="https://beian.miit.gov.cn" target="_blank"
        >蜀ICP备2022007017号-1</a
      >
    </div>
    <!-- 遮挡层 -->
    <div class="zhedang" ref="zhe"></div>
  </div>
</template>

<script>
export default {
  methods: {
    jump(path) {
      this.$router.push(path);
    },
    enter() {
      setTimeout(() => {
        this.jump('/home')
      }, 500);
      this.$refs.zhe.style.width = '150vw'
      this.$refs.zhe.style.height = '150vw'

    }
  }
};
</script>

<style lang="less" scoped>
@bgcolor:#afc6ed;
.container {
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: @bgcolor;
  .zhedang {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #e9ebf6;
    transition: all 1s;
    z-index: 99;
    &:hover {
      cursor: pointer;
    }
  }
}
// 欢迎
.box-welcome {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  /* 投影效果 */
  -webkit-box-reflect: below 1px
    linear-gradient(transparent, rgba(0, 0, 0, 0.2));
  h2 {
    margin: 0;
    color: #fff;
    font-size: 96px;
    /* 字间距 */
    letter-spacing: 15px;
    /* 转大写 */
    text-transform: uppercase;
    text-align: center;
    line-height: 76px;
    outline: none;
    /* 自定义属性--c，可通过var函数对其调用 */
    --c: lightseagreen;
    /* 调用自定义属性--c，设置文字阴影（发光效果） */
    text-shadow: 0 0 10px var(--c), 0 0 20px var(--c), 0 0 40px var(--c),
      0 0 80px var(--c), 0 0 160px var(--c);
    /* 执行动画：动画名 时长 线性的 无限次播放 */
    animation: animatetitle 5s linear infinite;

    /* 定义动画 */
    @keyframes animatetitle {
      to {
        /* 色相旋转滤镜（设置度数可改变颜色） */
        filter: hue-rotate(360deg);
      }
    }
  }
}
// 进入
.enter {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 100px;
  border-radius: 10px;
  text-align: center;
  line-height: 100px;
  font-size: 50px;
  letter-spacing: 10px;
  z-index: 9;
  user-select: none; // 不可选择
  transition: all .5s;
  &:hover {
    cursor: pointer;
    color: rgb(137, 137, 237);
    text-shadow: 1px 1px 1px blue;
  }
}
// 旋转边框
.box-roating {
  position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  .roating {
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 300px;
    background: linear-gradient(#5c8be3, transparent 40%);
    animation: roll 3s linear infinite;
    // 遮挡层
    &::before {
      content: "";
      width: 280px;
      height: 280px;
      background-color: #afc6ed;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }
    // 阴影
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(#1764f2,transparent 40%);
      border-radius: 50%;
      /* 模糊滤镜 */
      filter: blur(30px);
      z-index: -1;
    }

    @keyframes roll {
      to {
        transform: rotateZ(360deg);
        // filter: hue-rotate(360deg);
      }
    }
  }
}
// 流星动画
.box {
  /* 绝对定位 */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: url(../../assets/xinkong.jpg);

  // 流星动画
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    background-color: #fff;
    border-radius: 50%;
    // 发光特效
    box-shadow: 0 0 0px 4px rgba(255, 255, 255, 0.1),
      0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
    // 执行动画
    animation: animate 3s linear infinite;

    // 拖尾效果
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 300px;
      height: 3px;
      background: linear-gradient(90deg, #fff, transparent);
    }
  }
  // 接下来分别为每一个流星设置位置、动画延迟时间、动画时长
  span:nth-child(1) {
    top: 0;
    right: 0;
    left: initial;
    // 延迟时间
    animation-delay: 0s;
    // 动画时长
    animation-duration: 1s;
  }
  span:nth-child(2) {
    top: -10px;
    right: 80px;
    left: initial;
    animation-delay: 0.2s;
    animation-duration: 3s;
  }
  span:nth-child(3) {
    top: 80px;
    right: -10px;
    left: initial;
    animation-delay: 0.4s;
    animation-duration: 2s;
  }
  span:nth-child(4) {
    top: -10px;
    right: 180px;
    left: initial;
    animation-delay: 0.6s;
    animation-duration: 1.5s;
  }
  span:nth-child(5) {
    top: -10px;
    right: 400px;
    left: initial;
    animation-delay: 0.8s;
    animation-duration: 2.5s;
  }
  span:nth-child(6) {
    top: -10px;
    right: 600px;
    left: initial;
    animation-delay: 1s;
    animation-duration: 3s;
  }
  span:nth-child(7) {
    top: 300px;
    right: -10px;
    left: initial;
    animation-delay: 1.2s;
    animation-duration: 1.75s;
  }
  span:nth-child(8) {
    top: -10px;
    right: 700px;
    left: initial;
    animation-delay: 1.4s;
    animation-duration: 1.25s;
  }
  span:nth-child(9) {
    top: -10px;
    right: 1000px;
    left: initial;
    animation-delay: 0.75s;
    animation-duration: 2.25s;
  }
  span:nth-child(10) {
    top: -10px;
    right: 450px;
    left: initial;
    animation-delay: 2.75s;
    animation-duration: 2.25s;
  }

  // 流星划过动画
  @keyframes animate {
    0% {
      transform: rotate(315deg) translateX(0);
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: rotate(315deg) translateX(-1000px);
      opacity: 0;
    }
  }
}
// 底部
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