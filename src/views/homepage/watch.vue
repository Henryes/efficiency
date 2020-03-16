<template>
  <section>
    <div class="box">
      <i class="el-icon-eleme"></i>无线电视<i class="el-icon-eleme"></i>
    </div>
    <div class="column"><i class="el-icon-edit"></i>会点专栏</div>
    <div class="zl">
    <el-row>
      <el-col :span="17"
        ><div class="imgbox">
          <el-col :span="6">
            <img src="@/views\homepage\picture\t1.png"/></el-col
          ><el-col :span="8"
            ><i>现货交易市场即将到来，还不会做负荷预测？</i>
            <p>2019-2-12</p>
            <p>
              无论是在过去的电力中长期交易市场里，还是即将到来的电力现货。。。人都是地地道道给d'f5
              的提高房地产吃个饭后面大家安利达大厦里看风景阿里大佬记录卡
            </p></el-col
          >
          <el-col class="boxl" :span="9"
            ><i>现货交易市场即将到来，还不会做负荷预测？</i>
            <p>2019-2-12</p>
            <i>现货交易市场即将到来，还不会做负荷预测？</i>
            <p>2019-2-12</p></el-col
          >
        </div></el-col
      >
      <el-col :span="7" class="zl2"><img src="@/views\homepage\picture\t2.png"/></el-col>
    </el-row></div>
    <!-- <el-menu
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
      <el-menu-item index="3">市场动态</el-menu-item>
      <el-menu-item index="4"
        ><a class="wz" href="https://www.ele.me" target="_blank"
          >行业新闻</a
        ></el-menu-item
      >
    </el-menu> -->
    <el-tabs type="border-card">
      <el-tab-pane label="最新文章"
        ><el-col :span="8"
          ><div class="imgbox">
            <el-col :span="7">
              <img src="@/views\homepage\picture\dy.png"/></el-col
            ><el-col :span="10"
              ><a href="https://www.ele.me" target="_blank"
                >路透：王者荣耀或推动腾x季营收飙升50%</a
              >
              <p>2019-3-22</p></el-col
            >
          </div></el-col
        >
        <el-col :span="8"
          ><div class="imgbox">
            <el-col :span="7">
              <img src="@/views\homepage\picture\de.png" /> </el-col
            ><el-col :span="10"
              ><i>晨训推两款lte芯片，赵卫国在炮轰高通联芯</i>
              <p>2019-3-22</p></el-col
            >
          </div></el-col
        >
        <el-col :span="8"
          ><div class="imgbox">
            <el-col :span="7">
              <img src="@/views\homepage\picture\2dy.png"/></el-col
            ><el-col :span="10"
              ><i>新松机器人公布半年报，净利增加3.33%</i>
              <p>2020-4-22</p></el-col
            >
          </div></el-col
        >
        <el-col :span="8"
          ><div class="imgbox">
            <el-col :span="7">
              <img src="@/views\homepage\picture\2de.png"/></el-col
            ><el-col :span="12"
              ><i
                >集邦咨讯笔电q2出货量增加3.6%，全年出货衰退幅度可望缩小至2%.</i
              >
              <p>2019-4-22</p></el-col
            >
          </div></el-col
        >
        <el-col :span="8"
          ><div class="imgbox">
            <el-col :span="7">
              <img src="@/views\homepage\picture\2ds.png"/></el-col
            ><el-col :span="12"
              ><i>关于组织各市场主体参与山东电力现货市场模拟试运.33%</i>
              <p>2019-4-12</p></el-col
            >
          </div></el-col
        >
        <el-col :span="8"
          ><div class="imgbox">
            <el-col :span="7">
              <img src="@/views\homepage\picture\ds.png"/></el-col
            ><el-col :span="12"
              ><i>发改委：“一般工商业平均电价再降10%”.</i>
              <p>2019-2-12</p></el-col
            >
          </div></el-col
        >
      </el-tab-pane>
      <el-tab-pane label="政策法规">政策法规</el-tab-pane>
      <el-tab-pane label="市场动态">市场动态</el-tab-pane>
      <el-tab-pane label="行业新闻">行业新闻</el-tab-pane>
    </el-tabs>
    
    <market />
  </section>
</template>

<script>
import market from "@/views/homepage/market.vue";
export default {
  name: "homepage",
  components: { market },
  date() {}
};
</script>

<style scoped>
.el-icon-eleme{
  padding: 8px;

}
.box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 60px;
  font-size: 36px;
  
  padding-top:140px;
}
.column {
  font-size: 20px;
}
.imgbox {
  padding: 14px 0 0 18px;
}
.boxl{
  padding: 0 35px;
}
.p {
  margin: 0;
}
.el-icon-edit {
  margin: 50px 30px 20px 10px;
}
.zl{
  background-color:#e4eaf6;
  margin-block-end: 60px;
}
.zl2{background-color: white;
display: flex;
justify-content:flex-end;

}
</style>
