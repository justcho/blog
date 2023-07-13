# 平时积累

## uniapp 文本溢出省略号

```css

{ 
white-space: nowrap; 文本强制不换行； 
text-overflow:ellipsis; 文本溢出显示省略号； 
overflow:hidden; 溢出的部分隐藏； 
}
```

## vue eslintrc去掉定义变量未使用报错方法

```css
// eslintrc文件
module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        "no-irregular-whitespace": "off", //这禁止掉 空格报错检查
        "no-unused-vars": 'off' //去掉定义变量未使用报错方法
    }
}
```

## 富文本内图片自适应：[链接](https://sayyy.blog.csdn.net/article/details/111400282)

```javascript
 // 公共方法
  formatRichText(html) {
              if(!html) return
     //控制小程序中图片大小
     let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
      match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
      match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
      match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
      return match;
     });
     newContent = newContent.replace(/style="[^"]+"/gi, function(match, capture) {
      match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
      return match;
     });
     newContent = newContent.replace(/<br[^>]*\/>/gi, '');
     newContent = newContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
     return newContent;
    }
};

// 使用方法
<rich-text :nodes="detail.content | formatRichText"></rich-text>

// 富文本显示空格
  newContent = newContent.replace(/(\s*<[^>]+>)([^<>]*)(<\/[^>]+>\s*)/g, function (str, $1, $2, $3) {
    return [$1.trim(), $2.replace(/\s/gi, '\xa0'), $3.trim()].join('')
  })
// 下面是合并的代码
export function formatRichText(html) {
  let newContent = html.replace(/<img[^>]*>/gi, function (match, capture) {
    match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
    match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
    match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
    return match;
  });
  newContent = newContent.replace(/style="[^"]+"/gi, function (match, capture) {
    match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
    return match;
  });
  newContent = newContent.replace(/(\s*<[^>]+>)([^<>]*)(<\/[^>]+>\s*)/g, function (str, $1, $2, $3) {
    return [$1.trim(), $2.replace(/\s/gi, '\xa0'), $3.trim()].join('')
  })
  newContent = newContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto;display:block;margin-top:0;margin-bottom:0;"');
  return newContent;
}

```

## js 实现滚动条自动滚动：[组件引用](https://www.jianshu.com/p/a2a7d3a9cf2b)

```css
// 有点问题
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>autoScroll</title>
</head>
<style>
    .parent {
        width: 300px;
        height: 200px;
        margin: 0 auto;
        background: #242424;
        overflow-y: scroll;
    }
    /*设置的子盒子高度大于父盒子，产生溢出效果*/
    .child {
        height: auto;
    }
    .child li {
        height: 50px;
        margin: 2px 0;
        background: #009678;
    }
</style>
<body>
    <div id="parent" class="parent">
        <div id="child1" class="child">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </div>
        <div id="child2" class="child"></div>
    </div>
    <script type="text/javascript">
        (function () {
            var parent = document.getElementById('parent');
            var child1 = document.getElementById('child1');
            var child2 = document.getElementById('child2');
            child2.innerHTML = child1.innerHTML;
            setInterval(function () {
               if(parent.scrollTop >= child1.scrollHeight) {
                   parent.scrollTop = 0;
               } else {
                   parent.scrollTop++;
               }
            }, 20);
        })()
    </script>
</body>
</html>
```

## [动态数据切换](https://blog.csdn.net/fanxinzhi_FXZ/article/details/78411203)

## vue动态绑定img并设置默认图片

```javascript
<img :src="imgUrl ? imgUrl : require('../../static/images/default.png')" />
```

## 微信小程序获取手机号

