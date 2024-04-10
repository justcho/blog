# array相关

## 在下标对应位置删除一个对象

`this.big.splice(index,1)`

## uniapp 点击预览单张多张图片

```javascript
// An highlighted block
// 预览图片单张
            previewImg(logourl) {
                let _this = this;
                let imgsArray = [];
                imgsArray[0] = logourl
                uni.previewImage({
                    current: 0,
                    urls: imgsArray
                });
            },
            // 预览图片多张
            previewImg(index) {
                let _this = this;
                let imgsArray = [];
                for (let i = 0; i < this.imgUrlList.length; i++) {
                    if (this.imgUrlList[i].videoUrl == "") {
                        imgsArray.push(this.imgUrlList[i].imgUrl);
                    }
                }

                // #ifdef MP
                uni.previewImage({
                    current: index - 1,
                    urls: imgsArray,
                    indicator: 'number',
                    loop: true
                });
                // #endif

                // #ifndef MP
                uni.previewImage({
                    current: index - 1,
                    urls: imgsArray,
                    indicator: 'number',
                    loop: true
                });
                // #endif

            },
              
              
 // 单张预览
    ViewImage (e) {
      uni.previewImage({
        urls: e.target.dataset.urllist,
        current: e.target.dataset.url
      });
    },             
```

## 年月日截取

```javascript
通过split把他转为两个数组 然后取相应的值
//截取时间的年月日
var date=“2018/6/21 10:05:30”.split(" ")[0];

//截取时间的时分秒
var date=“2018/6/21 10:05:30”.split(" ")[1];
```

## js获取对象的键名和值

```javascript
let obj = {
  a: 1,
  b: 2
}；
// 键值
let values = Object.values(obj) // [1, 2]
// 键名
let keys = Object.keys(obj) // ['a', 'b']
```

## 标准时间转 YYYY-MM-DD

```javascript
// 时间转化
convertDate(date) {
      let yyyy = date.getFullYear().toString();
      let mm = (date.getMonth() + 1).toString();
      let dd = date.getDate().toString();

      let mmChars = mm.split("");
      let ddChars = dd.split("");

      return (
        yyyy +
        "-" +
        (mmChars[1] ? mm : "0" + mmChars[0]) +
        "-" +
        (ddChars[1] ? dd : "0" + ddChars[0])
      );
    },
```

## base64转blob

```javascript
    dataURItoBlob(dataURI) {
      let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0]; // mime类型
      let byteString = atob(dataURI.split(",")[1]); //base64 解码
      let arrayBuffer = new ArrayBuffer(byteString.length); //创建缓冲数组
      let intArray = new Uint8Array(arrayBuffer); //创建视图

      for (let i = 0; i < byteString.length; i++) {
        intArray[i] = byteString.charCodeAt(i);
      }
      return new Blob([intArray], { type: mimeString });
    },
```

## 将对象数值的值放到新的数组中

```javascript
// forEash
const ArraydDistrict = [];
const array = [
    {id: 35, id_city: 27, id_district: 453},
    {id: 36, id_city: 27, id_district: 454},
];

array.forEach(function(item) {
  ArraydDistrict.push(item.id_district);
});

console.log(ArraydDistrict);

// map
const array = [
               {id: 35, id_city: 27, id_district: 453},
               {id: 36, id_city: 27, id_district: 454},
              ];

const result = array.map(el => {  return el.id_district})

Results in [453, 454]

//您还可以使用隐式返回来减少冗长
const result = array.map(el => el.id_district)

// es6
const result = Array.from(array, el => el.id_district)
```

### map批量修改对象键名

```javascript
let arr = [{
            name: 'xiaoWang',
            number: '01'
        },
        {
            name: 'xiaoZhao',
            number: '02'
        }
    ]
    let newArr = arr.map(item => {
        return {
            label: item.name,
            value: item.number
        }
    })
    console.log(newArr)
    // [{
    //     label: "xiaoWang",
    //     value: "01"
    // }, {
    //     label: "xiaoZhao",
    //     value: "02"
    // }]
```

## 对象转数组

```javascript
notice:{
  name: 'aaa',
  height: 190,
  sex: 'man',
}
var arr = []
    for (let i in this.notice) {
      let o = {};
         o[i] = this.notice[i]; //即添加了key值也赋了value值 o[i] 相当于o.name 此时i为变量
         arr.push(o)
    }
    console.log(arr);
```

## 取数组里面的下标

```javascript
(this.cityList || []).findIndex((item) => item.name === this.defaultCityName);
```
## 循环比对数组里面相同的值
```javascript
// 假设你有一个字符串数组和一个对象数组
const stringArray = ["apple", "banana", "cherry"];
const objectArray = [
  { id: 1, name: "apple" },
  { id: 2, name: "banana" },
  { id: 3, name: "grape" }
];

// 要添加的新值
const newValue = "new value";

// 嵌套循环遍历两个数组
for (const stringValue of stringArray) {
  for (const obj of objectArray) {
    if (stringValue === obj.name) {
      // 如果找到匹配项，则在相同的对象中增加新值
      obj.newValue = newValue;
    }
  }
}

console.log(objectArray); // 输出包含新值的对象数组
```