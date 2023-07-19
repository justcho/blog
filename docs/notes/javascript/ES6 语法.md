
# ES6 语法

## 作用域

### [块级作用域](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/block)

#### var

var声明的变量，其作用域为该语句所在的函数内，且存在变量提升现象

#### [let](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)

let 声明的变量的作用域是块级的，let 不能重复声明已存在的变量

#### const

const声明的是常量，在后面出现的代码中不能再修改该常量的值

### [箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

#### 1、语法更加简洁、清晰

从上面的基本语法示例中可以看出，箭头函数的定义要比普通函数定义简洁、清晰得多，很快捷。

#### 2、箭头函数不会创建自己的this（重要！！深入理解！！）

我们先来看看[MDN](https://links.jianshu.com/go?to=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FFunctions%2FArrow_functions)上对箭头函数`this`的解释

```markdown
箭头函数不会创建自己的this，所以它没有自己的this，它只会从自己的作用域链的上一层继承this
```

## 参数处理

#### [函数默认参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)

允许在没有值或`undefined`被传入时使用默认形参

#### [剩余参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)

允许我们将一个不定数量的参数表示为一个数组。

## 对象属性加强

- 属性定义支持短语法 `obj = { x, y }`
- 属性名支持表达式 `obj = {["baz" + quux() ]: 42}`
- 添加 [`__proto__` 属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)，但不建议使用

## [解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

一种 Javascript 表达式。通过**解构赋值,**可以将属性/值从对象/数组中取出,赋值给其他变量。

- 数组匹配 `[ b, a ] = [ a, b ]`
- 对象匹配 `let { a, b, c } = objABC`
- 参数匹配 `function g ({ name: n, val: v }) {}`
