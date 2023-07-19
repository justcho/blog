
# Javascript数据类型-数组

## 一、概述

- 因为数组是一种对象，所以对象的种种东西内容数组都可以用，但是却不一定好用。
- 下面内容会比较对象的东西在数组上使用和数组自己的东西在数组上使用的区别

## 二、JS数组vs典型数组

### 1、典型数组

- 元素的数据类型相同

- 通过数字下标获取元素

- 使用连续的内存存储

### 2、JS数组是个对象



（1）下面将用`let arr = [1,obj,3]`举例
（2）JS数组是个对象！对象有属性和属性值。
（3）关于元素(item)

- 数组中的一个个元素`1`、`obj`、`3`其实是一个个属性值
- 而属性值的数据类型可以各种各样.也就是元素的数据类型多种多样，可以不相同

（4）关于下标(index)

- 下标其实是这些属性值的属性名，是一个个字符串数字。
- 比如规定了`"0"`是一个属性名，表示第一个元素`1`的下标。
- 规定`"1"`是一个属性名，在数组中规定为表示第二个元素`obj`的下标

（5）关于储存

- 因为JS数组是对象，所以JS数组在内存中储存在heap堆中，是随机储存的

（6）因为JS数组是对象，所以JS数组还可以有任何属性。

- 比如`arr['xxx']= 'yyy'`就给这个数组添加了一个属性`'xxx'`，属性值是一个字符串`'yyy'`。

## 三、数组的创建

### 1、新建数组

- 正规写法：`let 数组名 = new Array(1,2,3)`//元素为1,2,3
- 正规写法：`let 数组名 = new Array(3)`//长度为3
- 简便写法：`let 数组名 = [1,2,3]`

### 2、用字符串生成一个新数组

#### （1）字符串的一个API`split`

- `stringObject.split(separator,howmany)`
- `separator`表示选择字符串中哪个字符作为分隔
- `howmany` 可选。该参数可指定返回的数组的最大长度
- 如果把空字符串 (`""`) 用作 `separator`，那么 `stringObject` 中的每个字符之间都会被分割。
- 可以让这个字符串生成一个数组。
- 原字符串不变，只是借助这个字符串生成了一个新的对应的数组。

```javascript
let str = '1,2,3' 
str.split(',')  
//它是一个数组，选择用逗号来分隔这个字符串。数组中每个元素都是一个字符。
let str2= '123'
str.split('')
//它是一个数组，因为用空字符串来分隔这个字符串。字符和字符之间就会被空字符串分开了，这时便会成为一个数组。数组中每个元素都是一个字符。
//原字符串不变，
```

#### （2）`Array.from()`

- 可以把不是数组的东西变为数组
- 比如把字符串变成数组
- 比如把一个对象《有0、1、2这样的下标而且有`length`属性》变成数组，注意由`length`决定新数组中元素的个数。

### 3、合并两个数组得到一个新数组



- `数组1.concat(数组2)`
- 原来的两个数组不会改变，只是得到一个新数组
- 注意数组2其实也可以为一个值

### 4、截取一个数组的一部分成为一个新数组



- `数组名.slice(index)`从第index下标开始截取后面的元素为一个新数组
- `数组名.slice(0)`从第0个下标也就是第一个元素开始截取。意思就是把这整个数组复制下来成为一个新数组。
- 原数组不变

### 5、伪数组



- 真数组的第一层原型为`Array.prototype`,第二层原型为`Object.prototype`
- 伪数组的原型链中没有数组的原型`Array.prototype`，所以伪数组没有真数组该有的共有属性。
- 只是伪数组恰好有属性`'length'`和属性名`'0'`,`'1'`,`'2'`才让他看起来像真数组。
- 比如这个对象`{0:'yy',1:'18',2:3,length:3}`就是伪数组，他的原型就为`Object.prototype`
- 比如`let divList = document.querySelectorAll('div')`是个伪数组
- 可以用`Array.from()`把伪数组变为数组

## 四、数组元素的增删改查

### （一）删除元素

#### 1、不推荐方法

- `delete [index]`只会把元素变为empty，下标还在。数组长度不变。（把至少有个元素为empty的数组成为稀疏数组）
- 把`length`变短来删除元素（不要用！）

#### 2、推荐方法

- `数组名.shift()`：该数组的头部元素被删除了，并且返回被删元素
- `数组名.pop()`：该数组的尾部元素被删除了，并且返回被删元素
- `数组名.splice(index,n,x,y)`删除从index下标开始的n个元素，并且在删除位置添加x、y元素（添加几个就写几个，不添加就不写）。 以数组形式返回被删元素。原数组被改变。

