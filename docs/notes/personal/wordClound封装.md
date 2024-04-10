# wordClound封装
```javascript
<template>
  <div>
    <div ref="word" class="wordcloud-wrapper"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-wordcloud";
export default {
  name: "WordCloudTest",
  props: ["sendList"],
  watch: {
    sendList: {
      handler(val) {
        console.log(val)
        this.list = val.map((i) => {
          return {
            value: i.person.length,
            name: i.value,
            person: i.person,
          };
        });
        this.$nextTick(() => {
          this.getInit();
        });
      },
      immediate: true,
      deep: true,
    },
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    window.toggleA = this.toggleAvatar;
  },
  mounted() {},
  methods: {
    changeGridSize(){
      if(this.list.length<30){
        return 18
      }
      if(this.list.length<20){
        return 20
      }
      if(this.list.length<16){
        return 24
      }
      return 28

    },
    // 点击词显示头像
    toggleAvatar(e, item) {
      e.parentNode.parentNode.style.display = "none";
    },
    getInit() {
      let myChart = echarts.init(this.$refs.word);
      myChart.setOption({
        backgroundColor: "#eee", // canvas背景颜色
        tooltip: {
          //触发类型
          trigger: "item", //item默认为图形触发 还有axis坐标轴触发
          triggerOn: "click",
          enterable: true, //可以让鼠标进入tooltip
          //坐标轴指示器
          azisPointer: {
            type: "cross", //初始化默认是实线line，另外还可以添加shadow阴影效果、croos十字准星
          },
          //是否显示弹框（默认为true）showContent:true

          //设置悬浮层的样式
          // backgroundColor: "pink", //设置背景颜色
          borderColor: "#fff", //边框颜色
          // borderWidth: 5, //弹框边框粗细
          extraCssText: "z-index:100",
          //设置文字样式
          textStyle: {
            color: "#000",
          },
          //自定义提示框信息
          formatter(par) {
            let arr = par.data.person;
            let res = "";
            for (let index = 0; index < arr.length; index++) {
              const element = arr[index];
              let str = JSON.stringify(element);
              res += `
              <div style="margin-top: 5px;margin-right: 5px;max-width:100px;width:100%;" onclick='toggleA(this,${str})'>
                <img style='width:33px;height:33px; border-radius:50%;object-fit: cover;' src='${element.avatar}'/>
                <span style=" text-align: center;font-size: 12px;">${element.firstName}</span>
              </div>
            `;  
            }
            return `<div style="display: flex;flex-wrap: wrap;max-width: 240px;">${res}</div>`;
          },
        },
        title: {
          text: "",
          top: "0%",
          left: "-1%",
          textStyle: {
            fontSize: 14,
            color: "#3B3E41",
            fontWeight: "normal",
          },
        },
        series: [
          {
            type: "wordCloud",
            shape: "circle",
            left: "center", // X轴偏移量
            top: "center", // Y轴偏移量
            width: "100%", // canvas宽度大小
            height: "100%", // canvas高度大小
            sizeRange: [20, 42], //  词典字体大小范围配置
            rotationRange: [0, 0], // 词典字体旋转角度配置，默认不旋转
            gridSize: this.changeGridSize(), // 词典字体间距配置
            layoutAnimation: true, // 为false词典过度会阻塞
            textStyle: {
              fontWeight: 'bold',
              color: function () {
                return 'rgb(' + [
                  Math.round(Math.random() * 200) + 50,
                  Math.round(Math.random() * 50),
                  Math.round(Math.random() * 50) + 50
                ].join(',') + ')';
              }
              // 词典样式配置
            },
            // 渲染词典数据
            data: this.list,
          },
        ],
      });
      // myChart.on("click", function (params) {
      //   console.log(params, "!!!!!!!");
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.wordcloud-wrapper {
  height: 38vh;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```