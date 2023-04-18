<template>
  <div class="study">
    <!-- 笔记分类下拉列表 -->
    <DropDown @getSort="getSort"></DropDown>
    <!-- 面包屑导航 -->
    <el-breadcrumb  separator="/">
      <el-breadcrumb-item :to="{path:'/About'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item>笔记</el-breadcrumb-item>
    </el-breadcrumb>
    <CardOne v-for="item in content" :key="item.index" :message="item"></CardOne>

  </div>
</template>

<script>
import CardOne from '@/view/Study/CardOne.vue'
import DropDown from '@/view/Study/DropDown.vue'
import {getSomeNote, getAllNotes} from '@/api/index'
export default {
  components: {CardOne, DropDown},
  data() {
    return {
      content: [],
      noteSort: ''
    }
  },
  created() {
    this.getAllNotes()
  },
  methods: {
    // 获取子组件传递过来的值，@getSort中的getSort为子组件自定义的事件名
    async getSort(value) {
      this.noteSort = value
      if (this.noteSort === '全部') {
        this.getAllNotes()
        return
      }
      const result = await getSomeNote(this.noteSort)
      this.content = result.data.notes
    },
    // 获取所有笔记信息
    async getAllNotes() {
      const result = await getAllNotes(0)
      this.content = result.data.content
      console.log(this.content);
    }
  }
  
};
</script>

<style lang="less" scoped>
.study {
  position: relative;
  max-height: 740px;
  height: 740px;
  overflow-y: scroll;
}
</style>