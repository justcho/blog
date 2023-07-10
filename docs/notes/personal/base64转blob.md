---
prev: false
next: false
---
# base64转blob

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