```javascript
// 小程序写法 bindgetphonenumber
// uniapo 写法 @getphonenumber
<button  open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">登录</button> 

// 获取手机号
getPhoneNumber(e) {

    var that = this;

    console.log("微信授权手机号", e.detail)

    wx.login({

      success: res => {

        console.log("login code", res.code);



        //是否授权，授权通过进入下单页面，授权拒绝则手机号登录

        if (e.detail.errMsg == 'getPhoneNumber:ok') {

          wx.request({

            url: app.globalData.url + 'api/Account/WxLogin/',

            data: {

              encryptedData: e.detail.encryptedData, //encodeURIComponent(e.detail.encryptedData),

              iv: e.detail.iv,

              code: res.code

            },

            method: 'GET',

            header: {

              'content-type': 'application/json'

            },

            success: function(res) {

              console.log("success", res)

              if (res.data.Code == 200) {

                wx.showToast({

                  title: '授权成功',

                })

                wx.navigateTo({

                  url: '../order_company/order_company',

                })



              } else {

                wx.showToast({

                  title: res.data.Message,

                  icon: 'none'

                })

              }

            },



            fail: function(res) {

              console.log("fail", res);

              wx.showToast({

                title: res.errMsg,

                icon: 'none'

              })

            }

          })



        } else if (e.detail.errMsg === 'getPhoneNumber:fail user deny') { //拒绝授权

          wx.showToast({

            title: '您拒绝了授权',

            icon: 'none',

            duration: 2000

          })

          wx.navigateTo({

            url: '../telLogin/telLogin',

          })

        } else if (e.detail.errMsg === 'getPhoneNumber:fail 用户未绑定手机，请先在微信客户端进行绑定后重试') {

          wx.showToast({

            title: '您的微信未绑定手机号',

            icon: 'none',

            duration: 3000

          })

          wx.navigateTo({

            url: '../telLogin/telLogin',

          })

        } else {

          wx.showToast({

            title: '网络繁忙，请稍候再试',

            icon: 'none',

          })

        }

      },



      fail: function(res) {

        wx.showToast({

          title: '获取登录态失败,请检查网络',

          icon: 'none',

          duration: 2000

        })

      }

    });



  }
```

## uniapp 检测新版本更新

```javascript
onLaunch(){
 if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
       // 请求完新版本信息的回调
       if (res.hasUpdate) {
        updateManager.onUpdateReady(function () {
         wx.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function (res) {
           // res: {errMsg: "showModal: ok", cancel: false, confirm: true}
           if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
           }
          }
         })
        })
        updateManager.onUpdateFailed(function () {
         // 新的版本下载失败
         wx.showModal({
          title: '已经有新版本了哟~',
          content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
         })
        })
       }
      })
     }
}
```

## 获取组件的高度

```javascript
//页面代码：

<view class="header">

</view>

<view class="chat-list">

</view>

<view class="send-box">

</view>

// 写在onReady里面

onReady() {

const that = this;

uni.createSelectorQuery().select(".header").boundingClientRect((header) => {

         uni.createSelectorQuery().select(".chat-list").boundingClientRect((chatList) => {

                uni.createSelectorQuery().select(".send-box").boundingClientRect((sendBox) => {

                       console.log(header.height);

                       const windowHeight = uni.getSystemInfoSync()['windowHeight'];

                       const height = (windowHeight /* - header.height */ - chatList.bottom - sendBox.height);

                       that.chatViewHeight = height + 'px';

                }).exec();

       }).exec();

}).exec();
}
```

## 父组件调用子组件方法

```javascript
// 父组件

<template>
 <view>
  <child  ref="child"></child>
 </view>
</template>
<script>
 import child from '@/pages/child.vue';
export default{
  components: {
    child
  },
}
// 页面触底事件
onReachBottom() {
    this.$refs.child.todo()
   
},
</script>

// 子组件
<template>
 <view>
  我是子组件
 </view>
</template>
<script>
 import child from '@/pages/child.vue';
export default{
 data(){
   return{
    }
  },
  methods:{
   todo(){
     console.log('子组件方法执行了')
    }
  }
}

</script>
```

## u-loading使用

