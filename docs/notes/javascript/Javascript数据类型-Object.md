
# Object

## 一、定义

对象就是一组“键值对”（key-value）的集合, 是一种无序的复合数据集合。

## 二、写法

1. 正规写法：

```javascript
let 对象名 = new 0bject({'name': 'just'})
```

2. 简便写法：

```javascript
let 对象名 = { 'name': 'just', 'age':18 }
```

3. 匿名写法：

```javascript
console.log({ 'name': 'just', 'age':18 })
```

细节

- 键名是**字符串**！
- 加了引号的键名可以包含任意字符，比如空格、以数字开头
- 没加引号的键名按照标识符规则写。标识符是不能用数字开头的
- **就算引号省略了，键名也还是字符串**

## 三、对象的属性

### 1、属性名：每个key都是对象的属性名（property）

- 所有属性名都会自动变成字符串！
- 加了引号的已经是字符串了，就不会改变了
- 没加引号的会把你变成字符串
- 比如一个十六进制数0xFF做键名，还没加引号，就会自动变成255，并且加上引号
- `Object.keys(obj)`可以打印出obj这个对象的键名也就是属性名!
- 如果想用一个变量的值做属性名

```javascript
let a = 'xxx'
var obj = {a:'1111'}
```

上面代码中对象obj里的属性名是一个字符串a，就算不写引号还是字符串a啊，和前面声明的变量a无任何关系。

但是如果想用a变量的值做属性名，那键名应写成`[a]`即可. 而且a变量的值不是字符串，也会自动变成字符串

```javascript
var obj = {[a]:'1111'}
```

这其实是下列代码的合写形式

```javascript
let a = 'xxx'
var obj = {}
obj[a] = '1111'
```

- 超纲知识：除了字符串， symbol也能做属性名,在学习「迭代」时会用到。其实压根不用

```
let a = Symbol()
let obj = { [a]: 'Hello' }
```

### 2、属性值

每个value都是对象的属性值

### 3、对象的隐藏属性

- JS中每个对象都有一个隐藏属性`_ _proto_ _`
- 这个隐藏属性储存着其共有属性组成的对象的地址
- 这个由共有属性组成的对象`window.Object.prototype`叫做原型，也称为对象的根
- 也就是说，每个object对象的隐藏属性`_ _proto_ _`储存着原型`window.Object.prototype`的地址
- 每个对象都有原型
- 原型也是个对象，所以也有原型，这不过原型的原型为null（空，但是是存在的）

代码示例

```javascript
var obj= {}
obj.toString() //居然不报错
```

因为obj的隐藏属性对应的对象上有toString()

## 四、对象属性的增删改查

### （一）删除属性



1. `delete obj.xxx`或`delete obj['xxx']`：即可删除obj的XXX属性，此时属性值当然也没有了

2. 注意比较区别：`obj.xxx = undifined`xxx属性名还在，只是属性值变为undifined空

3. 举例

- 例1

注：只能用`'xxx' in obj` **查看属性名**是否还在对象中：true表示在，false表示不在

- 例2

注：
①语句`'xxx' in obj && obj.xxx === undefined`返回true，表示属性xxx还在obj中，而且**属性xxx的值**是undefined
②注意`obj.xxx === undefined`不能断定'xxx' 是否为obj的属性。证明如下

③只能用`'xxx' in obj` **查看属性名**是否还在对象中：true表示在，false表示不在

### （二）读属性



#### 1、查看一个对象的所有属性

1. 查看一个对象的所有自身属性: `Object.keys(obj)`

2. 查看一个对象的所有自身属性值： `Object.values(obj)`

3. 查看一个对象的所有自身的属性和值：直接对象名就行`obj`或者`Object.entries(obj)`

4. 查看自身+共有属性: `console.dir(obj)`

5. 查看共有属性: 自己依次用`Object.keys`打印出`obj.__ proto_`

