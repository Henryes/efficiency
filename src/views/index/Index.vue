<template>
  <section>
    <el-container>
      <div class="box">
        <el-button type="text">加入我们</el-button
        ><el-button type="text">登录</el-button
        ><el-button type="text">广东站</el-button>
      </div>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          background-color="rgb(6, 2, 51)"
          mode="horizontal"
          @select="handleSelect"
        >
          <a href="/" class="icon"><img src="/_nuxt/img/9ef8ddb.png"/></a>
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">仿真与交易</template>
            <el-menu-item index="2-1">电力市场仿真系统（NEMS）</el-menu-item>
            <el-menu-item index="2-2">发电现货交易辅助决策系统</el-menu-item>
            <el-menu-item index="2-3">售电现货交易辅助决策系统</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">售电营销管理系统</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">智慧能源</el-menu-item>
          <el-menu-item index="4"
            ><a href="https://www.ele.me" target="_blank"
              >无线金融</a
            ></el-menu-item
          >
          <el-menu-item index="5">模拟交易</el-menu-item>
          <el-menu-item index="6">关于我们</el-menu-item>
          <el-button type="primary">联系我们</el-button>
        </el-menu>
      </el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer
        ><div class="foot">
          <div class="block1">
            <div class="block1-1">400-836-4234</div>
            <div>
              <p class="block1-2">工作日上午9:00-12:00，下午14:00-18:00</p>
              <p class="block1-3">业务合作：server@wuxiandianshi.com</p>
            </div>
          </div>
          <div class="block2">
            <p>了解无线</p>
            <p>无线资讯</p>
            <p>关于我们</p>
            <p>加入我们</p>
            <p>联系我们</p>
          </div>
          <div class="block2-2">
            <p>关注"无线电视"</p>
            <img src="@/assets/dewm.png" />
            <p></p>
            <p>无线服务尽在掌握</p>
            <p>无线电视微信公众号</p>
          </div>
          <div class="block2">
            <p>快速链接</p>
            <p>国家法案委</p>
            <p>广东电力交易中心</p>
            <p>国家电网</p>
            <p>国家能源网</p>
          </div>
          <div class="block2">
            <div></div>
            <p>国家能源局</p>
            <p>广州电力交易中心</p>
            <p>中国南方电网</p>
            <p>中国电力新闻网</p>
          </div>
          <div class="block2">
            <p>国家统计局</p>
            <p>广东省经信委</p>
            <p>广东省能源集团</p>
            <p>能源杂志</p>
          </div>
          <div class="block2">
            <p>南方能源监管办</p>
            <p>北京电力交易中心</p>
            <p>北极星电力网</p>
            <p>中国电力企业联合会u</p>
          </div>
        </div>
        <div class="block3">
          <p>
            COPYRIGHT © 无线电视 wuxiancloud.com 广州无线电视互联网科技有限公司
            版权所有 粤ICP备 12356972号-2
          </p>
        </div></el-footer
      >
    </el-container>
  </section>
</template>

<script></script>

<style scoped>
.box {
  background-color: rgb(6, 2, 51);
}
.el-button {
  float: right;
  padding: 15px 10px;
  text-align: center;
}
.icon {
  float: left;
  margin: 20px 10px;
}
.foot {
  display: flex;
  background: rgb(23, 28, 34);
  padding: 30px 30px;
}
.block1 {
  color: aliceblue;

  align-content: center;
  border-right: 1px solid #fff;
}
.block1-1 {
  padding: 15px 20px;
}
.block1-2 {
  padding: 10px 30px;
}
.block1-3 {
  padding: 10px 30px;
}
.block2 {
  display: flex;
  flex-direction: column-reverse;
  padding: 0 10px;
  color: aliceblue;
}
.block2-2 {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  color: aliceblue;
}
.block3 {
  background: rgb(23, 28, 34);
  color: #fff;
  display: flex;
  border-top: 1px solid #fff;
 justify-content:center;
}
</style>