```javascript
// 配合 页面触底事件onReachBottom() 使用
<template>
 <view class="playXs">
  <!-- 顶部胶囊 -->
  <u-navbar title="历史典故" background="none"></u-navbar>
  <!-- 底部的背景图片 -->
  <image class="bgImg" :src="config.ossBaseUrl + '/static/views/image/lishidiangubgc.png'" mode="widthFix">
  </image>
  <!-- 体部 -->
  <image class="topIcon" :src="config.ossBaseUrl + '/static/views/image/lishidiangu.png'" mode="widthFix"></image>
  <view class="delicacy-body">
   <view class="delicacy-body-bottom">
    <view class="delicacy-body-list" v-for="(item,index) in list" @click="goDitile(item.id)">
     <view class="delicacy-body-list-img">
      <image :src="config.ossBaseUrl+ item.storyPicture" mode="aspectFill">
      </image>
      <view class="introduce">
       <view>
        <text>{{item.storyName}}</text>
       </view>
      </view>
     </view>
    </view>
   </view>
   <u-loadmore margin-top="20" :status="status" :load-text="loadText" />
  </view>
 </view>
</template>

<script>
 import config from '../../config/config.js'
 export default {
  data() {
   return {
    returns: true,
    config,
    backInfo: {},
    pageNum: 1, //分页当前第几页
    count: -1, // 总数
    sortruleL: 'distance', //综合排序为weight
    status: 'loadmore', // 加载状态
    loadText: {
     loadmore: '加载更多',
     loading: '努力加载中',
     nomore: '我是有底线的'
    },
    list: []
   }
  },
  mounted() {
   this.backInfo = uni.getMenuButtonBoundingClientRect()
  },
  onReachBottom() {
   if (this.status === 'nomore') {
    return
   } else if (this.list.length < this.count) {
    this.pageNum = this.pageNum + 1;
    this.status = 'loading';
    this.getSroryList()
   } else {
    this.status = 'nomore';
   }
  },
  methods: {
   goBack() {
    uni.navigateBack();
   },
   async getSroryList(){
    let res = await this.$api.getHistoryStoryList({
       pageNum: this.pageNum,
       pageSize: 3
    })
    this.count = res.total
    let rows = res.rows
    this.list = [...this.list,...rows]
     this.status = 'loadmore'
     if (this.list.length <= 2) {
      this.status = 'nomore';
     }
   },

  }
 }
</script>

```

## 登录页面

```javascript
<template>
 <view>
  <image :src="getImgView('xxxx') "
   // 注意这种写法
    :style="'height:'+swiperHeight +'px;width:'+windowWidth+'px;'" class="bg-img"></image>
  <view class="padding flex justify-center btn-box">
   <button class="cu-btn bg-red margin-tb-sm lg round PhoneNumber" open-type="getPhoneNumber"
    @getphonenumber="decryptPhoneNumber">一键登录</button>
  </view>
  <!-- 获取授权窗口 -->
  <view class="cu-modal" :class="modalName?'show':''">
   <view class="cu-dialog">
    <view class="cu-bar bg-white justify-end">
     <view class="content">提示</view>
    </view>
    <view class="padding-xl">
     是否获取微信权限，完善个人相关信息
    </view>
    <view class="cu-bar bg-white justify-end">
     <view class="action">
      <button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
      <button class="cu-btn bg-green margin-left" @tap="getUserInfo">去获取</button>
     </view>
    </view>
   </view>
  </view>
 </view>
</template>

<script>
 import {
    // 获取手机号
  getPhone,
    // 获取用户基本信息
  getUserinfo,
    // 登录
  login
 } from '@/api/api.js'
 export default {
  data() {
   return {
    modalName: false,
   }
  },
  methods: {
   // 获取用户授权信息成功
   getUserInfo() {
    this.modalName = false;
    uni.getUserProfile({
     desc: "用于完善用户个人信息",
     lang: 'zh_CN',
     success: function(infoRes) {
      getUserinfo(infoRes.userInfo)
      uni.navigateTo({
       url: '/pages/index/index'
      });
     },
    })
   },
   // 获取用户授权信息失败
   hideModal() {
    uni.login({
     provider: 'weixin',
     success: function(loginRes) {
      uni.getUserInfo({
       provider: 'weixin',
       success: function(infoRes) {
        getUserinfo(infoRes.userInfo);
        uni.navigateTo({
         url: '/pages/index/index'
        });
       }
      });
     }
    });
   },
   // 一键登录
   async decryptPhoneNumber(e) {
    let that = this
    let openid = uni.getStorageSync('OPION_ID')
    uni.setStorageSync('detail', e.detail)
    if (e.detail.errMsg == 'getPhoneNumber:ok') {
     getPhone({
      ...e.detail,
      openid
     }).then(res => {
      if (res.result.praVolunteer) {
       if (res.result.praVolunteer.closeStatus == 0) {
        uni.setStorageSync('USER_TOKEN', res.result.token);
        uni.setStorageSync('userInfo', res.result.userInfo);
        if (Object.keys(res.result).indexOf('praVolunteer')) {
         uni.setStorageSync('praVolunteer', res.result.praVolunteer);
        }
        if (!res.result.userInfo.nickName || res.result.userInfo.nickName == '微信用户') {
         that.modalName = true
        } else {
         uni.reLaunch({
          url: `/pages/index/index`
         });
        }
       } else {
        uni.showToast({
         title: '您的账号已被冻结',
         icon: 'none',
         duration: 2000
        });
       }
      } else {
       uni.setStorageSync('USER_TOKEN', res.result.token);
       uni.setStorageSync('userInfo', res.result.userInfo);
       if (!res.result.userInfo.nickName || res.result.userInfo.nickName == '微信用户') {
        that.modalName = true
       } else {
        uni.reLaunch({
         url: '/pages/index/index'
        });
       }
      }
     })
    } else if (e.detail.errMsg === 'getPhoneNumber:fail user deny') {
     uni.showToast({
      title: '您拒绝了授权',
      icon: 'none',
      duration: 2000
     }) 
    } else if(e.detail.errMsg === 'getPhoneNumber:fail 用户未绑定手机，请先在微信客户端进行绑定后重试'){
     uni.showToast({
      title: '您的微信未绑定手机号',
      icon: 'none',
      duration: 2000
     }) 
    }else{
     uni.showToast({
      title: '网络繁忙，请稍后重试',
      icon: 'none',
      duration: 2000
     }) 
    }
   },
  }
 }
</script>

<style lang="less" scoped>
 .bg-img {
  position: absolute;
  z-index: -1;
 }

 .btn-box {
  width: 100%;
  position: absolute;
  bottom: 100upx;
 }

 .PhoneNumber {
  width: 400upx;
 }
</style>

```

