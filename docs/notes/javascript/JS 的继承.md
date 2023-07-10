---
prev: false
next: false
---
# JS 的继承

## 基于原型的继承

```javascript
function DOG(name){

　　　　this.name = name;

　　}

　　DOG.prototype = { species : '犬科' };


　　var dogA = new DOG('大毛');

　　var dogB = new DOG('二毛');


　　alert(dogA.species); // 犬科

　　alert(dogB.species); // 犬科
```

species属性放在prototype对象里，是两个实例对象共享的。只要修改了prototype对象，就会同时影响到两个实例对象。

```javascript
DOG.prototype.species = '猫科';


　　alert(dogA.species); // 猫科

　　alert(dogB.species); // 猫科
```

由于所有的实例对象共享同一个prototype对象，那么从外界看起来，prototype对象就好像是实例对象的原型，而实例对象则好像"继承"了prototype对象一样。
这就是Javascript继承机制基于原型的继承。

```javascript
function Parent(name1){
  this.name1 = name1
}
Parent.prototype.pMethod = function(){
  console.log(this.name1)
}

function Child(name2, name1){
    Parent.call(this, name1) // 得分点
    this.name2 = name2
}
Child.prototype.__proto__ = Parent.prototype 
//上面这句代码的古板写法应该是下面三句
//const empty = function(){}
//empty.prototype = Parent.prototype
//Child.prototype = new empty()


Child.prototype.cMethod = function(){
    console.log(this.name2)
}

```

## 基于 class 的继承

新的关键字class从ES6开始正式被引入到JavaScript中。class的目的就是让定义类更简单。
我们先回顾用函数实现`Student`的方法:

```javascript
function Student(name) {
    this.name = name;
}

Student.prototype.hello = function () {
    alert('Hello,' + this.name + '!');
}
```

如果用新的`class`关键字来编写`Student`，可以这样写：

```javascript
class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('Hello, ' + this.name + '!');
    }
}
```

比较一下就可以发现，`class`的定义包含了构造函数`constructor`和定义在原型对象上的函数`hello()`（注意没有`function`关键字），这样就避免了`Student.prototype.hello = function () {...}`这样分散的代码。
最后，创建一个`Student`对象代码：

```javascript
var xiaoming = new Student('小明');
xiaoming.hello()
```

### class继承

用`class`定义对象的另一个巨大的好处是继承更方便了。想一想我们从`Student`派生一个`PrimaryStudent`需要编写的代码量。现在，原型继承的中间对象，原型对象的构造函数等等都不需要考虑了，直接通过`extends`来实现：

```javascript
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}
```

注意`PrimaryStudent`的定义也是class关键字实现的，而`extends`则表示原型链对象来自`Student`。子类的构造函数可能会与父类不太相同，例如，`PrimaryStudent`需要`name`和`grade`两个参数，并且需要通过`super(name)`来调用父类的构造函数，否则父类的`name`属性无法正常初始化。
`PrimaryStudent`已经自动获得了父类`Student`的`hello`方法，我们又在子类中定义了新的`myGrade`方法。
ES6引入的`class`和原有的JavaScript原型继承有什么区别呢？实际上它们没有任何区别，`class`的作用就是让JavaScript引擎去实现原来需要我们自己编写的原型链代码。简而言之，用`class`的好处就是极大地简化了原型链代码。

```javascript
class Parent{
    constructor(name1){
        this.name1 = name1
    }
    pMethod(){
        console.log(this.name1)
    }
}
class Child extends Parent{
    constructor(name2, name1){
        super(name1) // 得分点
        this.name2 = name2
    }
    cMethod(){
        console.log(this.name2)
    }
}
```
