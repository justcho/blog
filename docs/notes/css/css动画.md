---
prev: false
next: false
---
# css 动画

## transform（允许你旋转，缩放，倾斜或平移给定元素）

### translate （位移）

```css
// length-percentage 长度或百分数 ? 表示可省略
// x 轴方向平移
transform: translateX(<length-percentage>)

// y轴方向平移
transform: translateY(<length-percentage>)

// 两者结合
transform: translate(<length-percentage>,<length-percentage>?)

// 垂直于屏幕方向
transform: translateZ(<length>)且父容器perspective（原点/视点位置）

// 加Z 需要使用 translate3d
transform: translate3d(x,y,z)

// 经验：绝对定位元素的居中
top:50%
left: 50%
transform: translate(-50%，-50%)
```

### scale (缩放)

```css
// x轴方向改变大小
transform: scaleX(<number>)

// y轴方向改变大小
transform: scaleY(<number>)

// 两者结合
transform: scale(<number>,<number>?)

// 经验： 用的很少容易出现模糊
```

### rotate(旋转)

```css
// angle 表示角度 zero 点
// z 轴转
transform: rotate( [ <angle> | <zero> ] )

// x 轴转
transform: rotateX( [ <angle> | <zero> ] )

// y 轴转
transform: rotateY( [ <angle> | <zero> ] )

// z 轴转
transform: rotateZ( [ <angle> | <zero> ] )

//经验： 一般用于制作loading
```

### skew(倾斜)

```css
// x 轴倾斜
transform: skewX([ <angle> | <zero> ]);

// y 轴倾斜
transform: skewY([ <angle> | <zero> ]);

// 两者结合
transform: skew([ <angle> | <zero> ],[ <angle> | <zero> ]?);

// 经验： 用的较少
```

### 组合（多种效果）

```css
// 组合使用
transform: scale(0.5) translate(-100%, -100%);

// 取消所有
transform: none
```

## transition(过渡)

### 作用

补充中间帧

### 语法

```css
// transition: 属性名 时长 过渡方式 延迟
transsition: left 200ms linear

// 可以用逗号分隔两个不同属性
transition: left 200ms, top 400ms

// 可以用all 代表所有属性
transition: all 200ms

// 过渡方式(线性或非线性)
linear/ ease/ ease-in/ ease-out/ease-in-out/
```
