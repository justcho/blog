
# v-model

## form    做表单一定要用 form+button组合

```vue
<template>
    <div id="app">
        登录
        <form @submit.prevent="onSubmit">    //.prevent阻止默认动作
            <label>
                <span>用户名</span>
                <input type="text" v-model="user.username"/>
            </label>
            <label>
                <span>密码</span>
                <input type="password" v-model="user.password"/>
            </label>
            <button type="submit">
                登录
            </button>
        </form>

    </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        user: {
          username: '',
          password: ''
        },
        x: ''
      }
    },
    methods: {
      onSubmit() {
        console.log(this.user)
      }
    },
    components: {}
  }
</script>
```

## v-model

```vue
<label>
                <span>用户名</span>
                <input type="text" v-model="user.username"/>
</label> 

上面的v-model等价于

<label>
                <span>用户名</span>
                <input type="text" :value="user.username"
                @input = "user.username = $event.target.value"/>
</label>



```

## 深入讲解：自己封装一个

```vue
<template>
    <div class="red wrapper">
      // sync就是$event 这里是元素 model默认认为 input是一个元素所以用 $event.target.value
        <input :value="value" @input="$emit('input',$event.target.value)"/>
    </div>
</template>

<script>

  export default {
    name: 'MyInput',
    props: {
      value: {
        type: String
      }
    },
  }
</script>

<style scoped>
    .red {
        background: red;
    }
    .wrapper{
        display: inline-block;
    }
</style>
```

## v-model



双向绑定
v-model 可以实现 我绑定一个变量，变量变化的时候UI会变化 用户改变UI的时候数据也会变化

v-model 实际上是 `v-band:value` 和 `v-on:input` 的语法糖

`v-on:input = ""`
原生input    `v-on:input="xxx.$event.target,value"`
自定义        `v-on:input = "xxx=$event"`