6. 判断一个属性是自身的还是共有的: `obj.hasOwnProperty('属性名')`

返回true说明该属性是自身属性，返回false说明该属性是共有属性

7. `'key' in obj`查看属性名是否还在对象中：true表示在，false表示不在

#### 2、查看一个对象的一个属性

①中括号语法: `obj['key']`或`obj['k'+'ey']`
②点语法: `obj.key`(与①等价)
③注：`obj[key]`只能在提前声明key是个变量，我们是想把这个变量的值作为属性名的时候用！！！
④举例

```javascript
var a = 'xxx'
var obj = { [a] : '1111','name' : 'wawa'}
obj['name']===obj.name
obj[a]===obj['xxx']
```

⑤练习

```javascript
let list = ['name','age','gender']
let person = {
    name: 'yy', age : 18, gender : 'woman'
}
for (let i = 0; i < list.length; i++) {
    let name = list [i]
    console.log(person.name)  //重点
}
/// 结果为person的第一个属性值yy*3
```

```javascript
let list = ['name','age','gender']
let person = {
    name: 'yy', age : 18, gender : 'woman'
}
for (let i = 0; i < list.length; i++) {
    let name = list [i]
    console.log(person[name]) //重点
}
// 结果为person的所有属性值yy、18、woman
```

### （三）修改或增加属性



#### 1、自身属性

##### （1）直接赋值

①`let obj = {name:'frank'}`
②`obj.key = 'xxx'`
③`obj['key'] ='xxx'`
④`obj['k'+'ey'] ='xxx'`
⑤`let key = 'name'; obj[key] = 'yy'`

##### （2）批量赋值

`Object.assign(obj, {age: 18, gender: 'man'})`

#### 2、修改或增加共有属性

##### （1）一个对象

- 在一个对象中，它的原型中的共有属性只可用来读，无法修改
- 要是在一个对象中修改了共有属性，那么其实这个被修改了的共有属性直接放在obj自身里面，不会存入原型
- 例子（**不推荐**）：一个一个共有属性的改!
- 例子（**不推荐**）:直接把这个对象里存了原型地址的隐藏属性重新赋值为新原型的地址。**原型链**起来了

```
let obj = {name:'frank'}
let newproto = {'国籍' ：'中国'} //创建一个新对象，它将成为obj的新原型，当然因为是个对象，它里面还有个隐藏属性__proto__
obj.__proto__ = newproto //把新原型赋值给旧原型
```

- 例子:直接以新原型为原型创建一个对象。**推荐，一开始就改好！**

```
let obj2 = Object.create(newproto) //现在该对象没有啥自身属性，自己继续加呗
```

##### （2）原型

- 其实我们可以直接修改原型里的属性，不要做！`window.Object.prototype.toString= 'xxx'`

## 五、对象有很多类

### （一） 第一类：函数（对象）



#### 1. 函数的定义方式

##### （1）正规写法：`let f1 = new Function('x','y','return x+y')`(name:anonymous)

函数是个对象，对象都是由构造函数构造出来的。所以从上式可以发现任何一个函数都是由“爸爸构造函数”Function函数构造出来的。构造函数这个对象的构造函数是“爸爸构造函数”Function函数

##### （2）具名函数：`function add(x,y) {return x+y}`（name：add）

##### （3）匿名函数：`let f1 = function(x,y){return x+y}`(name:f1)

把具名函数的函数名去掉就是匿名函数，也叫函数表达式，是等号右边这一部分。因为没有名字，所以必须给这个函数表达式挂在一个名字f1上。

##### （4）简便写法：`let f1 = (x,y) => x+y`（name：f1）

#### 2. “爸爸构造函数”Function()函数构造出来的函数共分为两种:构造函数和普通函数

##### （1） 构造函数

①是指可以创建出一个对象的函数。
②比如Function()函数就是一个构造函数，他用于构造任何函数（函数也是对象呀）。我把它称为“爸爸构造函数”
③“爸爸构造函数”Function()函数又构造出了其他构造函数
④ 比如`let Array = new Function(........)`

