---
prev: false
next: false
---
# Vue的Options

## el：挂载点

与$mount有替换关系

```javascript
new Vue({
  el: "#app"
});

new Vue({}).$mount('#app')
```

注：被你选为挂载点的那个元素，如果在index.html里那个元素里面本来就有内容，在渲染时会消失（网速慢可以看到），被这个vue实例的对应内容所覆盖。

## data：内部数据

支持对象和函数，优先用函数

```javascript
new Vue({
  //优先使用函数
  data() {
    return {
      n: 0,
    }
  }
}).$mount("#app");
```

注：能写函数尽量写函数，否则有可能有BUG；  就是对象变得时候 所有的都会变 而方法不会

## methods：方法

### 事件处理函数

```javascript
new Vue({
     data (){
        return{
            n:0
        }
     },
    template:`
        <div class="red">
            {{n}}
            <button @click="add">+1</button>
        </div>
    `,
  //add必须写到methods里面
    methods:{
         add(){
             this.n+=1
         }
    }
}).$mount('#app')
```

### 普通函数：methods代替filter

```javascript
import Vue from "vue";
Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      n: 0,
      array: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  },
  template: `
  <div class=red>
  {{n}}
  <button @click="add">+1</button>  //事件处理函数
  <hr>
  {{filter()}}   //普通函数(JS的filter直接在视图里调用，每一次更新渲染都会调用一次)
  </div>
  `,//主动在模板里面调用
  methods: {
    add() {
      this.n += 1;  //事件处理函数
    },
    filter() {
      return this.array.filter(i => i % 2 === 0);  //普通函数
    }
  }
}).$mount("#app");

```

## components：组件

使用Vue组件，注意大小写
（建议用法） 模块化：

- 新建一个vue文件Demo.vue，这个vue文件就是一个组件
- 在main.js中引入这个vue文件
- 在vue实例的components中声明这是我要用的组件，并且命名为Demo
- 这样在这个Vue实例的template中就可以直接使用这个组件`<Demo/>`

```javascript
import Vue from "vue";
import Demo from "./Demo.vue";  //引入这个vue文件   ---文件名最好小写 组件名最好大写
Vue.config.productionTip = false;

new Vue({
  components: {
    Demo  //在vue实例的components中声明这是我要用的组件，并且命名为Demo
    //如果组件名就叫Demo，即Demo：Demo，那就写Demo --ES6缩写
    //components: {Demo},
  },
  data() {
    return {
      n: 0
    };
  },
  template: `
  <div class=red>
  {{n}}
  <button @click="add">+1</button>
  <Demo/>   //这样在这个Vue实例的template中就可以直接使用这个组件`<Demo/>`
  </div>
  `,
  methods: {
    add() {
      this.n += 1;
    },
  }
}).$mount("#app");
  
```

## 四个钩子

### created -- 实例出现在内存中后触发

```javascript
created(){
         debugger
         console.log('这玩意出现在内存中')
    },
```

### mounted-- 实例出现在页面中（挂载了）后触发

```javascript
  mounted(){
    debugger
         console.log('这玩意儿已出现在页面中')
    },
```

### updated -- 实例更新了后触发

```javascript
updated(){
         console.log('更新了')
        console.log(this.n)  
    },
 //当你+1的时候，能证明他在更新的时候触发,还可以拿到最新的n
```

### destroyed -- 实例从页面和内存中消亡了后触发

## props：外部属性

外部来传值

- `message="n"`传入字符串
- `:message="n"`传入vue实例的this.n数据
- `:fn="add"`传入vue实例的this.add函数

[示例](https://codesandbox.io/s/shili-dfnhx)

## 注意事项

关于命名方法

- 文件名小写 ： windows 不分大小写
- 组件大写 ： 避免和 已有标签重名
