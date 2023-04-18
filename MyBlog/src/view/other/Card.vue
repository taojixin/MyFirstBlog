<template>
  <div class="card">
    <!-- 正面那一层 -->
    <div class="front">
      <div class="icon">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <span>3D旋转</span>
    </div>
    <!-- 翻面那一层 -->
    <div class="back">
      <span>CSS</span>
      <p>transform-style: preserve-3d;
        perspective: 3000px;</p>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
.card {
  display: flex;
  justify-content: center;
  width: 600px;
  margin: 10px auto;
  text-align: center;
  position: relative;
  transform-style: preserve-3d;
  perspective: 3000px;

  .front {
    background-image: linear-gradient(
      to right,
      rgba(161, 147, 207, 0.9),
      rgba(126, 164, 235, 0.5)
    );
    // background: rgba(40, 69, 123, .9);
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 5px 20px rgba(221, 213, 213, 0.1);
    transition: 0.5s ease;

    .icon {
      height: 80px;

      img {
        width: 50px;
        height: 60px;
      }
    }

    span {
      font-size: 22px;
      font-weight: 600;
      text-transform: uppercase;
    }
  }

  .back {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    // 防止padding撑大盒子
    box-sizing: border-box;
    width: 100%;
    height: 220px;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%
      ),
      radial-gradient(
          at top center,
          rgba(232, 187, 187, 0.4) 0%,
          rgba(221, 39, 39, 0.4) 120%
        )
        #989898;
    background-blend-mode: multiply, multiply;
    padding: 30px;
    color: #fff;
    opacity: 0;
    transform: translateY(110px) rotateX(-90deg);
    transition: 0.5s ease;

    p {
      margin-top: 12px;
      text-align: justify;
      line-height: 23px;
    }
  }

  &:hover .front {
    opacity: 0;
    transform: translateY(-110px) rotateX(90deg);
  }
  &:hover .back {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
  &:hover {
    cursor: pointer;
  }
}
</style>