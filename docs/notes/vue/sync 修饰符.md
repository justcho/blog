---
prev: false
next: false
---
# sync 修饰符

## vue 修饰符sync的功能是：当一个子组件改变了一个 prop 的值时，这个变化也会同步到父组件中所绑定

```javascript
//写一个（子）组件Child.vue
<template>
  <div class="child">
    {{money}}          //儿子这里要显示钱
    <button @click="$emit('update:money', money-100)">  
    //儿子每次点击按钮就是想花钱，可是钱是爸爸给的自己花不了。
    //那就每次花钱的时候触发花钱事件update:money，这个事件会把爸爸给的钱-100，也就是儿子想怎么把这个钱花掉
      <span>花钱</span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["money"]  //儿子需要父亲给钱money
};
</script>


<style>
.child {
  border: 3px solid green;
}
</style>
*********************************************************************
  //写一个（父）组件App.vue ,这就是非完整版要用的vue文件
  <template>
  <div class="app">
    App.vue 我现在有 {{total}}
    <hr>
      <Child :money.sync="total"/>
        //这里的:monet 是指变量
    //<Child :money="total"  v-on:updata:money="total= $event"/>
    //爸爸在引用儿子的时候，先把自己的钱total给儿子money，在监听儿子的花钱事件updata：money，只要儿子花钱了，就把自己现在的钱total的金额=儿子想怎么花掉这钱$event。爸爸的total变了，儿子的money也变了
    //爸爸把total给儿子当他的money，要是儿子想改money就通知爸爸改爸爸的total
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  data() {
    return { total: 10000 };
  },
  components: { Child: Child }
};
</script>

<style>
.app {
  border: 3px solid red;
  padding: 10px;
}
</style>
```

## 总结

```javascript
<Child :money="total" v-on:updata:money="total= $event"/>
  等于
 <Child :money.sync="total"/> //.sync
```

## .sync是个语法糖
