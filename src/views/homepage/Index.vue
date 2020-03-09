<template>
  <section>
    <!-- <el-steps :active="1" align-center>
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
    </el-steps> -->
    <div class="dcheck">
      <span class="check">交易动态</span>
      <div class="check2">
        <i class="el-icon-date"></i>现货市场负荷&价格预测
      </div>
      <el-row>
        <el-col :span="14">
          <div class="canvas">
            <div>中长期价格趋势预测</div>
            <!-- <el-col :span="8">价格：元/mwh</el-col>
          <el-col :span="8"
            ><div style="width:5px height:5px background-color:red"></div>
            最大值</el-col
          ><el-col :span="8">最小值</el-col> -->
            <div
              ref="canvas"
              :style="{ width: '600px', height: '300px' }"
            ></div></div
        ></el-col>
        <el-col :span="10"><el-calendar style="height:300px"   v-model="value"> </el-calendar></el-col>
      </el-row>
      <el-row
        ><el-col :span="16">
          <div class="canvas">
            <div
              ref="Pricechart"
              :style="{ width: '600px', height: '300px' }"
            ></div></div></el-col
      ></el-row>
    </div>

    <!-- <el-row>
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
    </el-row> -->
    <div class="check3">交易信息</div>
    <div class="dbox">
      <div class="block">
        <div class="demonstration"
          ><i class="el-icon-s-data"></i>发电企业竞价成交电量</div
        >
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 3" :key="item">
            <h3 class="medium">{{ item }}</h3>
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
            长协市场电量累计top10
            <span class="leftbox">（2019年1-11月数据，单位：万千瓦时）</span>
          </div></el-col
        >
        <div style="float:left">
          <el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>608075.6595</div>
            </div>
          </el-col>
          <el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>608075.6595</div>
            </div></el-col
          >
          <el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>608075.6595</div>
            </div></el-col
          ><el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>608075.6595</div>
            </div></el-col
          ><el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>608075.6595</div>
            </div></el-col
          ><el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>608075.6595</div>
            </div></el-col
          ><el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>608075.6595</div>
            </div></el-col
          ><el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>608075.6595</div>
            </div></el-col
          ><el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>608075.6595</div>
            </div></el-col
          ><el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>608075.6595</div>
            </div></el-col
          ><el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>608075.6595</div>
            </div></el-col
          ><el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>608075.6595</div>
            </div></el-col
          ><el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>608075.6595</div>
            </div></el-col
          ><el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>608075.6595</div>
            </div></el-col
          ><el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>608075.6595</div>
            </div></el-col
          ><el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>608075.6595</div>
            </div></el-col
          ><el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>608075.6595</div>
            </div></el-col
          ><el-col :span="6" class="sbox">
            <div>
              广东焕发电力发展有限公司
              <div>13532416595</div>
            </div></el-col
          ><el-col :span="6" class="sbox">
            <div>
              上海东平有限公司
              <div>608075.6595</div>
            </div></el-col
          ><el-col :span="6" class="sbox">
            <div>北京启力电力发展有限公司</div>

            <div>324133</div>
          </el-col>
        </div>
      </el-row>
      <div><watch /></div>
    </div>
    <tool />
  </section>
</template>

<script>
import watch from "@/views/homepage/watch.vue";
import tool from "@/views/homepage/tool.vue";
import echarts from "echarts";

export default {
  name: "homepage",
  components: { watch, tool },
  data() {
    return {
      value: new Date()
    };
  },

  // mounted() {
  // alert("mouted");
  //   this.initChart();
  // },

  // created() {
  //   // alert("created");
  // },
  // beforeCreate() {
  //   // alert("beforeCreate");
  // },
  mounted() {
    this.initChart();
    this.rampChart();
  },

  methods: {
    // eslint-disable-next-line vue/no-dupe-keys
    initChart() {
      let canvas = echarts.init(this.$refs.canvas);
      const options = {
        title: {
          subtext: " 价格：元/mwh"
        },

        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["最大值", "最小值", "视频广告", "直接访问", "搜索引擎"]
        },
        xAxis: {
          type: "category",
          data: [
            "1:00",
            "3:00",
            "5:00",
            "7:00",
            "9:00",
            "11:00",
            "13:00",
            "15:00",
            "17:00"
          ]
        },
        yAxis: {},
        series: [
          {
            name: "最大值",
            type: "line",
            smooth: true,
            color: ["#09b1e5"],
            data: [
              380,
              440,
              280,
              410,
              380,
              358,
              346,
              424,
              453,
              485,
              427,
              478,
              388,
              392,
              358,
              346,
              424,
              453,
              485,
              388,
              392,
              358,
              346,
              424
            ]
          },
          {
            name: "最小值",
            type: "line",
            smooth: true,
            stack: "总量",
            color: ["#2ce4b2"],
            data: [
              220,
              182,
              191,
              234,
              290,
              330,
              310,
              213,
              388,
              299,
              132,
              366,
              224,
              353,
              355,
              288,
              392,
              358,
              346,
              224,
              213,
              312,
              311,
              344
            ]
          }
        ]
      };
      canvas.setOption(options);
    },
    rampChart() {
      let Pricechart = echarts.init(this.$refs.Pricechart);
      const options = {
        title: {
          text: "全省统调负荷预测",
          subtext: " 价格：元/mwh"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["区域负荷预测", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        xAxis: {
          type: "category",

          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value",
          data: ["0", "100", "200", "300", "400"]
        },
        series: [
          {
            name: "区域负荷预测",
            color: ["#2ce4b2"],
            data: [
              133,
              231,
              128,
              212,
              234,
              122,
              299,
              133,
              231,
              128,
              212,
              234,
              122,
              299
            ],
            type: "line",
            smooth: true
          }
        ]
      };
      Pricechart.setOption(options);
    }
  }
};
</script>

<style scoped>
.dcheck {
  margin: 0 150px;
  
}
.check {
  display: flex;
  justify-content: center;
  font-size: 40px;
  padding: 55px 0;
}
.check2 {
  font-size: 18px;
}
.check3{
  display: flex;
  justify-content: center;
  font-size: 40px;
  padding-top: 60px ;

}
.demonstration{
  font-size: 20px;
  padding: 10px;
}
.dbox {
  padding: 50px 150px;
}
.Lbox {
  background-color: #cee4f4;
  height: 30px;
  margin: 10px 10px;
  padding: 20px 0;
}
.Rbox {
  background-color: #cee4f4;
  height: 30px;
  margin: 10px 10px;
  padding: 20px 0;
}
.leftbox {
  float: right;
}
.sbox {
  margin-top: 10px;

  padding: 15px;
  width: 25%;
  border-style: solid;
  border-width: 1px;
  border-color: #e4eaf6;
  color: #707279;
}
.canvas {
  height: 300px;
  width: 600px;
  border: 1px solid #cee4f4;
  padding: 15px;
  margin: 10px 0px;
  background-color: #e4eaf6;
}
.el-carousel__item h3 {
  background-image: url(ph.png);
  /* color: #475669; */
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0 50px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #ebeef3;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.ei-button {
  width: 100%;
  float: left;
} 


</style>
