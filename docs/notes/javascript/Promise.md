---
prev: false
next: false
---
# Promise

## 用途

- 规范回调的名字或顺序
- 拒绝回调地狱，让代码可读性更强
- 很方便的捕获错误

## 如何创建一个 new Promise

```javascript
return new Promise(
(resolve,reject)=>{
}
)
```

- 其他内容全放在{}里
- 异步任务成功就是调用resolve回调函数（以结果为参数），失败就是调用reject回调函数（以结果为参数）

## 如何使用 Promise.prototype.then

Promise 实例的then方法，用来添加回调函数。
then方法可以接受两个回调函数，第一个是异步操作成功时（变为fulfilled状态）时的回调函数，第二个是异步操作失败（变为rejected）时的回调函数（该参数可以省略）。一旦状态改变，就调用相应的回调函数。

```javascript
var p1 = new Promise(function (resolve, reject) {
  resolve('成功');
});
p1.then(console.log, console.error);
// "成功"

var p2 = new Promise(function (resolve, reject) {
  reject(new Error('失败'));
});
p2.then(console.log, console.error);
// Error: 失败
```

`then`方法可以链式使用。

```javascript
p1
  .then(step1)
  .then(step2)
  .then(step3)
  .then(
    console.log,
    console.error
  );
```

上面代码中，`p1`后面有四个`then`，意味依次有四个回调函数。只要前一步的状态变为`fulfilled`，就会依次执行紧跟在后面的回调函数。
最后一个`then`方法，回调函数是`console.log`和`console.error`，用法上有一点重要的区别。`console.log`只显示`step3`的返回值，而`console.error`可以显示`p1`、`step1`、`step2`、`step3`之中任意一个发生的错误。举例来说，如果`step1`的状态变为`rejected`，那么`step2`和`step3`都不会执行了（因为它们是`resolved`的回调函数）。Promise 开始寻找，接下来第一个为`rejected`的回调函数，在上面代码中是`console.error`。这就是说，Promise 对象的报错具有传递性。
Promise 的用法，简单说就是一句话：使用`then`方法添加回调函数。

## 如何使用 Promise.all

`**Promise.all(iterable)**` 方法返回一个 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 实例，此实例在 `iterable` 参数内所有的 `promise` 都“完成（resolved）”或参数中不包含 `promise` 时回调完成（resolve）；如果参数中  `promise` 有一个失败（rejected），此实例回调失败（reject），失败的原因是第一个失败 `promise` 的结果。
它通常在启动多个异步任务并发运行并为其结果创建承诺之后使用，以便人们可以等待所有任务完成。

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
```

## 如何使用 Promise.race

**`Promise.race(iterable)`**方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。

```javascript
Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"

```

要点0：
Promise 用于避免回调地域，让代码看起来更同步
要点1：

```javascript
function fn(){
    return new Promise((resolve, reject)=>{
        成功时调用 resolve(data)
        失败时调用 reject(reason)
    })
}
```

要点2：
const promise1 = fn() // 得到 promise1 对象
fn().then(success, fail).then(success2, fail2).catch(fail3)
或者
promise1.then(success, fail).then(success2, fail2).catch(fail3)
均可
要点3：
Promise.all([promise1, promise2]) 并行，等待所有 promise 成功。
如果都成功了，则 all 对应的 promise 也成功；如果有一个失败了，则 all 对应的 promise 失败。
要点4：
Promise.race([promise1, promise2])，返回一个 promise，一旦数组中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。

## 案例

### Promise 用法

```javascript
function fn(){
     return new Promise((resolve, reject)=>{
         成功时调用 resolve(数据)
         失败时调用 reject(错误)
     })
 }
 fn().then(success, fail).then(success2, fail2)
```

### Promise.all 用法

```javascript
Promise.all([promise1, promise2]).then(success1, fail1)
```

promise1和promise2都成功才会调用success1

### Promise.race 用法

```javascript
Promise.race([promise1, promise2]).then(success1, fail1)
```

promise1和promise2只要有一个成功就会调用success1；
promise1和promise2只要有一个失败就会调用fail1；
总之，谁第一个成功或失败，就认为是race的成功或失败
