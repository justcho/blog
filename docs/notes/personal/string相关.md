# string 相关

## 时间转换(标准时间转换 yyyy-MM-dd)

```javascript
  time: new Date(),
      
      // 方法
  formatTen(num) { 
   return num > 9 ? (num + "") : ("0" + num); 
   },
   formatDate(date) { 
   let year = date.getFullYear(); 
   let month = date.getMonth() + 1; 
   let day = date.getDate(); 
   let hour = date.getHours(); 
   let minute = date.getMinutes(); 
   let second = date.getSeconds(); 
   return year + "-" + this.formatTen(month) + "-" + this.formatTen(day)+" "+this.formatTen(hour)+":"+this.formatTen(minute)+":"+this.formatTen(second); 
   },
     // 使用
        formatDate(time)
        
```

## 填充字符串到目标长度

### padStart()

用另一个字符串填充当前字符串(重复，如果需要的话)，以便产生的字符串达到给定的长度。填充从当前字符串的开始(左侧)应用的。

```javascript
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```

### padEnd()

用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。

```javascript
'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"
```
