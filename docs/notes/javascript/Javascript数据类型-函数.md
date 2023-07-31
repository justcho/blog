
# 函数对象

## 一、函数的定义方式

### 1、用构造函数（正规写法，但没人用）：`let 变量名 = new Function('形式参数1','形式参数2',语句，'return 返回值')`

函数是个对象，对象都是由构造函数构造出来的。所以从上式可以发现任何一个函数都是由“爸爸构造函数”Function函数构造出来的。构造函数这个对象的构造函数是“爸爸构造函数”Function函数

### 2、具名函数：`function 函数名(形式参数1,形式参数2) {语句 return 返回值}`

- 例如`function add(x,y) {return x+y}`
- `let f1 = function add(x,y) {return x+y}`也可以把具名函数放到变量f1上，但此时用add这个名字调用这个具名函数却无法成功，add的作用域仅限于在等号右边（不懂，记住就行）

### 3、匿名函数：`let 变量名 = function (形式参数1,形式参数2) {语句 return 返回值}`

- 因为匿名函数没有名字，所以必须给这个函数表达式赋值给变量。变量储存了这个匿名函数的地址而已
- 把具名函数的函数名去掉就是匿名函数，也叫函数表达式（等号右边这部分）
- 比如`let f1 = function(x,y){return x+y}`

### 4、箭头函数：`let 变量名 = (形式参数) => {语句 return 返回值}`

- 因为箭头函数没有名字，所以必须把这个箭头函数赋值给变量f1。变量储存了这个箭头函数的地址而已
- 形式参数在只有一个时，可以省略圆括号()
- 只有返回值时，{}可以省。**但是**注意如果此时返回值是个对象，{}省了是会有bug的！那在对象外面加个()就可以了

```javascript
let f1 = x => x*x
let f2 = (x,y) => x+y
let f3 = (x,y) => {return x+y}
let f4 = (x,y) => {
    console.log('hi')
    return x+y
}
let f5 = x => ({name:x})
```

## 二、函数自身fn VS 函数调用（执行）fn()

### 1、函数自身fn

`fn`只是表示把变量fn保存的地址指向的那个函数

### 2、函数调用fn()

只有给函数他需要的参数（也就是要给()圆括号）才可以调用执行这个函数

```javascript
let fn = () => {console.log('hi')}
fn   //  () => {console.log('hi')}
fn()  //  hi
fn(1)  //  hi
fn2 = fn
fn2  //  () => {console.log('hi')}
fn2()  //  hi
/*
fn保存了匿名函数的地址
这个地址被复制给了fn2
fn2()调用了匿名函数
fn和fn2都是匿名函数的引用而已
真正的函数既不是fn也不是fn2,而是() => {console.log('hi')}
*/
```

## 三、函数的要素

每个函数都有这些东西

- 调用时机：定义是定义了，但是调用是什么时候就根据什么时候的具体情况返回值
- 作用域：就近原则
- 闭包
- 形式参数
- 返回值
- 调用栈
- 函数提升
- arguments (除了箭头函数)
- this (除了箭头函数)

### （一）调用时机

```javascript
let a = 1
function fn(){
setTimeout(()=>{
console.log(a)
},0)
}
fn()
a = 2
// 2
//过一会打印出a，过一会就是指要等所有代码执行完
```

```javascript
let i = 0
for(i = 0; i<6; i++){
setTimeout(()=>{
console.log(i)
},0)
}
//打印出6个6
//循环到每一个i都是过一会打印出i。过一会就是指要把所有循环走完。那么当循环走完，i就为6，所以要打印出6个6
```

```javascript
for(let i = 0; i<6; i++){
setTimeout(()=>{
console.log(i)
},0)
}
//打印出0、1、2、3、4、5
//为了迎合新人的思想特地做出了更新
//在JS中如果for和let一起用就会出现每次循环多创建一个i的情况
```

### （二）作用域：就近原则

1. 顶级作用域
2. 局部作用域