- 这是用于构造数组对象的Array()函数

⑤比如`let Object = new Function(........)`

- 用于构造普通对象的Object()函数

⑥比如`let Square = new Function('width','return this.width=width')`或者`function Square(width){this.width=width}`

- 我们在例子中写的用于构造方块对象的Square()函数

⑦构造函数构造出来的对象，首字母要小写。比如一个数组对象`array1` = new  Array(1,2,3)，比如一个普通对象`obj1` = new Object(),比如一个方块对象`square1` = new Square()

##### （2） 普通函数

- “爸爸构造函数”Function()函数也构造出普通函数
- 比如`let add = new Function('x','y','return x+y')`就是构造出了一个普通函数对象

#### 3、属性

##### （1）自身属性

- 'name'
- 'length'

##### （2）共有属性

- 'call'
- 'apply'
- 'bind'

### （二） 第二类：普通对象

#### 定义方式

- 正规写法：`let 对象名 = new 0bject({'name': 'frank'})`
- 简便写法：`let 对象名 = { 'name': 'frank', 'age':18 }`
- 匿名写法：`console.log({ 'name': 'frank', 'age':18 })`

### （三） 第三类：数组对象



#### 1. 定义方式

- 正规写法：`let 数组名 = new Array(1,2,3)`//元素为1,2,3
- 正规写法：`let 数组名 = new Array(3)`//长度为3
- 简便写法：`let arr = [1,2,3]`

#### 2. 属性

##### （1）自身属性

- '0'
- '1'
- '2'
- 'length'

##### （2）共有属性(MDN自己去查用法)

- 'push'
- 'pop'
- 'shift'
- 'unshift'
- 'join'

## 六、window

1. 浏览器提供window，很多东西挂在了window上

2. window变量是一个容器，用来存放window对象的地址

3. window对象存在Heap堆。

4. window对象里有很多个属性，比如

- 属性console指向一个对象；
- 属性Object指向一个对象，这个对象就是Object构造函数，着重学习这个对象的`prototype`属性，它指向所有object对象的原型
- 属性Array指向一个对象，这个对象就是Array构造函数，着重学习这个对象的`prototype`属性，它指向所有数组对象的原型

5. window是个对象，他是由Window函数构造的

## 七、用构造函数+原型来构造对象

### 1、创建一个构造函数的全过程（记得还有notability笔记：构造函数new）



```javascript
let Dog = new Function('width','return this.name=name')
 //我们要用“爸爸构造函数”window.Function写一个构造函数Dog(),我们需要写入一个参数name，之后会把这个name赋值给this的name属性（this用来指代我们将要创建的新对象。），写在这里面的属性都算是自身属性。
Dog.prototype.wangwang = function(){console.log('狗在汪汪叫')}//因为Dog是个函数所以是个对象，所以有prototype属性。现在往prototype属性里面新加一个属性wangwang，这个wangwang属性的值是一个可以打印出“狗在汪汪叫”的函数。写在这里的属性都将是以后创建对象的共有属性。
Dog.prototype.run = function(){console.log('狗在跑')}//同上
let dog1 = new Dog('小兵')
```

当我们使用`new Dog('小兵')`是，其实干了四件事
①自动创建一个空对象
②自动将该空对象的原型指向 X.prototype（即将 `X.prototype` 保存的地址复制到`空对象.__proto__`里）这时空对象就有了共有属性
③自动将空对象作为this关键字运行构造函数。这时空对象就有了自身属性
④自动return this，返回我们创建好了的对象。命名为dog1。

### 2、同理



Object函数、Array函数全都如同上面。只不过他们在js创建时已经写好啦。

### 3、原型的理解`新生对象.__proto__ === 构造函数.prototype`



1. 每个对象出生就有`prototype`属性和`__proto__`隐藏属性。

