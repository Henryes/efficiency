<template>
  <section>
    <div class="block">
      <i class="el-icon-s-cooperation"></i>无线工具包<i
        class="el-icon-s-cooperation"
      ></i>
    </div>
    <div class="gjb">
      <el-row>
        <el-col :span="6"
          ><div>
            <div class="g">
              无线电视公众号
            </div>
            <div class="g1">官方公众号</div>
            <div class="gzh">
              <img src="@/assets/ewm.png" />
            </div>
          </div>
        </el-col>
        <el-col :span="6"
          ><div>
            <div class="g">
              无线电视公众号
            </div>
            <div class="g1">官方公众号</div>
            <div class="gzh">
              <img src="@/assets/logo.png" />
            </div></div
        ></el-col>
        <el-col :span="6"
          ><div>
            <div class="g">
              无线电视公众号
            </div>
            <div class="g1">官方公众号</div>
            <div class="gzh"><img src="@/assets/xcx.png" /></div></div
        ></el-col>
        <el-col :span="6"
          ><div>
            <div class="g">
              无线电视公众号
            </div>
            <div class="g1">官方公众号</div>
            <div class="gzh">
              <img src="@/assets/ewm.png" />
            </div></div
        ></el-col>
      </el-row>
    </div>
    <div class="foot">
      <div class="foot1">
        现在,就让业务连接起来,驱动产能更高效
        <div class="foot2"><el-button plain>联系我们</el-button></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.el-icon-s-cooperation {
  padding: 8px;
}
.gjb {
  padding-left: 0px;
}
.img {
  width: 20px;
}
.gzh {
  display: flex;
  justify-content: center;
   padding-block-end: 120px;
}
.g {
  display: flex;
  justify-content: center;
}
.g1{
  display: flex;
  justify-content: center;
  padding-block-end: 25px;
}
.block {
  display: flex;
  font-size: 30px;
  justify-content: center;
  padding: 70px 0px 80px 0px;
}
.foot {
  padding: 18px 0px 0px 0px;
  margin: 0px 0px;
  height: 150px;
  color: #fff;
  display: flex;
  font-size: 30px;
  justify-content: center;
  background: url(bg.png) center 0;
}
.foot1 {
  padding: 20px 0px 0px 0px;
}
.foot2 {
  padding: 20px 0px 0px 0px;
  display: flex;
  color: #fff;
  justify-content: center;
}
.i {
  padding: 20px;
}
</style>
