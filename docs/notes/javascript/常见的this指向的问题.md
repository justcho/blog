# 常见的this指向的问题

**在函数中this到底取何值，是在函数真正被调用执行的时候确定的，函数定义的时候确定不了，也就是说，this的指向完全取决于函数调用的位置**。

## this指向分类讨论

### this在全局作用域中

```javascript
// global scope
foo = 'abc';
alert(foo); // abc

this.foo = 'def';
alert(foo); // def
```

在全局作用域/全局环境(global scope| global context)中，this指向的就是全局变量

- 在浏览器里,指向window对象
- 在Node.js里，指向global对象

### this在函数 (function)里

```javascript
var boat = {
 size: 'normal',
  boatInfo: function(){
   alert(this === boat);
    alert(this.size)
  }
};
boat.boatInfo(); // true, 'normal'

var bigBoat = {
 size: 'big'
};

bigBoat.baatInfo = boat.boatInfo;
bigBoat.boatInfo(); // false, 'big'
```

上面这段代码里，this指向谁？可以看到，boat对象有一个size属性，和一个`boatInfo()`方法。在boatInfo()方法里，alert出this是否和boat相等，以及this所指向的size属性。
当我们去用`boat.boatInfo()`时，可以看到，this和boat是相等的,this.size的值就是boat.size的值nomal
当我们创建一个新的对象，bigBoat,它的size属性为big，但是bigBoat这个对象没有`boatInfo()`方法，于是我们把boat.boatInfo()的方法赋给了它。然后我们调用`bigBoat.boatInfo()`,发现this不等于boat,this.size的值为big，this的指向改变了！

要理解以上的变化，首先要明白，在任何函数中，this的指向都不是静态的(static)。它总是在你调用一个函数，但尚未执行函数内部代码前被指定。(查看参考链接中的执行环境的文章，这个阶段，实际就是初始化变量对象，在初始化变量对象的时候，确定了this的指向)实际上，this是 被调用的函数的父作用域 提供的，更重要的是，我们要看看函数调用时是怎么写的。

当一个函数被调用时，应该立马看()左边的部分。

- 如果()左边是一个引用(reference),那么，函数的this指向的就是这个引用所属的对象
- 否则this指向的就是全局对象(window|global)

```javascript
function bar() {
    alert(this);
}
bar(); // global - because the method bar() belongs to the global object when invoked
// 这里，this指向的是全局对象。我们先看()的左边，是bar,
// 那么bar属于谁呢？bar属于全局对象，所以this指向的就是全局对象。

var foo = {
    baz: function() {
        alert(this);
    }
}
foo.baz(); // foo - because the method baz() belongs to the object foo when invoked
// 这里,this指向的是foo,先看()左边是baz，baz属于foo，所以baz里的this指向的就是foo
```

如果代码都那么简单，那么this的指向也就简单明了了。来点复杂点的看看:

```javascript
var foo = {
    baz: function() {
        alert(this);
    }
}
foo.baz(); // foo - because baz belongs to the foo object when invoked

var anotherBaz = foo.baz;
anotherBaz(); // global - because the method anotherBaz() belongs to the global object when invoked, NOT foo
// this指向全局对象，()左边是anotherBaz,属于全局对象
```

可以看到baz()中this的指向老是变来变去的。再来看看嵌套在对象里的this的指向

```javascript
var anum = 0;

var foo = {
    anum: 10,
    baz: {
        anum: 20,
        bar: function() {
            console.log(this.anum);
        }
    }
}
foo.baz.bar(); // 20 - because left side of () is bar, which belongs to baz object when invoked
// ()左边是bar，bar属于foo.baz，所以this就是foo.baz,this.anum = foo.baz.anum = 20

var hello = foo.baz.bar;
hello(); // 0 - because left side of () is hello, which belongs to global object when invoked
// ()左边是hello，hello属于全局对象，所以this指向全局对象，this.anum = window.anum = 0
```

再看个例子：

```javascript
const obj = {
  name: 'spike',
  friends: ['deer', 'cat'],
  loop: function() {
    this.friends.forEach( // 这个this指向obj
      function( friend ) {
        console.log(`${this.name} knows ${friend}`);
        console.log(this === global); // 在node.js环境下，全局对象为global
      }
    )
  }
}

obj.loop();
// ()左边是loop,属于obj,所以loop函数中的this指向obj
```

输出

```javascript
$ node test
undefined knows dear
true
undefined knows cat
true
```

可以看到，在forEach中的this并不是期待的那样指向obj，而是指向全局对象了
可以用上面提到的，还是看()左边，在forEach中，()左边是function，而不是一个引用, 所以this指向的就是全局对象
这里其实我也有点迷惑，当不明白Scope的结构时候，可以通过在浏览器中运行代码，去调试面板查看函数执行时的作用域变化。

### 在构造函数里的this指向

当使用new关键字去执行构造函数时，构造函数中的this指向的的就是新建的那个对象实例。

```javascript
  var savedThis;
    function Constr() {
        // 保存构造函数中的this
        savedThis = this;
    }
    // 通过new关键字执行构造函数
    var inst = new Constr();
    
    // 构造函数中的this指向的就是新创建的对象实例inst
    console.log(savedThis === inst); // true
```

如果你没有用new关键字去执行构造函数，那么就要分析函数被调用时所属的作用域了

```javascript
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    var p = Point(7, 5); // 没有用new关键字去执行构造函数！
    
    console.log(p === undefined); // 没有用new，所以构造函数没有返回一个实例对象， 所以p === undefined
    
    // 没有用new关键字，Point(7,5);就只是把函数执行了一遍
    // ()左边是Point，属于全局对象，所以this指向全局对象
    console.log(x); // 7
    console.log(y); // 5
```

### 在事件处理器（event handler)中 this的指向

```javascript
<div id="test">I am an element with id #test</div>

function doAlert() { 
    alert(this.innerHTML); 
} 

doAlert(); // undefined 
// doAlert()属于全局对象

var myElem = document.getElementById('test'); 
myElem.onclick = doAlert; 

alert(myElem.onclick === doAlert); // true 
myElem.onclick(); // I am an element
// ()左边是onclick也就是doAlert,属于myElem,所以this指向myElem
```

## 总结

以上，对于函数中的this，通过查看()左边所属的对象去确定，真的很好用。
而实质上，this是在创建函数的执行环境时，在创建阶段确定的，因此，弄透执行环境，去思考执行环境创建阶段的this的指向，this的指向就不会弄错了吧。
