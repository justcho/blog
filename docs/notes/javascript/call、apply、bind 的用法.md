---
prev: false
next: false
---
# call、apply、bind 的用法

## 例1

```javascript
obj.objAge;  //17
obj.myFun()  //小张年龄undefined
```

## 例2

```javascript
shows()  //盲僧
```

比较一下这两者`this` 的差别，第一个打印里面的`this` 指向`obj`，第二个全局声明的`shows()`函数   `this` 是`window` ；

## 1，`call()`、`apply()`、`bind()` 都是用来重定义 `this` 这个对象的

如：

```javascript
obj.myFun.call(db)；　　　　//德玛年龄99
obj.myFun.apply(db);　　　 //德玛年龄99
obj.myFun.bind(db)();　　　//德玛年龄99
```

以上出了bind 方法后面多了个 () 外 ，结果返回都一致！
由此得出结论，bind 返回的是一个新的函数，你必须调用它才会被执行

## 2，对比`call` 、`bind` 、 `apply` 传参情况下

```javascript
obj.myFun.call(db,'成都','上海')；　　　　 //德玛 年龄 99  来自 成都去往上海
obj.myFun.apply(db,['成都','上海']);        //德玛 年龄 99  来自 成都去往上海
obj.myFun.bind(db,'成都','上海')();         //德玛 年龄 99  来自 成都去往上海
obj.myFun.bind(db,['成都','上海'])();　　 //德玛 年龄 99  来自 成都,上海去往undefined
```

## 3，微妙的差距

从上面四个结果不难看出
call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，第二个参数差别就来了：
call的参数是直接放进去的，第二第三第n个参数全都用逗号分隔，直接放到后面  `obj.myFun.call(db,'成都', ... ,'string' )`；
apply的所有参数都必须放在一个数组里面传进去  `obj.myFun.apply(db,['成都', ..., 'string' ])`;
bind除了返回是函数以外，它 的参数和call 一样。
当然，三者的参数不限定是string类型，允许是各种类型，包括函数 、 object 等等

## 4，`MDN`

[Function.prototype.call()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
[Function.prototype.apply()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
[Function.prototype.bind()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
