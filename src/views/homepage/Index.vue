<template>
  <section>
    <el-steps :active="1" align-center>
      <el-step
        title="现货仿真"
        boolean="align-center"
        icon="el-icon-upload"
        description="高精度全流程模拟电力现货交易"
      >
      </el-step>
      <el-step title=" 发电交易" description="交易管理及辅助决策支持"></el-step>
      <el-step
        title="售电交易"
        description="智慧购售电一体化解决方案"
      ></el-step>
      <el-step
        title="中央空调冷机管控"
        description="集成多维度数据，优化运行控制"
      ></el-step>
    </el-steps>
    <el-row>
      <el-col
        :span="6"
        id="main"
        date="initChart"
        class="canvas"
        style="width: 200px;height:200px;"
      ></el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <div class="block">
      <span class="demonstration">发电企业竞价成交电量</span>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-row>
      <el-col :span="12"
        ><div class="Lbox">
          竞价市场电量累计top10
          <span class="leftbox">（2019年1-11月数据，单位：万千瓦时）</span>
        </div></el-col
      >
      <el-col :span="12"
        ><div class="Rbox">
          竞价市场电量累计top10
          <span class="leftbox">（2019年1-11月数据，单位：万千瓦时）</span>
        </div></el-col
      >
      <div style="float:left">
        <el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          >
        </el-col>
        <el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        >
        <el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        ><el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        ><el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        ><el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        ><el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        ><el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        ><el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        ><el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        ><el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        ><el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        ><el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        ><el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        ><el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        ><el-col :span="6" class="sbox">
       
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        ><el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        ><el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        ><el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div>608075.6595</div></el-button
          ></el-col
        ><el-col :span="6" class="sbox">
          <el-button plain
            >广东焕发电力发展有限公司
            <div style="float:left">608075.6595</div></el-button
          ></el-col
        >
      </div>
    </el-row>
    <div><watch /></div>
    <tool />
  </section>
</template>

<script type="text/javascript">
import watch from '@/views/homepage/watch.vue'
import tool from '@/views/homepage/tool.vue'
import echarts from "echarts";

export default {
  name: "homepage",
  components: {watch,tool,},
  initChart() {
    var myChart = echarts.init(document.getElementById("main"));
    var option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line"
        }
      ]
    };
    myChart.setOption(option);
  }
};
</script>

<style scoped>

.Lbox {
  background-color: rgb(55, 96, 211);
  height: 30px;
  margin: 10px 10px;
  padding: 20px 0;
}
.Rbox {
  background-color: aqua;
  height: 30px;
  margin: 10px 10px;
  padding: 20px 0;
}
.leftbox {
  float: right;
}
.sbox {
 
  margin-top: 10px;
  padding: 2px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.ei-button {
  width: 100%;
  float: left;
}
</style>
