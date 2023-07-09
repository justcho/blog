---
prev: false
next: false
---

# React 入门

### CDN引入react(仅作为了解)

---

#### CDN引入

- 引入React
- 引入ReactDOM

#### cjs和umd    优先使用umd

- cjs  CommonJS  是node.js支持的模块规范
- umd  统一模块规范  兼容各种模块规范

### 通过 webpack 引入React(需要配置webpack)

---

#### import...from

- yarn add react react-dom
- import React from 'react'
- import ReactDOM from 'react-dom'

#### 其他

- 除webpack外 rollup 和 parcel 也支持上面写法

### 选择

---

- 新手用 create-react-app
- 老手用 webpack 和rollup

## 函数的本质- 延迟

### 对比普通代码与函数

---

- 普通代码立即求值
- 函数等调用时候再求值 即延迟求值

### 对比React元素和函数组件

---

#### 对比

- 元素：App1 = React.createElement('div', null, n）
- 函数组件：App2 = ()=> React.createElement('div', null, n)      （延迟执行代码 在被调用的时候执行）

### 目前知道的

---

#### React元素

- createElement返回值可以代表一个div
- element为虚拟DOM对象

#### ()=>React元素

- 返回 element 的函数 也可以代表一个 div
- 这个函数多次执行 得到最新的虚拟div
- DOM diff算法 对比虚拟div 找不同 局部更新视图

## JSX的用法

### 使用方法

---

#### webpack + babel-loader

- webpack 让JS默认走 babel-loader
- APP.js 默认使用JSX语法

#### create-react-app

- 全局安装 yarn  global add create-react-app
- 初始化目录 create-react-app react-demo
- 进入目录 cd react-demo
- 开始开发 yarn start

### 注意事项

---

#### 注意 className

- 相当于class  但是不能写class

#### 插入变量

- 标签里的所有JS代码，变量，对象 都要用{}包起来

#### 习惯return 加（）

## 条件判断与循环

### 条件判断

```jsx
const Component = () =>{
  return n%2===0 ? <div>n是偶数</div>:
  <span> n是奇数</span>
}
// 如果需要外面的 div ,可以写成
  const Component = () =>{
    return (
    <div>
      { n%2===0 ? <div>n是偶数</div> : <span>n是奇数</span>}  
    </div>
    )
  }
  ****************
 const Component = () => {
     const content = (
     <div>
       { n%2===0 ? <div>n是偶数</div>:<span>n是奇数
     </span> } 
     </div>
     )
     return content 
 }
 **********************
  const Component = () =>{
     const inner = n%2===0 ? <div>n是偶数</>:
     <span>n是奇数</span>
     const content =(
     <div>
         {inner}
     </div>    
     )
  return content
  }
  ************
 const Component = () => { let inner
if (n%2===0) {
  inner = <div>n是偶数</div>
}else{
  inner = <span>n是奇数</span>
}
const content = (
<div>
  {inner}
  </div>
)
return content
 }
```

### 条件循环

```jsx
const Component = (props) => {
return props.numbers.map((n,index)=>{
  return <div>下标{index}值为{n}</div>
  }) 
}
// 如果你需要外面的div,可以写成  
const Component = (props) => {
return (<div>
{ props.numbers.map((n,index)=>{
 return <div> 下标  {index} 值为 {n}</div>
   }) }
</div>) 
}

*****************************
  const Component = (props) => {
const array = []
for(let i=0;i<props.numbers.length;i++){
  array.push(<div>下标{i}值为
      {props.numbers[i]}</div>)
}
  return <div>{ array }</div>
}
```
