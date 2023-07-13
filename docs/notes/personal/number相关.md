# number相关

## js保留两位小数方法总结

### 四舍五入的情况

```javascript
var num =2.446242342;
num = num.toFixed(2); // 输出结果为 2.45
```

### 不四舍五入

#### 第一种 小数变整数

```javascript
Math.floor(15.7784514000 * 100) / 100 // 输出结果为 15.77
```

#### 第二种 当作字符串 用正则匹配 注：如果是负数，请先转换为正数再计算，最后转回负数

```javascript
Number(15.7784514000.toString().match(/^\d+(?:\.\d{0,2})?/)) // 输出结果为 15.77,不能用于整数如 10 必须写为10.0000
```

#### 经典方法

```javascript
//四舍五入保留2位小数（若第二位小数为0，则保留一位小数）
function keepTwoDecimal(num) {
 var result = parseFloat(num);
 if (isNaN(result)) {
 alert('传递参数错误，请检查！');
 return false;
 }
 result = Math.round(num * 100) / 100;
 return result;
}
//四舍五入保留2位小数（不够位数，则用0替补）
function keepTwoDecimalFull(num) {
 var result = parseFloat(num);
 if (isNaN(result)) {
 alert('传递参数错误，请检查！');
 return false;
 }
 result = Math.round(num * 100) / 100;
 var s_x = result.toString();
 var pos_decimal = s_x.indexOf('.');
 if (pos_decimal < 0) {
 pos_decimal = s_x.length;
 s_x += '.';
 }
 while (s_x.length <= pos_decimal + 2) {
 s_x += '0';
 }
 return s_x;
}
```
## 去随机数

```javascript
   const getrander = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min
    }
```