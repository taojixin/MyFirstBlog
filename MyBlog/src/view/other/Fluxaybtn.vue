<template>
  <div class="fluxay-btn">
    <a href="#">button</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.fluxay-btn {
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  a {
    position: relative;
    width: 300px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 24px;
    color: #fff;
    /* 渐变背景 */
    background: linear-gradient(to right, #03a9f4, #f441a5, #ffeb3b, #09a8f4);
    /* 背景渐变色大小 */
    background-size: 400%;
    /* 圆角 */
    border-radius: 50px;
    z-index: 1;
    &::before {
      content: "";
      position: absolute;
      top: -5px;
      left: -5px;
      bottom: -5px;
      right: -5px;
      background: linear-gradient(to right, #03a9f4, #f441a5, #ffeb3b, #09a8f4);
      background-size: 400%;
      border-radius: 50px;
      z-index: -1;
      filter: blur(20px);
    }
    &:hover {
      animation: streamer 8s infinite;
    }
    &:hover::before {
      animation: streamer 8s infinite;
    }
  }
}
@keyframes streamer {
  100% {
    background-position: -400% 0;
  }
}
</style>