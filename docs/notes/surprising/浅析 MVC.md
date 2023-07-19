
# 浅析 MVC

## MVC（Model–View–Controller）

Model：数据模型  负责操作所有数据
View：视图 负责所有UI界面
Controller：控制器 负责其他

```javascript
//数据放在m
const m = {
 //1.有个数据本数
  data: {},
  //2.可以对数据增删改查
  create() {},
  delete() {},
  update(data) {},
  get() {}
}
//视图放在v
const v = {
  //1、一个空容器，以后就是装html的容器
  el: null,
  //2、要添加的html
  html: ,
  //3、初始化容器函数，参数是我们给的要当容器的元素（应该是index.html里就有的元素）
  init(container) {v.el = $(container);},
  //4、渲染函数，参数将是数据。也就是视图全都是对数据渲染 view = render(data)
  render(x) {}
}
//其他放在c
const c = {
  //1.总初始化函数，参数是我们给的要当容器的元素
  init(container) {},
  //2、自动绑定事件
  //(1)把所有事件写成哈希表
  events: {},
  //(2)每个事件要执行的函数写出来
  add() {},
  minus() {},
  mul() {},
  div() {},
  //(3)自动绑定事件
  autoBindEvents() {}
}
```

## EventBus

eventBus 主要用于对象间通信
监听事件 eventBus.on()

触发事件 eventBus.trigger()

```javascript
//一个事件执行
eventBus.trigger("m:updated");  //在数据增删改查函数中
eventBus.on("m:updated", () => {
      //④监听m:updated事件，每次触发就执行一些内容
      v.render(m.data.n);
    })

```

## 表驱动编程

表驱动法是一种编程模式(scheme)——从表里面查找信息而不使用逻辑语句(if和case)。事实上，凡是能通过逻辑语句来选择的事物，都可以通过查表来选择。对简单的情况而言，使用逻辑语句更为容易和直白。但随着逻辑链的越来越发杂，查表法也就愈发显得更具吸引力

```javascript
//不使用表的编程
$('#add').on('click', ()=>{
number += 1
$number.text(number)
localStorage.setItem('number', number)
})
$('#minus').on('click', ()=>{
number -= 1
$number.text(number)
localStorage.setItem('number', number)
})
$('#mult).on('click', ()=>{
number *= 2
$number.text(number)
localStorage.setItem('number', number)
})
$('#divide).on('click', ()=>{
number /= 2
$number.text(number)
localStorage.setItem('number', number)
})
***************************************
  //使用表的编程
events: {
    'click #add1': 'add',
    'click #minus1': 'minus',
    'click #mul2': 'mul',
    'click #divide2': 'div',
  },
  add() {
    m.update({n: m.data.n + 1})
  },
  minus() {
    m.update({n: m.data.n - 1})
  },
  mul() {
    m.update({n: m.data.n * 2})
  },
  div() {
    m.update({n: m.data.n / 2})
  },
```

- 表指的是哈希表
- 表驱动编程可以减少重复代码，只讲重要的信息放在表里，然后利用表来编程
- 利用哈希表，把每一个的事件，元素，函数列出来
- 把每一个的函数定义出来
- 自动绑定事件：利用遍历哈希表，把元素绑定上事件

## 对于模块化的理解

模块化：模块的内部数据的实现是私有的，只是向外部暴露一些接口（方法）与外部其他模块通信。
模块化可以降低代码耦合度，减少重复代码，提高代码重用性，并且在项目结构上更加清晰，便于维护。
