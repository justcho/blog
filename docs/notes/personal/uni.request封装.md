# uni.request 封装

## 封装uni.request

### 在根目录下建一个utils文件夹，在建一个 `request.js`

```javascript
import { API_BASE_URL } from '@/config'
import { getToken } from '@/utils/auth'
import { msg, jumpTo } from '@/utils/helper'
 
const request = (config) => {
 
    config.url = API_BASE_URL + config.url
 
    if(!config.data) {
        config.data = {}
    }
 
    console.log('请求参数', JSON.stringify(config.data))
 
    let promise = new Promise((resolve, reject) => {
        uni.request(config).then(response => {
 
            // 异常
            if(response[0]){
 
                reject({message : '网络超时'})
            }else{
 
                let res = response[1].data
                // 处理拦截器
                if(res.code !== 200){
                    msg(res.msg)
                    if (res.code === 10002) {
                        jumpTo('/pages/public/login')
                    }
 
                    reject(res)
                }
 
                resolve(res)
            }
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
    
    return promise
}
 
export default request

```

## 管理 api

### 接下来继续在api文件夹下创建一个`login.js` （如果api接口分类不需要分开的话就创建index.js，全部放一块，然后引入js，定义一个api，使用就以`api.pwdlogin().then(res => {})`方式）

### PS：这里跟axios封装方式不一样，如果一个模块有多个请求（比如登录有密码登录，手机验证码登录等等），可以用以下方式，方便管理

```javascript
import request from '@/utils/request'; // 引入封装好的request
 
// 密码登录
function pwdLogin (data) {
    return request({
        method: "POST", // 请求方式
        url: 'login/pwd', // 请求url
        data: data // 参数
    })
}
 
// 手机登录
function phoneLogin (data) {
    return request({
        method: "POST", // 请求方式
        url: 'login/phone', // 请求url
        data: data // 参数
    })
}
 
export default{
    pwdLogin,
    phoneLogin
}

```

## 使用api

```javascript
import login from '@/api/login.js'; // 引入api
 
export default {
    data() {
        return {
            phone: '', // 手机号码
            password: '', // 密码
            code: '', // 手机验证码
            isPwdLogin: true // 是否使用密码登录
        }
    },
    onShow() {
        this.showInit();
    },
    methods: {
        
        // 初始化
        async showInit() {},
 
        // 登录
        handleToLogin() {
            if (isPwdLogin) { // 使用密码登录
                let pwdParams = {
                    phone: this.phone,
                    password: this.password
                }
                login.pwdLogin(pwdParams).then(res => {
                    if (res.code == 200) {
                        uni.showToast({
                            title: "登录成功",
                            icon: 'success'
                        })
                    }
                }).catch(err => {
                    uni.showToast({
                        title: err.msg,
                        icon: 'none'
                    })
                });
            } else { // 使用手机验证码登录
                let phoneParams = {
                    phone: this.phone,
                    code: this.code
                }
                login.phoneLogin(phoneParams).then(res => {
                    if (res.code === 200) {
                        uni.showToast({
                            title: "登录成功",
                            icon: 'success'
                        });
                    }
                }).catch(err => {
                    uni.showToast({
                        title: err.msg,
                        icon: 'none'
                    })
                });
            }
        }
    }
}

```

## 总结

#### 跟axios封装稍微有一点点变化，但是都很明显的，这个封装个人觉得是非常非常好用，然后就是uni-app的uni.request请求问题，这里要说明一下，如果遇到异步问题，请使用下面的方法

```javascript
import products from '@/api/products.js'
 
export default {
    data() {
        return {
            productsList: []
        }
    },
    onLoad() {
        this.showInit();
    },
    methods: {
        
        // 初始化
        async showInit() {
            await this.getProductsList();
        },
 
        // 获取产品列表
        getProductsList() {
            products.list().then(res => {
                if (res.code == 200) {
                    this.productsList = res.data;
                }
            }).catch(err => {
                uni.showToast({
                    title: err.msg,
                    icon: 'none'
                })
            });
        }
    }
}

```

### 这里用到了async + await

## 新的封装

```javascript
import config from '../config/config.js'
const app = getApp()
let fetchCount = 0

export function fetch({
 url,
 data = {},
 method = 'GET',
 header = {}
}) {
 return new Promise((resolve, reject) => {
  uni.showNavigationBarLoading()
  if (fetchCount === 0) {
   uni.showLoading({
    title: '拼命加载中',
    mask: true
   })
  }
  fetchCount++
  header = {
   'content-type': 'application/json',
   // 'X-Access-Token': app.globalData.token,
   // 'tenant-id': app.globalData.tenantId,
   ...header
  }
  uni.request({
   url: config.baseUrl + url,
   method,
   data,
   header,
   success: res => {
    const statusCode = res.statusCode.toString()
    const code = res.data.code.toString()
    _tryHideLoading()
    if (statusCode.startsWith('2') && code.startsWith('2')) {
     resolve(res.data.result)
    } else {
     _show_error(res.data.message)
     reject(res)
    }
   },
   fail: err => {
    _tryHideLoading()
    _show_error()
    reject(err)
   }
  })
 })
}

function _tryHideLoading() {
 if (fetchCount <= 0) return;
 fetchCount--
 if (fetchCount === 0) {
  uni.hideNavigationBarLoading()
  uni.hideLoading()
 }
}

function _show_error(title = '抱歉，出了一个错误') {
 uni.showToast({
  title,
  icon: 'none',
  duration: 3000
 })
}

```
