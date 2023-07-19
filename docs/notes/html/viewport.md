

# viewport

```html
HTML:meta viewport 
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
```

## 解析

`content="width=device-width` : 网页宽度默认等于屏幕宽度
`initial-scale=1` : 原始缩放比例为1.0
`minimum-scale=1` : 允许用户的最小缩放值为1.0
`maximum-scale=1` : 允许用户的最大缩放值为1.0
`user-scalable=no` : 是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes代表允许这些属性可以同时使用，也可以单独使用或混合使用，多个属性同时使用时用逗号隔开就行了
`viewport-fit=cover` : 视图端口被缩放以填充设备显示
