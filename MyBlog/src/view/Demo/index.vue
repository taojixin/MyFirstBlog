<template>
  <div class="demo">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/About' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>练习项目</el-breadcrumb-item>
    </el-breadcrumb>
    <Tags v-for="(item, index) in tagsMessage" :key="item.id" :demoIndex="index" :toSon="item"></Tags>
  </div>
</template>

<script>
import {getDemoMes} from  '../../api/index'
import Tags from "@/view/Demo/Tags.vue";
export default {
  components: { Tags },
  async created() {
    // 获取所有demo信息，用于后面传递给子组件渲染数据
    this.tagsMessage = await getDemoMes(0)
  },
  data() {
    return {
      tagsMessage: [],
    };
  }
};
</script>

<style lang="less">
.demo {
  height: 700px;
  overflow-y: scroll;
}
</style>