<template>
  <div class="show-tag">
    <ShowDemo :demoId="demo_id">
      <Login></Login>
    </ShowDemo>
  </div>
</template>

<script>
import Login from '@/components/login/index.vue'
import ShowDemo from "../ShowDemo.vue";
export default {
  components: {
    ShowDemo,
    Login
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