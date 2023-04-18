<template>
  <div class="show-tag">
    <ShowDemo :demoId="demo_id">
      <FluxayBtn></FluxayBtn>
    </ShowDemo>
  </div>
</template>

<script>
import FluxayBtn from "../../other/Fluxaybtn.vue"
import ShowDemo from "../ShowDemo.vue";
export default {
  components: {
    ShowDemo,
    FluxayBtn
  },
  data: {
    // demo的id，用于获取demo代码code
    demo_id: 0,
  },
  created() {
    // 获取路由传递从参数demo_id然后传递给子组件
    this.demo_id = this.$route.query.id;
  }
};
</script>

<style lang="less">
</style>