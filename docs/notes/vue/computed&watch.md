
# Computed & Watch

## computed

定义：根据其他属性被计算出来的值

```javascript
computed ：{ 
    [key: string]: Function | { get: Function, set: Function } 
}
```

是个对象，键名是字符串，键值可以是
<br/>
①仅读取：函数形式，返回计算出的值（也就是getter）
<br/>
②读取和设置：对象形式，`getter`返回计算出来的值，`setter`修改

计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。注意，如果某个依赖 (比如非响应式属性) 在该实例范畴之外，则计算属性是不会被更新的。
如果依赖的属性没有变化，就不会重新计算
但是`getter / setter`默认不会做缓存，Vue做了特殊处理

```javascript
var vm = new Vue({
  data: { a: 1 },
  computed: {
    // 仅读取
    aDouble: function () {
      return this.a * 2
    },
    // 读取和设置
    aPlus: {
      get: function () {
        return this.a + 1
      },
      set: function (v) {
        this.a = v - 1
      }
    }
  }
})
vm.aPlus   // => 2
vm.aPlus = 3
vm.a       // => 2
vm.aDouble // => 4

//在template里，当数据来用，默认为返回值
{{aPlus}}
{{aDouble}}
```

## watch

定义：当数据变化时执行一个函数

异步，所有代码执行完才会执行
何为变化？简单类型看值，复杂类型(对象) 看地址 这其实就是===的规则（[示例代码](https://codesandbox.io/s/still-snowflake-m62t1)）

- obj原本是{a:'a'},现在`obj = {a:'a'}`,那么obj变了，obj里的a也变了。因为obj储存了一个对象的地址，现在重新存了一个对象的地址。当然变了
- obj原本是{a:'a'},现在obj.a = 'b'，那么obj.a变了（简单类型，而且值变了），obj没有变（复杂类型，保存的地址没变），obj存的那个对象还是那个对象。
- `n：0`， 现在`n = 1`,那么`n`变了（简单类型，而且值变了）

```javascript
watch : { [key: string]: string | Function | Object | Array }
```

```javascript
//在new Vue的options里
watch: {
  o1: ()> {}， //别用这种，这里的this是全局对象，因为箭头函数没有this，那就回去他外面的函数找this，但是new Vue不是他外面的函数，外面的函数是指外面定义的函数。所以该箭头函数外面没有函数，所以this指的就是window或者global
  o2: function(value, oldValue){},  //vue规定了，参数是一个新值和一个旧值 这两个值是vue传进来的
  o3(){},
  o4:[f1,{o6的值}],  //其他写法的结合
  o5:'methodName'
  o6: {handler:fn/'methodName', deep :true, immediate:true}, //handler里写要执行的函数
                                                             //deep表示要不要深入的侦听这个对象，true深入的话该对象里面的属性变化也算变化
                                                             //immediate表示第一次渲染时要不要执行函数。全都默认false。
  'object.a' : function( ){ }  //对这个对象里面的属性a侦听
}
*********************************************************************
  //或者在new Vue外面这样写
vm.$watch('xxx',fn,{deep:  ;immetiate:  })

//如果非要把这样新式的放到new Vue的options里，那就挂在生命周期钩子里
created(){
    this.$watch('xxx',fn,{deep:  ;immetiate:  })

}


```

## computed和watch的区别

`computed`是计算属性
<br/>

computed是依赖其他属性计算出一个值的，这个值在调用时不需要加括号，可以当一个属性用；根据依赖自动缓存，依赖不变这个值就不会重新计算
<br/>

`watch`是监听,
watch有两个选项:

- `immediate`表示是否在第一次渲染时执行这个函数
- `deep`监听一个对象是否要监听这个对象里面的属性的变化,
`watch`某个属性变化了就执行一个函数

## 使用

如果一个数据依赖于其他数据，那么把这个数据设计为computed的
如果你需要在某个数据变化时做一些事情， 使用watch来观察这个数据变化