## [js图片压缩](https://segmentfault.com/a/1190000023486410)

## vue 属性undefined(但已成功渲染)

1.因为是异步请求，页面渲染刚的时候还没有拿到这个值，所以会报错。你需要在节点上用if判断一下，在有数据的时候再进行渲染

```javascript
<template>
    ...
    <span v-if="data.params && data.params.instrumentId">{{data.params.instrumentId}}</span>
    ...
</template>
```

2.获取数据时修改一下

```javascript
 created () {
    this.getData();
  }
把上面改成如下：
 created () {
    this.$nextTick(function(){
        this.getData();
    });
  }
```

## H5 自定义分享链接

微信JS-SDK是微信公众平台面向网页开发者提供的基于微信内的网页开发工具包。可参考微信JS-SDK说明文档。

接入步骤如下：

1、准备一个备案的域名和空间，绑定域名到该空间去

2、登录微信公众平台，进入“公众号设置”的功能设置里面填写js接口安全域名，这个是要填写的是你微信浏览器要打开的域名地址，不能添加IP地址。

3、引入js文件，在需要调用js接口的页面接入JS文件。

```javascript
http://res.wx.qq.com/open/js/jweixin-1.2.0.js
```

4、通过config接口注入权限并验证配置（这一步算是整个步骤中最关键的一步，必须正确的配置信息才可以进行调用JS-SDK。

```javascript
wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '', // 必填，公众号的唯一标识
    timestamp: , // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '',// 必填，签名，见附录1
    jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});
```

## js里面写空格

```javascript
\xa0
```

## vue强制更新数据

使用Vue开发时，在函数中改变了页面中的某个值，在函数中查看是修改成功了，但在页面中没有及时刷新改变后的值

```javascript
// 赋值玩以后，执行下面这个方法  强制刷新数据。
this.$forceUpdate()
```

## 判断是不是外链

```javascript
// /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/  这个正则
let reg=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
     if(!reg.test(url)){
      uni.navigateTo({
       url,
      })
     }else{
      window.location.href = url
     }
```

## 微信公众号ios需要手动刷新一次

 **原理：单页应用，ios系统获取签名的url是首次进入页面的地址，安卓系统获取的是当前页面的url地址**