- 每个函数都会默认创建个局部作用域
- 在局部作用域声明的变量是局部变量

3. 全局变量

- 在顶级作用域声明的变量是全局变量
- window的属性是全局变量
- 全局变量在任何作用域存在

4. 其他都是局部变量

- 局部变量只在局部作用域里存在生存

5. 函数可以嵌套，作用域也可以嵌套!嵌套！包住的意思！
6. 如果多个作用域有同名变量a，那么查找a的声明时，就向上看取最近的包住！包住！他的作用域（自己身处的那个作用域当然是最近的，没有再向上找最近的包住！包住！他的作用域），简称「就近原则」。查找a的声明的过程（也相当于作用域的范围）与函数执行无关，但a的值与函数执行有关

7. 一个作用域与函数的执行无关叫静态作用域（词法作用域）
8. 一个作用域与函数的执行有关叫动态作用域

### （三）闭包

- 如果一个函数用到了外部的变量，那么这个函数加这个变量，就叫做闭包
- 如上图的a和f3组成了闭包

### （四）形式参数

形式参数的意思就是非实际参数。形参可认为是变量声明。形参可多可少

```javascript
function add(x, y){return x+y}
//其中X和y就是形参，因为并不是实际的参数
add(1,2)
//调用add时，1和2是实际参数，会被赋值给xy
```

### （五）返回值

1. 每个函数都会有返回值。如果没写return，返回值就是undefined
2. 函数执行完才会返回值
3. 只有函数有**返回值**（有return啊）
4. 其他的表达式都叫值，比如`1+2`的值为3

```javascript
function hi(){ console.log('hi') }
hi()  //undefined
function hi(){ return console.log('hi') }
hi()  //undefined
      //因为返回值是console.log('hi')的值，而console.log()函数的返回值都是undefined，hi只是console.log()函数的打印值
```

### （六）调用栈

#### 1、概念

（1）JS引擎在调用一个函数前，需要把函数所在的环境push到一个数组里（**压栈**），这个数组叫做调用栈
（2）JS 引擎退出一个函数之前，需要把环境从调用栈里弹出，然后回到这个弹出的环境，继续执行后续代码

#### 2、举例

```javascript
console.log(1)  //第1行
console.log('1+2的结果为' + add(1,2))   //第2行
console.log(2)   //第3行
```

#### 3、一个通俗的比喻

- 要执行一个函数必须到这个函数该去的地方执行。比如在家中的你要拉屎必须去厕所
- 但拉完屎（执行完函数），你还得回去拉屎之前呆的地方，比如客厅，比如卧室（也就是函数之前呆的环境）。
- 所以每次要去拉屎的时候，要在厕所门（调用栈）上写上“我拉完屎要回客厅”（压栈）
- 这样等你拉好屎，出来看厕所门上的记录（弹栈），你就知道要去哪去了，然后记得把这条记录划掉

#### 4、递归函数（阶乘）的调用栈

（1）阶乘函数

```javascript
function f(n){
return n !== 1 ? n* f(n-1) : 1
}
```

（2）f(4)

（3）原理

- 递归函数一般会出现自己调用自己的现象
- 递归函数一般有一个递归出口，比如 n = 1 的时候，不再调用自己
- 传递的过程其实就是压栈
- 回归的过程其实就是弹栈
- 递归几次就会压栈几次，比如f(4)要递归四次，就要压栈四次

#### 5、一个调用栈最多可以压栈几次：调用栈的长度是有限的

- Chrome 12578
- Firefox 26773
- Node 12536（Node和Chrome用的js引擎都是V8，所以差不多）
- 用下面代码可以测出调用栈的最多压栈次数

```javascript
function computeMaxCallStackSize() {
try {
return 1 + computeMaxCallStackSize();
} catch (e) {
// 报错 说明stack overflow（爆栈）了 
return 1;
} }
```

#### 6、超出最多压栈次数，就会爆栈，程序就会崩溃

### （七）函数提升

不管你把具名函数声明在哪里，他都会跑到第一行去

