import{_ as s,o as a,c as l,U as n}from"./chunks/framework.316ef557.js";const o="/blog/assets/hello.886cf7ee.jpeg",C=JSON.parse('{"title":"Hello,Vue","description":"","frontmatter":{},"headers":[],"relativePath":"notes/vue/hello.md","filePath":"notes/vue/hello.md","lastUpdated":1689776313000}'),e={name:"notes/vue/hello.md"},p=n('<h1 id="hello-vue" tabindex="-1">Hello,Vue <a class="header-anchor" href="#hello-vue" aria-label="Permalink to &quot;Hello,Vue&quot;">​</a></h1><h2 id="vue版本" tabindex="-1">Vue版本 <a class="header-anchor" href="#vue版本" aria-label="Permalink to &quot;Vue版本&quot;">​</a></h2><p><img src="'+o+`" alt="vue对比.jpg"></p><h3 id="vue完整版" tabindex="-1"><a href="https://cn.vuejs.org/index.html" target="_blank" rel="noreferrer">Vue完整版</a> <a class="header-anchor" href="#vue完整版" aria-label="Permalink to &quot;[Vue完整版](https://cn.vuejs.org/index.html)&quot;">​</a></h3><ol><li>有编译器compiler，体积大功能多，可以直接把html字符串变成DOM节点</li><li>视图，此处为html字符串，写在index.html里或者写在<code>new Vue</code>构造选项template里</li><li>引入方法</li></ol><ul><li>cdn引入：在index.html里用<code>script</code>标签引入，bootcdn：vue.min.js(无注释的完整版)</li><li>webpack引入：需要配置alias（详见官方文档）</li><li>@vue/cli引入：需要额外配置（详见官方文档）</li></ul><h3 id="vue非完整版" tabindex="-1"><a href="https://cli.vuejs.org/zh/" target="_blank" rel="noreferrer">Vue非完整版</a> <a class="header-anchor" href="#vue非完整版" aria-label="Permalink to &quot;[Vue非完整版](https://cli.vuejs.org/zh/)&quot;">​</a></h3><ol><li>无编译器compiler，体积小功能少了点</li><li>视图，只能自己在<code>new Vue</code>里写构造选项render函数里，用h来创建标签</li><li>引入方法</li></ol><ul><li>cdn引入：在index.html里用<code>script</code>标签引入，bootcdn：vue.runtime.min.js(无注释的非完整版)</li><li>webpack引入：默认使用非完整版的</li><li>@vue/cli引入：默认使用非完整版的</li></ul><h4 id="vue单文件组件" tabindex="-1">Vue单文件组件 <a class="header-anchor" href="#vue单文件组件" aria-label="Permalink to &quot;Vue单文件组件&quot;">​</a></h4><ul><li>在webpack打包时，vue-loader可以把vue文件翻译成带有render函数的一个对象，这样在main.js里引用就行了，就不用我们自己去写render函数了</li><li>整个vue文件被翻译成一个对象</li><li>vue文件里的template里的html字符串被翻译成非完整版需要的render函数。</li></ul><h4 id="非完整版好处" tabindex="-1">非完整版好处 <a class="header-anchor" href="#非完整版好处" aria-label="Permalink to &quot;非完整版好处&quot;">​</a></h4><ol><li>保证用户体验，用户下载的JS文件体积更小，但只支持render函数</li><li>开发者可直接在vue文件里写HTML标签，而不需要写render函数</li><li>因为可以用vue-loader 把vue文件里的HTML转为render函数</li></ol><h3 id="template" tabindex="-1">template <a class="header-anchor" href="#template" aria-label="Permalink to &quot;template&quot;">​</a></h3><p>在index.html里引入run.runtime.min.js 新建vue文件Demo.vue</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//在Demo.vue里</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">                  //在vue文件Demo.vue里的template里写html字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @click=&quot;add&quot;&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#C792EA;">import</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">HelloWorld</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">from</span><span style="color:#89DDFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./components/HelloWorld.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">default</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">App</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">data</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    return </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">n</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">add</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/style&gt;</span></span></code></pre></div><h2 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//在main.js里</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Demo </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./Demo.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//引入vue文件Demo.vue</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">render</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sass</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">productionTip </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">h</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">h</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">Demo</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">   </span><span style="color:#676E95;font-style:italic;">//这样用</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>之后预览时，vue-loader就可以进行转换了</p><h2 id="codesandbox-io" tabindex="-1"><a href="https://codesandbox.io/s/" target="_blank" rel="noreferrer">codesandbox.io</a> <a class="header-anchor" href="#codesandbox-io" aria-label="Permalink to &quot;[codesandbox.io](https://codesandbox.io/s/)&quot;">​</a></h2><p>进入网站，选Vue,然后就可以正常使用了</p>`,21),t=[p];function r(c,i,D,F,y,u){return a(),l("div",null,t)}const A=s(e,[["render",r]]);export{C as __pageData,A as default};
