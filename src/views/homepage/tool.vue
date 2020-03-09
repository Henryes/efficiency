<template>
  <section>
    <div class="block">
      <i class="el-icon-s-cooperation"></i>无线工具包<i
        class="el-icon-s-cooperation"
      ></i>
    </div>
<div class="gjb">
    <el-row >
      <el-col :span="6"
        ><div >
          <div>
            无线电视公众号
          </div>
          <div>官方公众号</div>
          <div class="gzh">
            <img src="@/assets/ewm.png" />
          </div>
        </div>
      </el-col>
      <el-col :span="6"
        ><div >
          <div>
            无线电视公众号
          </div>
          <div>官方公众号</div>
          <img src="@/assets/logo.png"
        
        /></div></el-col
      >
      <el-col :span="6"
        ><div ><div>
          无线电视公众号
        </div>
        <div>官方公众号</div>
        <img src="@/assets/xcx.png"
      /></div></el-col>
      <el-col :span="6"
        ><div><div>
          无线电视公众号
        </div>
        <div>官方公众号</div>
        <img src="@/assets/ewm.png"
      /></div></el-col>
    </el-row></div>
    <div class="foot">
      <i
        >现在,就让业务连接起来,驱动产能更高效
        <div class="foot2"><el-button plain>联系我们</el-button></div></i
      >
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.gjb
{
  padding-left: 100px;
}
.img {
  width: 20px;
}
.gzh {
  width: 20px;
  height: 20px;
}
.block {
  display: flex;
  font-size: 30px;
  justify-content: center;
  padding-block-end: 100px;
}
.foot {
  padding: 10px;
  height: 150px;
  display: flex;
  font-size: 30px;
  justify-content: center;
  background: url(bg.png) center 0;
}
.foot2 {
  padding: 20px;
  display: flex;
  justify-content: center;
}
</style>
