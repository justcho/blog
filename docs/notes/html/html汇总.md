# Html&nbsp;问题汇总

## 如何理解 HTML 中的语义化标签

### 是什么

语义化标签是一种写 HTML 标签的方法论/方式。

### 怎么做

实现方法是遇到标题就用 h1 到 h6，遇到段落用 p，遇到文章用 article，主要内容用 main，边栏用 aside，导航用 nav……（就是找到中文对应的英文）

### 解决了什么问题

明确了 HTML 的书写规范

### 优点

1. 适合搜索引擎检索；
2. 适合人类阅读，利于团队维护。

### 缺点

没有。

### 怎么解决缺点

无需解决。

## HTML 5 有哪些新标签？

- 文章相关：header main footer nav section article figure mark

- 多媒体相关：video audio svg canvas

- 表单相关：type=email type=tel

MDN 把所有标签都列在[这里](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)了，且有教程

## Canvas 和 SVG 的区别是什么？

- Canvas 主要是用笔刷来绘制 2D 图形的。
- SVG 主要是用标签来绘制不规则矢量图的。

- 相同点：都是主要用来画 2D 图形的。
- 不同点：Canvas 画的是位图，SVG 画的是矢量图。
- 不同点：SVG 节点过多时渲染慢，Canvas 性能更好一点，但写起来更复杂。
- 不同点：SVG 支持分层和事件，Canvas 不支持，但是可以用库实现。
