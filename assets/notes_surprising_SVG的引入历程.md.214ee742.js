import{_ as s,o as a,c as n,U as l}from"./chunks/framework.316ef557.js";const C=JSON.parse('{"title":"SVG的引入历程","description":"","frontmatter":{},"headers":[],"relativePath":"notes/surprising/SVG的引入历程.md","filePath":"notes/surprising/SVG的引入历程.md","lastUpdated":1689776313000}'),o={name:"notes/surprising/SVG的引入历程.md"},p=l(`<h1 id="svg的引入历程" tabindex="-1">SVG的引入历程 <a class="header-anchor" href="#svg的引入历程" aria-label="Permalink to &quot;SVG的引入历程&quot;">​</a></h1><p>直接引入编辑器会报错</p><p>Google: typescript svg cannot find module找到 <a href="https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript" target="_blank" rel="noreferrer">这个网址</a></p><p>我放到了 shims-vue.d.ts 里面</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*.svg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>用的时候需要用到svg use 的使用方法所以需要一个loader 所以会用到svg sprite loader google搜索svg sprite loader <a href="https://github.com/JetBrains/svg-sprite-loader" target="_blank" rel="noreferrer">这个网址</a></p><ul><li>打开控制台:安装<code>yarn add svg-sprite-loader -D</code></li><li>做些配置：你得把搜索到的webpack.config.js的内容改成vue.config.js认识的内容。</li></ul><p>vue.config.js</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lintOnSave</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">chainWebpack</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dir</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src/assets/icons</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)  </span><span style="color:#676E95;font-style:italic;">//我们的icons全处于这个目录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//config就是vue把webpack的API封装了，然后暴露给我们的一个对象</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">module</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rule</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">svg-sprite</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)  </span><span style="color:#676E95;font-style:italic;">//添加一个规则</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">svg</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">//文件如果匹配上了这个正则表达式（整个目录下的.svg结尾的文件）就用这个规则</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">include</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">dir</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">() </span><span style="color:#676E95;font-style:italic;">// 只包含 icons 目录就结束，其他目录一概不走这个规则（也就是icons目录的.svg文件）</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">svg-sprite-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loader</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">svg-sprite-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">options</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">extract</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">//使用哪些loader</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#676E95;font-style:italic;">//有个坑！打开一个svg文件，其实是个xml文件，用soft wrap自动换行看得更清楚。在&lt;path&gt;标签里添加fill=某种color，那这个icon svg 就会变色！相当于这个svg默认就带颜色了，会覆盖我们自己给他的颜色！那我们不想要我们的svg自带颜色（因为我们改不了），我们也不可能一个个svg都去删掉他们的fill，万一有一百个svg呢！</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">svgo-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loader</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">svgo-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)  </span><span style="color:#676E95;font-style:italic;">//可以使用一个svgo-loader，记得安装（yarn add --dev svgo-loader）！</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">tap</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">options</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">{...</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> plugins</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">removeAttrs</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">attrs</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fill</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}}</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">() </span><span style="color:#676E95;font-style:italic;">//添加了一个选项,删除fill属性</span></span>
<span class="line"><span style="color:#F07178;">        </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//配置插件</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">plugin</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">svg-sprite</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">svg-sprite-loader/plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">plainSprite</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//其他的svg loader要排除我们现在这个目录，不然dir又走了上面这个又走了其他的</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">module</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rule</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">svg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">exclude</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">dir</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 其他 svg loader 排除 icons 目录</span></span></code></pre></div><p>svg sprite loader的作用：他把我们导入的svg文件们变成symbol标签们（会有个id），把symbol标签外面包一个svg标签，把svg标签放入body里。接下来我们就可以用svg标签包着use标签（用xlink：href指向那个id）就可以使用那个svg了。</p>`,10),e=[p];function t(c,r,F,y,D,i){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
