<template>
  <div class="tag">
    <div class="content">
      <a href="#">Liberty</a>
      <h2>QQ:491675919</h2>
      <span>I'm a front-end developer enthusiast,<br/>I'm learning new knowledge every day to share with you,<br/>I hope in the days to come<br/>Keep going!!</span>
    </div>
    <div class="cylinder">
      <div class="item" style="--i:1;--w:1.5"></div>
      <div class="item" style="--i:2;--w:1.6"></div>
      <div class="item" style="--i:3;--w:1.4"></div>
      <div class="item" style="--i:4;--w:1.7"></div>
      <div class="end" style="--i:1" ></div>
    </div>
    <div class="img"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.tag {
  position: relative;
  width: 700px;
  height: 400px;
  border: #fff 10px solid;
  background-color: rgb(120, 140, 200);
  border-radius: 20px;
  overflow: hidden;

  .content {
    position: absolute;
    width: 200px;
    height: 300px;
    left: 0;
    margin: 75px 50px;
    transition: 1s;

    a {
      // text-decoration: none; 这里不用写，全局样式中写了
      color: #fff;
      font: 900 28px "";
    }
    h2 {
      transition: 0.5s 1s;
      opacity: 0;
      color: rgb(30, 210, 200);
    }
    span {
      transition: 0.5s 1s;
      color: #fff;
      font: 500 15px "";
      position: absolute;
      top: 70px;
    }
  }

  .cylinder {
    position: absolute;
    top: -130px;
    right: -240px;

    .item,
    .end {
      position: absolute;
      right: calc(var(--i) * 100px);
      width: calc(var(--w) * 40px);
      height: 500px;
      overflow: hidden;
      border-radius: 100px;
      transform: rotateZ(220deg) translate(0, 0);
      background: rgb(240, 220, 150);
      transition: 0.5s 0.5s;
    }
    .item:nth-child(2) {
      background: rgb(240, 190, 230);
    }
    .end {
      left: -470px;
      top: -140px;
      width: 70px;
      background-color: rgb(90, 220, 150);
    }
  }
  .img {
    width: 250px;
    height: 250px;
    position: absolute;
    background-image: url(../../assets/Headportrait.jpg);
    background-size: cover;
    margin: 70px;
    opacity: 0;
    transition: .5s;
  }

  // 动画
  &:hover .cylinder div {
    transition: 0.5s calc(var(--i) * 0.1s);
    transform: rotateZ(220deg) translate(-200px, 400px);
  }
  &:hover .content{
    transition: 1s .5s;
    left: 370px;
  }
  &:hover .content span {
    transition: 1s .5s;
    top: 105px;
  }
  &:hover .content h2 {
    transition: 1s .5s;
    opacity: 1;
  }
  &:hover .img {
    transition: 1s 1s;
    opacity: 1;
  }



}
</style>