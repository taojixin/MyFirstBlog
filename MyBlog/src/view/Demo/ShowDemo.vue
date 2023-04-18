<template>
  <div class="show-demo">
    <div class="left-demo">
      <slot></slot>
    </div>
    <div class="right-demo">
      <div class="code-demo markdown-body" v-html="code"></div>
    </div>
  </div>
</template>

<script>
import {getDemoMes} from "@/api/index";
export default {
  data() {
    return {
      code: ''
    };
  },
  props: {
    demoId: 0
  },
  async created() {
    this.getCode();
  },
  methods: {
    async getCode() {
      const data = await getDemoMes(this.demoId);
      this.code = data[0].demo_code
    },
  },
};
</script>

<style lang="less">
.show-demo {
  position: relative;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  margin: 0 auto;
  height: 100vh;

  .left-demo {
    position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
  z-index: 9;
    // flex: 1;
    // border: 1px solid pink;
  }
  .right-demo {
    position: absolute;
    width: 600px;
    height: 700px;
    right: 50px;
  top: 50%;
  transform: translateY(-50%);
    overflow-y: scroll;
    // float: left;
    // flex: 1;
    // border: 1px solid blue;
  }
}
</style>