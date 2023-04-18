<template>
  <div class="show-tag">
    <ShowDemo :demoId="demo_id">
      <Tag></Tag>
      <!-- <Card></Card> -->
    </ShowDemo>
  </div>
</template>

<script>
import Login from '@/components/login/index.vue'
import ShowDemo from "../ShowDemo.vue";
import Card from '@/view/other/Card.vue'
import Tag from "@/view/other/Tag.vue";
export default {
  components: {
    ShowDemo,
    Tag,Card,Login
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