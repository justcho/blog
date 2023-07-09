---
prev: false
next: false
---
# React 组件

就目前而言，一个返回React元素的函数就是组件
在Vue里，一个构造选项就可以表示一个组件

## 两种组件

### 函数组件

---

```jsx
function Welcome(props){
return <h1>Hello, {props.name}</h1>;
}
使用方法：<Welcome name="just"/>
```

### 类组件

---

```jsx
class Welcome extends React.Component {
render() {
return <h1>Hello, {this.props.name}</h1>
}
}
使用方法：<Welcome name="just"/>
```

## `<Welcome />`

### 会被翻译成什么

- `<div />` 会被翻译为 `React.createElement('div')`
- `<Welcome />` 翻译为 `React.createElement(Welcome)`

### React.createElement 的逻辑

- 如果传入一个字符串 `'div'` ，则会创建一个div
- 如果传入一个函数，则会调用该函数，获取其返回值
- 如果传入一个类，则在类前面加个new (这会导致执行 constructor),获取一个组件对象，然后调用对象的

reder方法，获取其返回值

## 获取数据

### 添加props

---

- 类组件直接读取属性 `this.props.xxx`
- 函数组件直接读取参数 `props.xxx`

### 添加state

---

- 类组件用 `this.state`  读， `this.setState` 写
- 函数组件用 `useState` 返回数组，第一项读，第二项写

## 类组件注意事项

### this.state.n+=1 无效

---

- 其实n已经改变，只不过UI不会自动更新
- 调用setState 才会触发UI更新（异步更新）
- React 没有像Vue监听data那样监听state

### setState会异步更新UI

---

setState 之后， state不会马上改变， 立马读state会失败
更推荐的方式是 setState(函数)

### this.setState(this.state) 不推荐

---

React希望我们不要修改state（不可变数据）
常用代码： `setState({n:state.n+1})`

## 函数组件需要注意的地方

### 跟类组件类似的地方

---

也要通过setX(新值)来更新UI

### 跟类组件不同的地方

---

没有this,一律同参数和变量

## 复杂 state

### 总结

---

1. 类组件的 `setState` 会自动合并第一层属性
2. 第二层使用 `Object.assign` 或者 `...操作符`

## 事件绑定

### 类组件的事件绑定

---

```jsx
class Son extends React.Component{
addN = () => this.setState({n: this.state.n + 1});
render(){
return <button onClick={this.addN}>n+1</button>
}
}
```