### （二）查看元素

#### 1、查看所有元素（遍历数组）

##### （1）不推荐方法(更适合对象)

- `Object.keys(obj)`
- `for (let key in arr){console.log('${key}:${arr[key]}')}`

##### （2）推荐方法

###### ①用for循环遍历数组

```javascript
for(let i = 0; i < arr.length; i++){
    console.log(`${i}: ${arr[i]}`) 
}
```

你要自己让i从0增长到length-1

###### ②用数组原型上带有的`forEach`函数

- `forEach`函数作用是遍历数组，每一次都调用新写的这个函数
- 所以把这个函数写为打印出元素和下标，就可以在遍历数组的时候打印出每个元素与下标了

```javascript
arr.forEach( function(item,index){
console.log(`${index}: ${item}`)
})
```

- 理解：我们自己写个`forEach`函数才可以理解

```javascript
function forEach(array,fn){ //创建一个函数forEach，这个函数有两个参数；一个数组和一个函数fn
    for(let i = 0; i < array.length; i++){  //forEach函数的操作是让i从0循环到数组长度-1 
        fn(array[i],i,array)  //循环体为把数组的第i个元素、下标i、整个数组当做fn的参数，然后执行函数fn
    }
}
// 所以自带的forEach函数就是自带遍历数组功能for，比我们少写了一句for
```

例如

###### ③两者区别

- 当for循环中有continue或break时两者不一样
- for循环可以在某一位置终止

```
for(let i=0;i<arr.length;i++){
console.log('${i} : ${arr[i]}') 
if (i===3){break;}
}
//在i循环到3是跳出循环。也就是只打印出前四个元素就退出循环
复制代码
```

- forEach只能从头遍历到尾
- for循环是块级作用域
- forEach是函数作用域

#### 2、查看单个元素

##### （1）只可以用中括号法

`数组名['index']`或者`数组名[index]`（下标不加引号也会自动给你加上引号，属性名都会被变成字符串）

##### （2）索引（下标）越界

###### ①定义

数组索引越界是指`arr['index']`中的下标index应该取0到arr.length-1,但是如果取得下标不是这个范围，那`arr['index']`就不存在，这就叫索引越界，这时arr[index]===undefined

###### ②举例

```
for(let i=0;i<=arr.length;i++){
    console.log(arr[i].toString())
}
//报错：Cannot read property 'toString' of undefined
复制代码
```

- 理解：因为i只能取0到arr.length-1，而上面代码把i取到了arr.length，然而arr[arr.length]不存在啊。所以arr[arr.length]===undefined，所以一个undefined当然没有toString函数。只有对象才有toString函数
- 用下面代码就可以发现bug出在何处，同上理解一样。先把arr[i]打印，当arr[8]时打印出undefined，就知道bug在此处了

```
for(let i=0;i<=arr.length;i++){
    console.log(arr[i])
    console.log(arr[i].toString())
}
复制代码
```

##### （3）查找某个元素是否在数组中

`数组名.indexOf(item)`如果这个item存在于该数组中则返回下标，否则返回-1

##### （4）使用条件查找元素

`数组名.find(自写函数)`

- 我们要把这个自写函数写成每次返回布尔值。元素就是这个函数的参数
- 然后find函数会遍历数组，遍历每个元素。把元素给自写函数当参数。当有**第一个**元素在自写函数中返回了true，find函数就会返回这个元素

##### （5）使用条件查找元素下标

`数组名.findIndex(自写函数)`

- 同上，只不过返回的是元素下标
- 举例

```
arr = [12,23,12,222,45,16]
arr.find(function(x){return x%5===0})
//find函数遍历每个元素，把元素给自写函数当参数
//自写函数是以元素为参数，如果出现了一个元素是5的倍数则返回true。
//这时find函数就会返回这个元素45
arr.findIndex(function(x){return x%5===0})
//返回元素下标4
复制代码
```

### （三）增加元素

#### 1、不推荐方法

`数组名[index] = item`因为会根据下标来改变长度`length`

```
arr = [1,2,3]
arr[100] = 101
//length从3变成101,中间会自动补齐下标'3'到'99'，而这些下标对应的元素则为empty。这个数组就变成了稀疏数组了
复制代码
```

#### 2、推荐方法

##### （1）在尾部加元素

- `数组名.push(newitem)`
- `数组名.push(newitem1,newitem2)`
- 修改了该数组，并且返回新长度

