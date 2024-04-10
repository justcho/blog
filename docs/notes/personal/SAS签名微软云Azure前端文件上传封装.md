# SAS签名微软云Azure前端文件上传封装
```javascript
import { getAzureBlobToken } from "@/api/upload";
const { BlobServiceClient } = require("@azure/storage-blob");

// 地址截取
const getPath = (path, str, position) => {
  let index;
  if (position === "last") {
    index = path.lastIndexOf(str);
  } else {
    index = path.indexOf(str);
  }
  return path.substring(0, index);
};
// 上传
const uploadFiles = async (containerClient, file, callback) => {
  const blockBlobClient = containerClient.getBlockBlobClient(
    `img/${file.name}`
  );
  blockBlobClient
    .uploadBrowserData(file, {
      // 现在是上传图片 上传文件的话可以去掉 blobContentType
      blobHTTPHeaders: { blobContentType: "image/png" },
    })
    .then((res) => {
      // 上传成功
      callback(res);
    })
    .catch((err) => {
      // 上传失败
      callback({ status: 0 });
    });
};

const getImgUrl = (file) => {
  return new Promise((resolve, reject) => {
    // 接口获取密匙
    getAzureBlobToken({
      blobName: "img/" + file.name,
    }).then((res) => {
      let url = getPath(res.result.sasUrl, "/", "last");
      const blobSasUrl = `${url}?${res.result.azureToken}`;
      // 创建一个 BlobServiceClient
      const blobServiceClient = new BlobServiceClient(blobSasUrl);
      // 从 BlobServiceClient 获取容器客户端
      const containerClient = blobServiceClient.getContainerClient(
        res.result.containerName
      );
      // 上传
      uploadFiles(containerClient, file, (e) => {
        let url = e?._response?.request?.url;
        resolve(getPath(url, "?"));
      });
    });
  });
};

export { getImgUrl };

```