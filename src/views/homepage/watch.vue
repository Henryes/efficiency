<template>
  <section>
    <div class="box">
      <i class="el-icon-edit"></i>无线电视<i class="el-icon-edit"></i>
    </div>
    <el-menu
      :default-active="activeIndex"
      font-size="20px"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">最新文章</el-menu-item>
      <el-submenu index="2">
        <template slot="title">政策法规</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" >市场动态</el-menu-item>
      <el-menu-item index="4"
        ><a href="https://www.ele.me" target="_blank">行业新闻</a></el-menu-item
      >
    </el-menu>
    <div class="column"><i class="el-icon-edit"></i>会点专栏</div>
  <market />
  </section>
</template>

<script>
import market from '@/views/homepage/market.vue'
export default {
  name: "homepage",
  components: {market,},
  date(){}
};
</script>

<style scoped>


.box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 60px;
  font-size: 36px;
  margin: 10px;
}
.column{
  font-size: 20px;
}
</style>
