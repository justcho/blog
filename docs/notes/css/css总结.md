
# CSS 总结

```javascript
# float布局

// 子元素加 float:left 父元素药交会clearfix  float 会脱离文档流

.clearfix:after{
  content: '';
  display: block;
  clear: both;
}

# 小技巧
1. border: 1px solid red // 会占宽度。可以改为outline
2. 元素为块级元素时 margin-left: auto; margin-right:auto; 就可以居中
3. 负margin 做平均布局时 最后一个块回多出外边距 在他的父元素用 -margin

# flex 布局 item
1.item 上面加order 可以改变排序
2.item上加 flew-grow   可以改变宽 默认0
3.align-self 定制 align-items
4.item上加 flex-shrink 压缩 默认0
```
