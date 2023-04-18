<template>
  <div class="notes">
    <div class="content markdown-body" v-html="content"></div>
  </div>
</template>

<script>
import {getNoteContent} from '@/api/index'
export default {
  async created() {
    const noteId = this.$route.query.id
    const result = await getNoteContent(noteId)
    this.content = result.data.content
  },
  data() {
    return {
      content: ''
    }
  }
};
</script>

<style lang="less">
.notes {
  display: flex;
  width: 70%;
  margin: 0 auto;
}
.content {
  ul {
    list-style: disc !important;
  }
  flex: 1;
  // 半透明背景
  // background-color: rgba(0, 0, 0, 0.55);
  // // 背景模糊（毛玻璃）
  // backdrop-filter: blur(30px);
  background-color: #fff;
  color: black;
  font-size: 14px;
  height: 720px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 10px 10px;
}
</style>