<template>
  <el-container class="home-container">
    <!-- 顶部 -->
    <el-header>
      <h1>后台管理系统</h1>
    </el-header>
    <!-- 中间 -->
    <el-container class="content-container">
      <!-- 左侧 -->
      <el-aside width="200px">
        <el-menu
          default-active="showintroduce"
          class="el-menu-vertical-demo"
          :unique-opened="true"
          :router="true"
        >
          <!-- 个人信息管理 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>个人介绍管理</span>
            </template>
            <el-menu-item index="showintroduce">个人信息</el-menu-item>
            <el-menu-item index="modifyintr">修改信息</el-menu-item>
          </el-submenu>
          <!-- demo管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-files"></i>
              <span>Demo 管理</span>
            </template>
            <el-menu-item index="modifydemo">修改 Demo</el-menu-item>
            <el-menu-item index="adddemo">添加 Demo</el-menu-item>
          </el-submenu>
          <!-- 笔记管理 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>笔记管理</span>
            </template>
            <el-menu-item index="modifynote">修改笔记</el-menu-item>
            <el-menu-item index="addnote">添加笔记</el-menu-item>
          </el-submenu>
          <!-- 留言管理 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-comment"></i>
              <span>留言管理</span>
            </template>
            <el-menu-item index="managemes">管理留言</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  created() {
  },
  data() {
    return {};
  },
  methods: {
    jump(path) {
      console.log("dsfs");
      this.$router.push(path)
    }
  },
};
</script>

<style lang="less">
.home-container {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  border: 1px solid pink;
  background-color: #93a0b8;
  overflow: hidden;

  .content-container {
    width: 100%;
    .el-header {
      background-color: #b1c5ea;
      display: flex;
      h1 {
        margin: 0;
      }
    }
    .el-main {
      background-color: #dee5f3;
      width: 100%;
    }
  }
}
</style>