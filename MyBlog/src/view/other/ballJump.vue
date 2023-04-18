<template>
  <div class="ball-jump">
    <div class="ball-box">
      <div class="ball">
        <div class="a"></div>
        <div class="b"></div>
      </div>
    </div>
    <div class="box-shadow"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.ball-jump {
  width: 500px;
  height: 500px;
  border: 1px solid pink;
  /* 弹性布局 水平+垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 渐变背景 */
  background: linear-gradient(200deg, #2f80ed, #56ccf2);
  .ball-box {
    width: 150px;
    height: 150px;
    /* 执行动画：动画名 时长 减速 先反向再正向 无限次播放 */
    animation: bounce 0.6s ease-out alternate-reverse infinite;
    .ball {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-color: #f7972b;
      box-shadow: 0 0 2px 4px #fff; // 篮球的外边框
      overflow: hidden;
      position: absolute;
      z-index: 1;
      /* 执行动画：动画名 时长 线性 无限次播放 */
      animation: roll 3s linear infinite;
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 5px solid #fff;
        /* 加一点点模糊 */
        filter: blur(0.5px);
      }
      &::before {
        left: -70%;
      }
      &::after {
        right: -70%;
      }
      .a,
      .b {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
      }
      .a {
        width: 200px;
        height: 5px;
      }
      .b {
        width: 5px;
        height: 200px;
      }
    }
  }
  .box-shadow {
    width: 150px;
    height: 5px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    bottom: 50px;
    z-index: 1;
    filter: blur(1.5px);
    animation: shadows 0.6s ease-out alternate-reverse infinite;
  }
  // 篮球弹跳动画
  @keyframes bounce {
    0% {
      transform: translateY(15vh);
    }
    100% {
      transform: translateY(-20vh);
    }
  }
  // 篮球旋转动画
  @keyframes roll {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  // 阴影动画
  @keyframes shadows {
    0% {
      transform: scale(0.15, 1.25);
    }
    100% {
      transform: scale(1.25, 0.75);
    }
  }
}
</style>