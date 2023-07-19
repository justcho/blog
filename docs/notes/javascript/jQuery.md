
# jQuery

## jQuery 如何获取元素

```javascript
window.jQuery = function(selector) {
  const elements = document.querySelectorAll(selector);
  return {
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className);
      }
      return this;
    }
  }
}
```

①`jQuery(选择器)`用于获取对应的元素

- 但它却不返回这些元素
- 相反，它返回一个对象，称为jQuery构造出来的对象(简称jQuery对象)
- 这个对象可以操作对应的元素

```javascript
jQuery(.test) 返回 当前的JQuery对象
jQuery(.test).addClass('yy') 操作：给所有.test元素加上class：yy
                             返回：this===jQuery(.test) ----当前的JQuery对象
jQuery(.test).addClass('yy').addClass('bb') 操作：给所有.test元素加上class：bb
                                            返回：this===jQuery(.test).addClass('yy') ----当前的JQuery对象
```

②`jQuery`是一个不需要加`new`的构造函数。

- `jQuery()`能构造一个对象，而且不用加`new`
- `jQuery`不是常规意义上的构造函数，这是因为`jQuery`用了一些技巧(目前没必要知道)

③`window.$ = window.jQuery`以后用`$()`就行
④用`$`开头的名字给JQuery对象命名！`const $div=jQuery(.test)`易于和普通DOM标签区分！

## jQuery 的链式操作是怎样的

```javascript
window.jQuery = function(selectorOrArray) {
  let elements;
  if (typeof selectorOrArray === "string") {
    elements = document.querySelectorAll(selectorOrArray);
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray;
  }
  return {
    oldApi: selectorOrArray.oldApi, //给JQuery对象加一个属性，值为selectorOrArray的oldApi属性
    find(selector) {
      let array = [];
      for (let i = 0; i < elements.length; i++) {
        array = array.concat(
          Array.from(elements[i].querySelectorAll(selector))
        );
      }
      array.oldApi = this; //先把当前的jQuery对象放到即将要成为新的elements的数组中去，成为一个oldApi属性
      return jQuery(array); //在返回 新建的 数组的jQuery对象
    },
    end() {
      return this.oldApi;
    }, //this为数组的JQuery对象了，他有个oldApi属性，属性值为selectorOrArray（也就是数组）的属性oldApi
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className);
      }
      return this;
    }
  }
}
//返回
api1=jQuery('.test')
api2=jQuery('.test').find('.children')
api2.end()//返回this的oldApi。
          //this===api2===当前的JQuery对象。
          //oldApi:selectorOrArray.oldApi=array.oldApi=(当时的this)=（当时的JQuery对象api2）
```

## jQuery 常用API

**创建**

```javascript
window.jQuery = function () {  
    console.log('我是jQuery')
```

①查

```javascript
jQuery('#xxx)返回值并不是元素，而是一个api对象
jQuery(" #xxx').find('.red')查找#xxx里的.red元素
jQuery('#xxx').parent()获取爸爸
jQuery('#xxx").children()获取儿子
jQuery(' #xxx' ).siblings()获取兄弟
jQuery(' #xxx ).index() 获取排行老几(从0开始)
jQuery(" #xxx' ).next()获取弟弟
jQuery(' #xxx ).prev()获取哥哥
jQuery(.red').each(fn)遍历并对每个元素执行fn
jQuery('#xxx).get(index)获取elements的下标为index的元素
```

②增

```javascript
$('<div><span> 1</span></div> ).appendTo(...)把这串HTML加入...中
$('body')获取document.body
$('body').append(div>l</div>) 添加小儿子
$('body ).append('<div>1</div>)更方便
$(' body ).prepend(div或$div)添加大儿子
$('#test').after(div或$div)添个弟弟
$('#test').before(div或$div)添个哥哥
```

③删

```javascript
$div.remove()
$div.empty()删子元素
```

④改

```javascript
$div.text(?)读写文本内容
$div.html(?)读写HTML内容
$div.attr('title',?)读写属性
$div.css({color: 'red'})读写style // $div.style更好
$div.addClass('blue') / removeClass / hasClass
$div.on('click', fn)
$div.off('click, fn)
```

- **使用原型优化代码，节约内存：[源码](https://link.zhihu.com/?target=https%3A//github.com/FrankFang/dom-2-prototype/blob/master/src/jquery.js)**

```javascript
window.$=window.jQuery = function(selectorOrArrayOrtemplat) {  //jQuery太长，用$代替
  let elements;
  if (typeof selectorOrArray === "string") {
    elements = document.querySelectorAll(selectorOrArray);
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray;
  }
  //加入共有属性
  const api = Object.create(jQuery.prototype); //创建个名为api的对象，这个对象的__proto__为jQuery.prototype
                                               //相当于const api = {__proto__:jQuery.prototype}
  //加入自身属性
  /*小白写法
  api.elements = elements;
  api.oldApi = selectorOrArray.oldApi;
  */
  //大师写法：Object.assign()表示把后面这些属性一个一个的加入api对象
  Object.assign(api, {
    elements = elements,
    oldApi = selectorOrArray.oldApi
  })
  return api;
};
jQuery.fn = jQuery.prototype = {  //prototype太长，用fn代替
  //共有属性
  constructor: jQuery, //必须得要，这是规定
  oldApi: selectorOrArray.oldApi,
  jquery: true,
  get(index){
      return this.elements[index];
  }
  find(selector) {},
  end() {},
  addClass(className) {},
  each(fn) {},
  parent() {},
  children() {},
  siblings() {},
  index() {},
  next() {},
  prev() {}
};
```

- **设计模式**

不用new的构造函数，这个模式没有专门的名字
`$(支持多种参数)`，这个模式叫做重载(一个函数支持的参数多种多样)
用闭包隐藏细节，这个模式没有专门的名字（生成一个变量一个函数去读这个变量）
`$div.text()`即可读也可写，getter / setter
`$.fn``是$.prototype`的别名，这叫别名
jQuery针对不同浏览器使用不同代码，这叫适配器模式

**_参考：_**
**_[阮一峰](https://link.zhihu.com/?target=http%3A//www.ruanyifeng.com/blog/2011/07/jquery_fundamentals.html)_**
**_[jQuery API 中文文档](https://link.zhihu.com/?target=https%3A//www.jquery123.com/)_**
