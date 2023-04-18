<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Sidenav></Sidenav> -->
    <!-- <Home></Home> -->
    <!-- <Login></Login> -->
  </div>
</template>

<script>
import Home from '@/components/Home'
import Login from '@/components/login'
export default {
  name: "app",
  created() {
    document.body.removeChild(document.getElementById('Loading'))
  },
  components: { Home, Login},
};
</script>

<style lang="less" scoped>
#app {
  // display: flex;
  // align-items: center;
  // overflow: scroll;
  min-width: 1490px;
  min-height: 1px;
}
</style>
