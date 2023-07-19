
# pnpm的安装与使用

## pnpm使用

### 官网： [https://pnpm.io/installation](https://pnpm.io/installation)

## 全局安装

`npm install pnpm -g`

## 设置源

```javascript
//查看源
pnpm config get registry 
//切换淘宝源
pnpm config set registry http://registry.npm.taobao.org 
```

### 安装

```javascript
pnpm install 包  // 
pnpm i 包
pnpm add 包    // -S  默认写入dependencies
pnpm add -D    // -D devDependencies
pnpm add -g    // 全局安装
```

### 移除

```javascript
pnpm remove 包                            //移除包
pnpm remove 包 --global                   //移除全局包
```

### 更新

```javascript
pnpm up                //更新所有依赖项
pnpm upgrade 包        //更新包
pnpm upgrade 包 --global   //更新全局包
```

### 设置存储路径

```javascript
pnpm config set store-dir /path/to/.pnpm-store
```

### 注意

- 一些需要node-gyp的包一定要记得安装好