```javascript
add(1,2)
function add(x,y){return x+y}
//3
//因为具名函数其实会跑到第一行，所以add函数以及被定义了。所以可以执行add(1,2)
```

```javascript
let add=1
function add(x,y){return x+y}
//报错，因为具名函数其实在第一行，以及把add作为函数名了，之后let想要声明add是不行的，add已经被用了。（用var就很烦，所以不要用var）
```

```javascript
add(1,2)
let  fn = function (x,y){return x+y}
// 报错，这个不算函数提升，因为这个函数被let声明并赋值，而let不允许先使用（add（1,2））后声明
```

### （八）arguments和this

#### 1、如何查看一个函数的`this`和`arguments`

(1)首要在这个函数里面写上打印出`this`和`arguments`

```javascript
function fn(x) {
   console.log(arguments)
   console.log(this)
 }
```

(2)查看`arguments` : 调用这个函数即可，即fn()

- 可见，`arguments`是一个包含该函数所有普通参数的伪数组
- 每次调用函数时，都会对应产生一个 arguments
- 我们应该尽量不对 arguments 内的元素进行修改，修改 arguments 会让代码变得令人疑惑

(3)查看`this`

- 调用这个函数，这时`this`表示window
- 使用`fn.call(x,1,2,3)`，那么第一个参数x会传给this（而且这个参数x会被自动转化为对象），后面的参数会传给arguments
- 如果在（1）的代码中加上`'use strict'(开启严格模式)`就不会自动转化为对象了

#### 2、arguments是普通参数，this是隐藏参数

#### 3、理解的过程

代码一

```javascript
let person = {  //声明了一个变量person，并且把一个对象赋值给这个变量person，那么实际上是变量person保存了这个对象的地址
  name: 'frank',   //这个对象有个属性name，属性值为frank
  sayHi(){        
  console.log(`你好，我叫` + person.name)  //这个对象还有个函数sayHi，函数的作用是打印出你好我叫+变量person的name属性的属性值
  } }
  
  //变量person保存了一个对象的地址，所以我们可以用这个变量person获取这个对象里的属性。这是我们一直知道的。这个叫引用
  //因为我们只是定义了这个函数sayHi，但是却没有调用它，所以在定义函数satHi时可以引用还没完全声明好的person变量。因为要是调用了这个函数，那么肯定变量person也早就声明好了。
  //一个函数在调用时里面的东西必须声明好，但定义时有没有声明好不重要
```

```javascript
let person = {
name: 'frank',
sayHi(){
console.log(`你好，我叫` + this.name) } }
person.sayHi()
```

- 我们想让函数中有一个变量，这个变量指向一个将要被创建的对象，这个对象中有个属性是我们需要。也就是我们想让函数可以引用一个对象
- 当我们定义函数sayHi时，其实`this`被当做形式参数（隐形的）：`sayHi(this){}`
- `person.sayHi()`会被js引擎弄为`person.sayHi(person)`
- 所以`person`就是实际参数，`this`就是形式参数
- 所以`this.name===person.name`
- 函数中有个变量`this`，这个变量指向将要创建的对象`person`，所以我们可用`this`指代`person`，并且使用它的属性

#### 4、函数调用升级啦

##### （1）小白调用法（再也不准用）

`person.sayHi()`会自动把person作为this的实际参数传到函数里

##### （2）大师调用法

`person.sayHi.call(xxx)`

- （）中的第一个参数xxx作为形式参数this的实际参数

## 四、重新开始认识函数

### （一）函数实际定义形式

`function 函数名(隐形的this，形式参数1,形式参数2) {语句 return 返回值}`

### （二）关于`this`

- `this`是函数的隐藏参数
- 在 new Fn() 调用中，this 指向新生成的对象，这是 new 决定的

### （三）函数最正确的调用法（开发者通过call或apply显式指定的 this）

`函数名.call(xxx，实际参数1，实际参数2)`
`函数名.apply(xxx，[实际参数1，实际参数2])`

