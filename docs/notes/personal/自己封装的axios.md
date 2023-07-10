---
prev: false
next: false
---
# 自己封装的axios

## request.js

```javascript
import axios from 'axios'

let baseUrl;
// 环境
if (process.env.NODE_ENV === 'development')
{

  baseUrl = ''

} else
{
  baseUrl = ''
}
// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = baseUrl

//定义 请求路径
 export default function request(url,type='GET', data={}){
  //租户id
  let TEANT_ID = '1';
  //token
  let hjr_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjczMDQ2NzcsInVzZXJuYW1lIjoicXl4YWRtaW4ifQ.DnL9abdTnnGkDmuRc2Ly2eSlQqJZs8lZL48YfV2jv_I';
  //此token是登录成功后后台返回保存在storage中的

    return  new Promise(function (resolve, reject) {
    let option = {
      url,
      method:type,
      validateState(status){
        return (status >= 200 && status < 300) || status === 400
      },
        headers: {
          'tenant_id': TEANT_ID,
          'X-Access-Token': hjr_token,
        },
    }
    if( type.toLowerCase() === 'get'){
      option.params = data
    }else{
      option.data = data
    }
    axios(option).then(
      res => {
        if(res.status === 200) {
          resolve(res.data)
        }else {
          console.error(res.data)
          reject(res.data)
        }
      }
    ).catch(err=>{
        reject({msg: '网络异常'})
      }
    )
  })
}



```

# api.js

```javascript
import request from './request'

export function searchActivities() {
  return request(
    '', // 地址
    'GET'
  )
}
export function searchActivitiesByfivepractical(id) {
  return request(
    '', // 地址
    'GET',
    {id} // 参数
  )
}
```

# 页面使用

```javascript
import {searchActivities, searchActivitiesByfivepractical} from './api.js'

// async await方法
    async getList() {
      let res = await searchActivities()
      if (res.result) {
        console.log(res)
    },
// Promise.then方法
    searchActivitiesByfivepractical(n).then(
     res=>{
       console.log(res)
      }
    )
```