```javascript
onLoad() {
  let url = 'https://wwww.com/#/pages/share/code'
  let ref = uni.getStorageSync('code');
  //判断是不是ios系统，是的话截取#前面的路径
  let os = ""
      uni.getSystemInfo({
       success: function(res) {
        os = res.system;
       }
      });
      var link = "";
      if (os.indexOf("IOS") == -1) {
       link = url.split("#")[0]
      }else{
     link = url
      }
  //自定义分享链接的拼接
  let qiao = 'https://wwww.com/#/pages/brige/brige'
  var brige = qiao + "?ref=" + ref
  console.log('分享brige', brige)
  this.http('/api/jssdk/get', 'post', {
   link: link
  }).then(res => {
   if (res.data.code === 1) {
    console.log('分享1111', res.data.data)
    var result = res.data.data;
    var wxshare = require('jweixin-module');
    wxshare.config({
     debug: false, //是否打开调试
     appId: result.appId, // 公众号的唯一标识  
     timestamp: result.timestamp, // 生成签名的时间戳  
     nonceStr: result.nonceStr, // ，生成签名的随机串  
     signature: result.signature, // 签名  
     jsApiList: [
      "onMenuShareAppMessage",
      "onMenuShareTimeline",
     ]
    });
  
    wxshare.ready(function() {
     //分享给朋友
     wxshare.onMenuShareAppMessage({
      title: "标题",// 分享标题
      desc: "怎么怎么那么好看", // 分享描述 
      link: brige, // 当前页面链接  
      imgUrl: "https://www.com/index/img/imglogo.png", // 分享图标                                
      success: function() { //分享成功回调 
      },
      cancel: function() { //取消分享回调   
      }
     });
     //分享到朋友圈
     wxshare.onMenuShareTimeline({
      title: "标题",// 分享标题
      desc: "怎么怎么那么好看", // 分享描述 
      link: brige, // 当前页面链接  
      imgUrl: "https://ww.com/index/img/imglogo.png", // 分享图标                       
      success: function() {
      },
      cancel: function() {
      }
     });
    })
   }
  });

 },

```

## 导出excel

```javascript
    Axios({
        method: 'get',
        url: ``,
        responseType: 'blob', // 重要
        params: this.form
      })
          .then((res) => {
            var blob = new Blob([res.data], { type: 'application/octet-stream;charset=UTF-8' })
            var contentDisposition = res.headers['content-disposition']
            var patt = new RegExp('filename=([^;]+\\.[^\\.;]+);*')
            var result = patt.exec(contentDisposition)
            var filename = '测试.xls'
            var downloadElement = document.createElement('a')
            var href = window.URL.createObjectURL(blob) // 创建下载的链接
            var reg = /^["](.*)["]$/g
            downloadElement.style.display = 'none'
            downloadElement.href = href
            downloadElement.download = decodeURI(filename.replace(reg, '$1')) // 下载后文件名
            document.body.appendChild(downloadElement)
            downloadElement.click() // 点击下载
            document.body.removeChild(downloadElement) // 下载完成移除元素
            window.URL.revokeObjectURL(href)
          })
```

## 多种下载文件封装

```javascript
const downloadFile = (data, res) => {
  // data需包含文件后缀名  res是下载接口返回的数据
  //获取后缀
  let ext = data.fileName.substring(data.fileName.lastIndexOf(".") + 1);
  // 后缀
  let suffix = [
    "bmp",
    "gif",
    "jpg",
    "jpeg",
    "png",
    "doc",
    "docx",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "html",
    "htm",
    "txt",
    "rar",
    "zip",
    "pdf",
  ];
  // 后缀对应type
  let type = [
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/jpeg",
    "image/png",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "text/html",
    "text/html",
    "text/plain",
    "application/x-rar-compressed",
    "application/zip",
    "application/pdf",
  ];
  // 获取后缀下标
  let index = suffix.indexOf(ext);
  // 对应的type 值
  const blobType = type[index];
  let blob = new Blob([res], {
    type: `${blobType};charset=utf-8`,
  });
  let url = window.URL.createObjectURL(blob);
  let aLink = document.createElement("a"); //创建a标签
  aLink.style.display = "none";
  aLink.href = url;
  aLink.setAttribute("download", data.realName); // 设置文件 name
  document.body.appendChild(aLink);
  aLink.click(); //自执行下载
  document.body.removeChild(aLink); //下载完成移除元素
  window.URL.revokeObjectURL(url); //释放掉blob对象
};

export default downloadFile;

```