##### （2）在头部加元素

- `数组名.unshift(newitem)`
- `数组名.unshift(newitem1,newitem2)`
- 修改了该数组，并且返回新长度

##### （3）在中间加元素

- `数组名.splice(index,0,'x','100',100)`
- 从index下标开始，啥也不删，再加上这个元素
- 修改了该数组，并且返回新长度

### (四)修改元素

#### 1、`数组名[index] = item`

- 注意只能修改已存在的下标。不然会改变长度搞不好变成稀疏数组

#### 2、`数组名.splice(index,n,'x','100',100)`

#### 3、反转顺序

`数组名.reverse()`

- 修改了该数组
- 可以用来把一个字符串反转顺序

```javascript
let s = 'abcde' 
s.split('')   //["a", "b", "c", "d", "e"] 把字符串分开成数组
s.split('').reverse()  //["e", "d", "c", "b", "a"] 把数组反转顺序
s.split('').reverse().join('')  //"edcba" 把数组合成字符串
```

#### 4、自定义顺序--修改了原数组（好晕，我需要多看几十遍把思路理清）

- 我们只管自己写个函数判断数组中元素a、b的大小，然后必须返回1,0,-1，不用管排序。
- sort函数会根据返回的1,0,-1来排列元素
- sort函数默认把元素从小到大排列，但是谁大谁小sort函数不知道，他必须通过我们返回的1,0,-1来判断
- sort函数认为
- 1表示最后算a大，往后排
- -1表示最后算a小，往前排
- 0表示a、b元素一样大

例1

```javascript
arr = [1,8,2,6,4]
arr.sort(function(a,b){
    if(a>b) {return 1} //a比b大，就算a大，排后面
    else if(a===b) {return 0} //a和b一样大，就算两者一样的
    else {return -1} // a比b小，就算a小，排前面
})  //[1, 2, 4, 6, 8]
//可以简写为
arr.sort((a,b)=>{return a-b})
//可以简写为
arr.sort((a,b)=> a-b) //谁大就大，谁小就小
```

例2

```javascript
arr = [1,8,2,6,4]
arr.sort(function(a,b){
    if(a>b) {return -1} //a比b大，最后就算a小,排前面
    else if(a===b) {return 0} //a和b一样大，就算两者一样的
    else return {1} // a比b小，最后就算a大，排后面
}) //[8, 6, 4, 2, 1]
//可以简写为
arr.sort((a,b)=>{return b-a})
//可以简写为
arr.sort((a,b)=>b-a)  //谁大就小，谁小就大
```

例3

```javascript
let arr= [
  {'name':'小明','score':99},
  {'name':'小百','score':76},
  {'name':'小旅','score':82}
]
//我们想根据成绩排名
arr.sort(function(a,b){
    if(a.score>b.score){return -1}  //a的分数比b的分数大，最后就算a小，排前面
     else if(a.score===b.score) {return 0} //a的分数和b的分数一样大，就算两者一样的
    else {return 1} // a的分数比b的分数小，最后就算a大，排后面
})
/* 0: {name: "小明", score: 99}
   1: {name: "小旅", score: 82}
   2: {name: "小百", score: 76}  */
//可以简写为
arr.sort((a,b)=>{return b.score-a.score})
//可以简写为
arr.sort((a,b)=>b.score-a.score)  //谁大就小，谁小就大
```

sort函数规定了

- 我得到正数，说明a大，往后排
- 我得到负数，说明a小，往前排
- 我得到0，说明一样大

我们呢

- 为了让谁大就是真大，然后就可以排在后面，那就a-b
- 为了让谁大其实是小，然后就可以排在前面，那就b-a
- b-a为正数，b大，但是sort认为a大，b小
- b-a为负数，b小，但是sort认为b大，a小

## 五、数组变换:返回新数组，元素组不变

### （一）map：n变n，一一映射

1. map是数组的一个API
2. map(fn)是个函数，它的参数是一个我们自己写的函数fn（和自身数组），他会遍历数组中每个元素，把元素给fn当实际参数。最后返回新数组
3. 注意fn以元素为实际参数，返回对元素的某种操作，然后filter会把《fn返回的东西》组成一个新数组

