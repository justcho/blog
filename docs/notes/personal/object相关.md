# object相关

## 提取对象属性

```javascript
const location = (({lat, lng}) => ({lat, lng}))(roadlawDetails)
console.log(location)
// Object
lat: 37.87059
lng: 113.041278
```

## 对象的值转换数组 取值

```javascript
const object = {
  a: 'somestring',
  b: 42
};
// 返回 键值对数组
Object.entries(object)

let map = new Map(Object.entries(object))
console.log(map)
// 打印 出来的值 把 value 和 key 提取出来 的数组 
0:{"a" => "somestring"}
1:{"b" => 42}
// 迭代map
map.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
```

## JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串

```javascript
if (JSON.stringify(data) === '{}') {
    return false // 如果为空,返回false
}
return true // 如果不为空，则会执行到这一步，返回true
```