- xxx是隐藏参数this的实际参数
- 如果一个函数中没有用到this，就把xxx写为`undefined`或者`null`或者`'fuck'`，this默认指向 window，这是浏览器决定的

### （四）以前的函数调用法（JS 的隐式传 this）的本质

1. `函数名(实际参数1，实际参数2)`

- 等价于`函数名.call(undefined，实际参数1，实际参数2)`
- 函数中没有用到this,所以把xxx写为`undefined`或者`null`或者`'fuck'`，this 默认指向 window，这是浏览器决定的

2. `yyy.函数名(实际参数1，实际参数2)`

- 等价于`yyy.函数名.call(yyy，实际参数1，实际参数2)`
- this默认指向yyy

### （五）例子

我们用this写个遍历数组的forEach函数

```javascript
Array.prototype.forEach2 = function(fn){  //forEach2函数是这样的：首先他需要接受个参数：函数fn
for(let i=0;i<this.length;i++){  //之后他会遍历数组
fn(this[i], i, this)   //每次都会调用函数fn，并且把this[i], i, this三个作为fn的实际参数
} }
```

因为我们把这个forEach写入了数组的原型中，所以所有数组都可以调用该函数。

```javascript
arr = [1,2,3]
arr.forEach2.call(arr,(x,y,z)=>{console.log(x,y,z)})
//指定arr是this
arr.forEach2((x,y,z)=>{console.log(x,y,z)})
//浏览器自己认为arr是this
arr.forEach2.call({0:'bb',1:'cc',length:2},(x,y,z)=>{console.log(x,y,z)})
//指定一个伪数组是this
```

### (六)用.bind绑定函数的参数

1. 用.bind绑定函数的this

```javascript
function f1(p1, p2){
console.log(this, p1, p2)
}
let f2 = f1.bind({name:'frank'})
// 那么f2就是f1绑定了this之后的新函数 
f2() // 等价于f1.call({name:'frank'})
```

2. 用.bind绑定函数的其他参数

```javascript
let f3 = f1.bind({name:'frank'}, 'hi')
f3() // f1.call({name:'frank'}, hi)
```

## 五、箭头函数

- 箭头函数没有自己的this。箭头函数里面的this就是该函数外面的this，就算你加call都没用。 这多好啊，不用管这烦人的this了
- 箭头函数没有arguments

```javascript
console.log(this) //外面的this是window
let fn = () => console.log(this)
fn() // window
fn.call({name:'frank'}) // window
let fn1 = () => console.log(arguments)
fn3(1,2,3)
// Uncaught ReferenceError: arguments is not defined at fn1
```

## 六、立即执行函数--生成局部变量的老方法

- ES5时代，为了得到局部变量，必须引入一个函数
- 但是这个函数如果有名字，就还会引入一个全局函数，得不偿失
- 于是这个函数必须是匿名函数
- 声明匿名函数，然后立即加个()执行它
- 但是JS标准认为这种语法不合法
- 所以JS程序员寻求各种办法
- 最终发现，只要在匿名函数前面加个运算符即可
- !、~、()、+、-都可以
- 但是这里面有些运算符会往上走
- 所以推荐永远用!来解决

```javascript
//推荐！ES5老方法
!function (){
var a =2
console.log(a)
} ()
```

```javascript
//更推荐！ES6最新方法
{
    let a = 2
}
```

```javascript
//不推荐()
console.log('hi')  //如果立即执行函数前面这句代码
(function (){
var a =2
console.log(a)
} ()) //报错：console.log(...) is not a function
//因为js中回车没意义，所以把下面的立即执行函数接到前面去了，所以相当于
undefined(function (){
var a =2
console.log(a)
} ()) //把undefined当一个函数来执行了，哪来的undefined这个函数，所以报错
//补救措施
console.log('hi');  //在他俩之间加分号。注意这是js语言中唯一两句代码之间需要加分号的情况！！！
(function (){
var a =2
console.log(a)
} ())
```