2. 我们只研究构造函数（大写字母开头）的`prototype`属性和新生对象（小写字母开头）的`_ _proto_ _`属性

3. 构造函数X因为是个对象，所以有prototype属性。这个prototype属性保存了一个对象的地址，这个对象就称为原型！原型里保存了所有x对象的共有属性

4. 被构造函数X构造出来的x对象，他有一个隐藏属性`__proto__`因为和`X.prototype`属性一样保存了相同的地址，所以也指向原型。这样x对象也就可以使用这些共有属性啦。

5. 所有x对象的原型`x.__proto__ === X.prototype`

6. 原型让你无需重复声明共有属性，省代码，省内存

7. `prototype`和`__proto__`都存着原型的地址，只不过就当做`prototype`挂在构造函数上， `__proto__`挂在每个新生成的对象上。

8. 原型的地址被保存在新生对象的`__proto__`属性，也被保存在相应构造函数的`prototype`属性

### 4、Object构造函数



- 构造函数`Object`函数的`prototype`属性指向所有object对象的原型

- 由`Object`函数构造出来的所有对象的`__proto__`属性也指向这个原型

- 所有object对象的原型：`obj.__proto__ === Object.prototype`

- **`Object.prototype` 是所有对象的原型!!**（除了它自己），但 `Object.prototype` 有可能不是第一层原型，而是第二层原型，比如 `arr` 的第一层原型是 `Array.prototype`，第二层原型才是 `Object.prototye`.比如构造函数Array的一层原型是`Fuction.prototype`,第二层原型是`Object.prototye`。**这就是原型链！！**，看下图

- `Object` 的原型是指 `Object.__proto__===Function.prototype`，不是 `Object.prototype`，因为 `Object.prototye` 是 `Object` 构造出来的对象的原型

### 5、Array构造函数



- 构造函数Array函数的`prototype`属性指向所有数组对象的原型
- 由Array函数构造出来的所有数组对象的`__proto__`属性也指向这个原型
- `array1.__proto__ === Array.prototype`
- 注意：第一层原型是 `Array.prototype`，第二层原型是 `Object.prototye`！
- `array1.__proto__.__proto__ === Object.prototype`

## 6、`prototype`属性里还有个`constructor`属性，表示构造者是哪个构造函数



①新生对象的构造者是他的构造函数

- 比如数组对象array1的构造者是Array构造函数

②所有函数的构造者都是“爸爸构造函数”window.Function

- 比如Array构造函数的构造者是“爸爸构造函数”window.Function

- 比如“爸爸构造函数”window.Function因为是个函数，所以他也是由“爸爸构造函数”window.Function构造的。
- 自己构造了自己，为什么呢？其实是浏览器构造了“爸爸构造函数”window.Function，只不过浏览器把“爸爸构造函数”window.Function的构造者指定为他自身“爸爸构造函数”window.Function。我笑了。
③window是个对象，他是由Window函数构造的（**不要深究了**）

### 7、一些问题



1. Object.prototype是所有对象的原型，也是个对象
2. 那他是由哪个构造函数构造出来的？不知道！
3. 那他的原型是什么？null!空！就是这样指定的！

### 8、原型的具体分析



关于原型请看我知乎的文章：[原型](https://zhuanlan.zhihu.com/p/119528167)

## 八、为什么对象要有这么多类

理由一

- 有很多对象拥有一样的属性和行为，需要把它们分为同一类
- 如array1和array2
- 这样创建类似对象的时候就很方便

理由二

- 但是还有很多对象拥有其他的属性和行为，所以就需要不同的分类
- 比如Array / Function是不同的分类
- 而Object创建出来的对象，是最没有特点的对象

## 九、所以原型就是来给对象分类的

## 十、用class来构造对象

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
  wangwang() {
  console.log('狗在汪汪叫')
  }
  run() {
  console.log('狗在跑')
  }
}
```
