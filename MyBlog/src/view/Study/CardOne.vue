<template>
  <div class="card-one">
    <div class="content">
      <h2>{{message.index}}</h2>
      <h3>{{message.note_title}}</h3>
      <p>
        {{message.note_describe}}
      </p>
      <router-link class="link" target="_blank" :to="{path:'/notes',query:{id:noteId}}">Read More</router-link>
    </div>
    <div class="show">
      <h1>{{message.note_title}}</h1>
    </div>
  </div>
</template>

<script>
// // vanilla-tilt.js是一个平滑的3D倾斜JS库，具体参数配置查文档
import VanillaTilt from "vanilla-tilt";
export default {
  created() {
    this.noteId = this.message.id
  },
  mounted() {
    this.threeD();
  },
  data() {
    return {
      noteId: 0
    }
  },
  methods: {
    // 3D效果
    threeD() {
      VanillaTilt.init(document.querySelectorAll(".card-one"), {
        max: 8, //最大倾斜度数
        speed: 400, //倾斜转换的速度
        glare: true, //是否开启眩光效果
        "max-glare": 0.2, //最大眩光的不透明度
      });
    },
    // 跳转
    jump() {
      this.$router.push('/notes')
    }
  },
  props: {
    // 父组件传过来的值
    message: {
      type: Object
    }
  }
};
</script>

<style lang="less" scoped>
h3,
h2,
p,
h1 {
  margin: 0;
}
.card-one {
  position: relative;
  width: 800px;
  height: 200px;
  // 半透明背景
  background-color: rgba(162, 207, 230, .9);
  // 背景模糊（毛玻璃）
  backdrop-filter: blur(50px);
  margin: 0 auto;
  border-radius: 10px;
  /* 阴影 */
  box-shadow: 10px 10px 15px rgba(64, 67, 81, 0.5);
  overflow: hidden;
  flex: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  margin-top: 40px;
  margin-bottom: 40px;

  .content {
    padding: 20px;
    text-align: center;
    transform: translateY(100px);
    opacity: 0;
    transition: 0.3s;

    h2 {
      position: absolute;
      top: -20px;
      right: 25px;
      font-size: 108px;
      color: rgba(255, 255, 255, 0.4);
    }

    h3 {
      font-size: 28px;
      color: rgba(255, 255, 255, 0.6);
    }

    p {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.4);
      font-weight: 300;
      margin: 30px 0 15px 0;
    }

    .link {
      position: relative;
      display: inline-block;
      padding: 8px 20px;
      margin-top: 15px;
      background-color: rgba(26, 52, 128, 0.4);
      color: rgba(255, 255, 255, 0.6);
      text-decoration: none;
      border-radius: 20px;
      font-weight: 500;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  }

  .show {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    // transform: translateY(50%);
    opacity: 1;
    color: rgba(255, 255, 255, 0.4);
    transition: 0.3s;

    h1 {
      text-align: center;
    }
  }

  &:hover .content {
    transform: translateY(0);
    opacity: 1;
  }

  &:hover .show {
    opacity: 0;
    transform: translateY(110px);
  }
}
</style>