```javascript
//把数组中每个元素都变成平方，组成一个新数组
arr=[1,2,3]
//方法一：可以用for循环实现,但是麻烦不要
for(let i =0;i<arr.length;i++){
    arr[i]=arr[i]*arr[i]
}//不对啊，这样写得不到新数组，而是修改了元素组
arr1 = []
for(let i =0;i<arr.length;i++){
    arr1.push(arr[i]*arr[i])
}
arr1 //[1, 4, 9]
//方法二：用map，一句搞定
arr.map(item=>{return item*item}) //[1, 4, 9]
//方法三：用reduce，那map就可以再见了
//结果会是个数组，那结果的初始值为一个空数组
//我们想把元素的平方和结果（数组）相连得到新结果（数组）
arr.reduce((result,item)=>{return result.concat(item*item) },[])   //[1, 4, 9]
```

```javascript
把arr变成对应的星期
let arr = [0,1,2,2,3,3,3,4,4,4,4,6]
let arr2 = arr.map((item)=>{
  let week =['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  return week[item]
})
console.log(arr2) // ['周日', '周一', '周二', '周二', '周三', '周三', '周三', '周四', '周四', '周四', '周四','周六']
let arr = [0,1,2,2,3,3,3,4,4,4,4,6]
let arr2 = arr.map((i)=>{
  return {0:'周日',1:'周一',2:'周二',3:'周三',4:'周四',5:'周五',6:'周六'}[i]
})
console.log(arr2)
```

### （二）filter：n变少

1. filter是数组的一个API
2. filter(fn)是个函数，它的参数是一个我们自己写的函数fn（和自身数组），他会遍历数组中每个元素，把元素给fn当实际参数。
3. 注意fn以元素为实际参数，需要返回布尔值，然后filter会把《fn中返回true的元素》组成一个新数组

```javascript
//把原数组中的偶数元素组成新数组
arr = [1,2,3,4,5,6]
//方法一：用filter
arr.filter(item => item % 2===0)  //[2, 4, 6]
//方法二：用reduce，那filter就可以再见了
arr.reduce((result,item)=>{  
    if(item%2===1){return result} //如果元素是奇数，新结果为原来的结果
    else{ return result.concat(item)}   //如果元素是偶数，新结果为原来的结果连上该元素
},[])  //结果的初始值为空数组
//[2, 4, 6]
//方法二代码优化
arr.reduce((result,item)=>{  
     return item%2===1? result :result.concat(item)
},[])
//方法二再代码优化
arr.reduce((result,item)=>{  
   return result.concat(item%2===1?[]:item)
},[])
```

```javascript
let arr = [0,1,2,2,3,3,3,4,4,4,4,6]
let arr2 = arr.map(item=>{
if(item===0){return item="周日"}
else if(item===1){return item="周一"}
  else if(item===2){return item="周二"}
  else if(item===3){return item="周三"}
  else if(item===4){return item="周四"}
  else{return item="周六"}
})
console.log(arr2) // ['周日', '周一', '周二', '周二', '周三', '周三', '周三', '周四', '周四', '周四', '周四','周六']
```

### （三）reduce：n变1，功能最强大



1. `reduce（函数，结果的初始值）`，还有个隐藏参数就是自身数组，他会遍历数组中每个元素。每次都执行函数
2. 函数以结果和元素为参数，我们想把元素如何作用于结果，然后会返回一个新结果。新结果再参与下次循环
3. 最终reduce函数的返回一个最新的结果

```javascript
对数组中所有元素求和
arr=[1,2,3,4,5,6]
//方法一：用for循环
sum = 0  //结果是个数字，初始值为0
for(var i =0;i<arr.length;i++){
   sum = sum+arr[i]    //我们想结果+元素得到新结果
}
sum //27
//方法二：用filter
arr.reduce((sum,item)=>{return sum+item},0)
```

```javascript
求奇数之和
let scores = [95,91,59,55,42,82,72,85,67,66,55,91]
let sum = scores.reduce((sum, n)=> n%2===0?sum:sum+n,0)
```

题目

```javascript
//题目
let arr = [
{名称:'动物', id: 1, parent: null},
{名称:'狗', id: 2, parent: 1}, 
{名称:'猫', id: 3, parent: 1}
]
      //把数组变成对象
{
id: 1, 名称:'动物', children: [
{id: 2, 名称:'狗', children: null},
{id: 3, 名称:'猫', children: null},
] }
//解答
arr.reduce(
  (result,item)=>{
    if(item.parent===null){      //通过元素的parent属性把元素分成两类
      result.id=item.id 
      result['名称']=item['名称']
      }
    else{
      delete item.parent
      item['children']=null
      result.children.push(item) //往children的数组里面推送元素
      }
    return result
    }
,{children:[]})  //结果的初始值是一个对象，对象中有个属性children，属性值是个空数组
```
