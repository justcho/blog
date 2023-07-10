---
prev: false
next: false
---

# SVG的引入历程

直接引入编辑器会报错

Google: typescript svg cannot find module找到 [这个网址](https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript)

我放到了 shims-vue.d.ts 里面

```javascript
declare module "*.svg" {
  const content: any;
  export default content;
}
```

用的时候需要用到svg use 的使用方法所以需要一个loader 所以会用到svg sprite loader
google搜索svg sprite loader [这个网址](https://github.com/JetBrains/svg-sprite-loader)

- 打开控制台:安装`yarn add svg-sprite-loader -D`
- 做些配置：你得把搜索到的webpack.config.js的内容改成vue.config.js认识的内容。

vue.config.js

```javascript
const path = import('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons')  //我们的icons全处于这个目录

    //config就是vue把webpack的API封装了，然后暴露给我们的一个对象
    
    config.module  
      .rule('svg-sprite')  //添加一个规则
      .test(/\.svg$/  //文件如果匹配上了这个正则表达式（整个目录下的.svg结尾的文件）就用这个规则
          .include.add(dir).end() // 只包含 icons 目录就结束，其他目录一概不走这个规则（也就是icons目录的.svg文件）
          .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end(),  //使用哪些loader
              //有个坑！打开一个svg文件，其实是个xml文件，用soft wrap自动换行看得更清楚。在<path>标签里添加fill=某种color，那这个icon svg 就会变色！相当于这个svg默认就带颜色了，会覆盖我们自己给他的颜色！那我们不想要我们的svg自带颜色（因为我们改不了），我们也不可能一个个svg都去删掉他们的fill，万一有一百个svg呢！
          .use('svgo-loader').loader('svgo-loader')  //可以使用一个svgo-loader，记得安装（yarn add --dev svgo-loader）！
          .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end() //添加了一个选项,删除fill属性
        
        //配置插件
    config.plugin('svg-sprite').use(import('svg-sprite-loader/plugin'), [{plainSprite: true}]),
      //其他的svg loader要排除我们现在这个目录，不然dir又走了上面这个又走了其他的
    config.module.rule('svg').exclude.add(dir) , // 其他 svg loader 排除 icons 目录
```

svg sprite loader的作用：他把我们导入的svg文件们变成symbol标签们（会有个id），把symbol标签外面包一个svg标签，把svg标签放入body里。接下来我们就可以用svg标签包着use标签（用xlink：href指向那个id）就可以使用那个svg了。
