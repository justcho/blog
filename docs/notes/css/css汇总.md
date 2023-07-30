# CSS 汇总

## BFC 是什么

### 是什么

块级格式化上下文

### 怎么做

1. 浮动元素（元素的 float 不是 none）
2. 绝对定位元素（元素的 position 为 absolute 或 fixed）
3. 行内块 inline block 元素
4. overflow 值不为 visible 的块元素
5. 弹性元素（display为 flex 或 inline-flex元素的直接子元素）

### 解决了什么问题

1. 清除浮动（为什么不用 .clearfix 呢？）
2. 防止 margin 合并
3. 某些古老的布局方式会用到（已过时）
优点：无。

### 缺点：有副作用

怎么解决缺点：使用最新的 display: flow-root 来触发 BFC 就没有副作用了，但是很多人不知道。

### CSS 选择器优先级如何确定？

[这里](http://www.ayqy.net/doc/css2-1/cascade.html#specificity)有 CSS 2.1 规格文档的权威算法：（但并不适用于 CSS 3）

1. 选择器越具体，其优先级越高
2. 相同优先级，出现在后面的，覆盖前面的
3. 属性后面加 !important 的优先级最高，但是要少用

## 两种盒模型（box-sizing）的区别？

第一种盒模型是 `content-box`，即 `width` 指定的是 `content` 区域宽度，而不是实际宽度，公式为

> 实际宽度 = width + padding + border

第二种盒模型是 `border-box`，即 `width` 指定的是左右边框外侧的距离，公式为

>实际宽度 = width

相同点是都是用来指定宽度的，不同点是 `border-box` 更好用。

## 如何清除浮动？

方法一，给父元素加上 `.clearfix`

```css
.clearfix:after{
     content: '';
     display: block; /*或者 table*/
     clear: both;
 }
 .clearfix{
     zoom: 1; /* IE 兼容*/
 }
 ```

方法二，给父元素加上 `overflow:hidden` 。
