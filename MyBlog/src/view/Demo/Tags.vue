<template>
  <div @click="jump()" class="tags">
    <div class="sequence-tags">{{ demoIndex + 1 }}</div>
    <div class="describe-tags">{{ toSon.demo_describe }}</div>
    <p class="knowledge-tags">
      <i class="iconfont icon-zhishidian"></i>{{ toSon.demo_knowkedge }}
    </p>
    <img class="img-tags" :src="imgSrc" alt="" />
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {};
  },
  props: {
    // 获取父组件传递过来的参数并渲染
    toSon: {
      type: Object,
      default: {
        id: 0,
        user_id: 0,
        demo_code: "",
        demo_createtime: "",
        demo_describe: "",
        demo_knowkedge: "",
        path: "",
      },
    },
    demoIndex: 0,
  },
  methods: {
    jump() {
      // 通过路由传递参数demo_id，然后跳转到的那个组件再用过id获取相关内容
      this.$router.push(
        `/${this.toSon.path}?id=${this.toSon.id}`
      );
    },
  },
  computed: {
    imgSrc: function () {
      return `/admin/getdemoimg?demo_id=${this.toSon.id}`;
    },
  },
};
</script>

<style lang="less">
.tags {
  position: relative;
  width: 700px;
  height: 100px;
  margin: 30px auto;
  background-color: white;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0 5px 5px 5px #c1d0e3;
    .describe-tags {
      border-bottom: 1px solid blue;
      color: #2376dc;
    }
    .knowledge-tags {
      color: #4a5564;
    }
  }
  // 序号
  .sequence-tags {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #8b99ab;
    font-size: 50px;
    text-shadow: 3px 3px 3px #c1d0e3;
  }
  // 描述
  .describe-tags {
    position: absolute;
    top: 30px;
    left: 90px;
    color: #6e86a4;
  }
  // 知识点
  .knowledge-tags {
    position: absolute;
    top: 50px;
    left: 90px;
    font-size: 12px;
    color: #a6b2c1;
    i {
      vertical-align: middle;
      padding-right: 4px;
    }
  }
  // 图片
  .img-tags {
    position: absolute;
    top: 10px;
    right: 100px;
    width: 120px;
    height: 80px;
  }
}
</style>