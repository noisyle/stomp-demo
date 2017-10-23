<template>
  <div id="app">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router="true">
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">例子</template>
        <el-menu-item index="/stomp">推送</el-menu-item>
        <el-menu-item index="/echarts">ECharts</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="http://element.eleme.io" target="_blank">Element官网</a></el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeIndex: '/'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
</style>
