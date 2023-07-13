# html2canvas 使用

```javascript
<template>
 <view class="wrapper">
  <view class="box-border">
   <view class="line">
    <view class="in-line" />
    <view class="canvas-box">
     <view id="mycanvas" ref="mycanvas" v-show="show">
      <image src="../../static/icon/nomore.png" mode=""></image>
      <text>李楠</text>
      <text>导游证号：D000000</text>
      <view class="tit">
       五台山二日游精品游
      </view>
      <view class="time">2022.2.18-2022.2.19</view>
      <view class="rules">
       评价规则<u-icon name="info-circle-fill" color="#19CED3" size="16"></u-icon>
      </view>
      <view class="code">
       <image src="../../static/icon/mulu.png" mode=""></image>
      </view>
      <view class="code-text">
       微信扫码或长按识别二维码对导游进行评价
      </view>
     </view>
     <image class="img" :src="htmlUrl" v-if="!show">
      <view class="btn">
       <text class="btn-text" @click="save">生成图片</text>
      </view>
    </view>
   </view>
  </view>
 </view>
</template>

<script>
 import html2canvas from "html2canvas"
 export default {
  components: {
   html2canvas
  },
  data() {
   return {
    htmlUrl: '',
    show: true
   }
  },

  mounted() {

  },
  methods: {
   save() {
    uni.showLoading({
     title: '图片生成中',
    })
    this.toImage()
   },
   // 页面元素转图片
   toImage() {
    window.pageYoffset = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // 先获取你要转换为img的dom节点
    var node = document.getElementById("mycanvas"); //传入的id名称
    var width = node.offsetWidth; //dom宽
    var height = node.offsetHeight; //dom高
    var scale = 4; //放大倍数 这个相当于清晰度 调大一点更清晰一点
    html2canvas(node, {
     width: width,
     heigth: height,
     backgroundColor: "#ffffff", //背景颜色 为null是透明
     dpi: window.devicePixelRatio * 2, //按屏幕像素比增加像素
     scale: scale,
     X: 0,
     Y: 0,
     scrollX: 0, //如果左边多个白边 设置该偏移-3 或者更多
     scrollY: 0,
     useCORS: true, //是否使用CORS从服务器加载图像 !!!
     allowTaint: true, //是否允许跨域图像污染画布  !!!
    }).then((canvas) => {
     this.htmlUrl = canvas.toDataURL(); //这里上面不设值cors会报错
     setTimeout(() => {
      this.show = false
      uni.hideLoading()
      uni.showToast({
       title: '请长按图片进行保存',
       icon: 'none',
       duration: 2000
      })
     }, 500)
    });
   }
  }
 }
</script>

<style lang="scss" scoped>
 page {
  box-sizing: border-box;
  background: linear-gradient(204deg, #67D2D5 0%, #10D491 100%);

  .wrapper {
   width: 100%;
   height: 75vh;
   display: flex;
   justify-content: center;
   align-items: flex-end;

   .box-border {
    height: 968rpx;

    .line {
     width: 662rpx;
     height: 24rpx;
     background: #26ADA7;
     border-radius: 12rpx;
     display: flex;
     justify-content: center;
     align-items: center;
     position: relative;

     .in-line {
      width: 632rpx;
      height: 12rpx;
      background: #149690;
      border-radius: 6rpx;
     }

     .canvas-box {
      position: absolute;
      top: 15rpx;
      left: 22rpx;
      width: 620.9rpx;
      height: 1044rpx;
      background: #fff;
      border-radius: 0px 0px 24rpx 24rpx;

      .img {
       width: 100%;
       height: 900rpx;
      }

      >view {
       width: 620.9rpx;
       height: 904rpx;
       background: #fff;
       border-radius: 0px 0px 24rpx 24rpx;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;

       >image {
        width: 132rpx;
        height: 132rpx;
        border-radius: 50%;
        margin: 80rpx 0 26rpx 0;
       }

       >text {
        &:first-child {
         font-size: 30rpx;
         font-weight: 500;
         color: #000000;
         margin-bottom: 10rpx;
        }

        &:last-child {
         font-size: 30rpx;
         font-weight: 400;
         color: #000000;
        }
       }

       .tit {
        margin-top: 20rpx;
        font-size: 40rpx;
        font-weight: bold;
        color: #000000;
       }

       .time {
        margin-top: 5rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: #999999;
       }

       .rules {
        display: flex;
        align-items: center;
        margin: 10rpx 0;
        font-size: 30rpx;
        font-weight: 400;
        color: #13D8C2;
        margin-bottom: 20rpx;

        /deep/.u-icon {
         padding-left: 10rpx;
        }
       }

       .code {
        width: 293rpx;
        height: 293rpx;
        margin-bottom: 10rpx;

        >image {
         width: 100%;
         height: 100%
        }
       }

       .code-text {
        width: 293rpx;
        font-size: 24rpx;
        // font-weight: 400;
        color: #999;
        text-align: center;
       }
      }

      .btn {
       position: absolute;
       bottom: 46rpx;
       left: 86rpx;
       width: 454rpx;
       height: 82rpx;
       background: linear-gradient(90deg, #19CED3 0%, #00EA9A 100%);
       border-radius: 41rpx;

       .btn-text {
        display: block;
        text-align: center;
        width: 454rpx;
        height: 100rpx;
        line-height: 110rpx;
        font-size: 32rpx;
        font-weight: 400;
        color: #FFFFFF;
       }
      }
     }
    }
   }
  }
 }
</style>

```
