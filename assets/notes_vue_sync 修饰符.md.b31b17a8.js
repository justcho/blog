import{_ as s,o as n,c as a,U as l}from"./chunks/framework.316ef557.js";const d=JSON.parse('{"title":"sync 修饰符","description":"","frontmatter":{},"headers":[],"relativePath":"notes/vue/sync 修饰符.md","filePath":"notes/vue/sync 修饰符.md","lastUpdated":1689776313000}'),p={name:"notes/vue/sync 修饰符.md"},o=l(`<h1 id="sync-修饰符" tabindex="-1">sync 修饰符 <a class="header-anchor" href="#sync-修饰符" aria-label="Permalink to &quot;sync 修饰符&quot;">​</a></h1><h2 id="vue-修饰符sync的功能是-当一个子组件改变了一个-prop-的值时-这个变化也会同步到父组件中所绑定" tabindex="-1">vue 修饰符sync的功能是：当一个子组件改变了一个 prop 的值时，这个变化也会同步到父组件中所绑定 <a class="header-anchor" href="#vue-修饰符sync的功能是-当一个子组件改变了一个-prop-的值时-这个变化也会同步到父组件中所绑定" aria-label="Permalink to &quot;vue 修饰符sync的功能是：当一个子组件改变了一个 prop 的值时，这个变化也会同步到父组件中所绑定&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//写一个（子）组件Child.vue</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">child</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;">money</span><span style="color:#89DDFF;">}}</span><span style="color:#A6ACCD;">          //儿子这里要显示钱</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @click=&quot;$emit(&#39;update:money&#39;, money-100)&quot;&gt;  </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//儿子每次点击按钮就是想花钱，可是钱是爸爸给的自己花不了。</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//那就每次花钱的时候触发花钱事件update:money，这个事件会把爸爸给的钱-100，也就是儿子想怎么把这个钱花掉</span></span>
<span class="line"><span style="color:#89DDFF;">      &lt;span&gt;花钱&lt;/span&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;/button&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">default</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  props: [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">money</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]  </span><span style="color:#676E95;font-style:italic;">//儿子需要父亲给钱money</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.child {</span></span>
<span class="line"><span style="color:#A6ACCD;">  border: 3px solid green;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">*********************************************************************</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//写一个（父）组件App.vue ,这就是非完整版要用的vue文件</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;template&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;div </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    App.vue 我现在有 </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;">total</span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">hr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Child</span><span style="color:#89DDFF;"> :money.sync=&quot;total&quot;/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//这里的:monet 是指变量</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//&lt;Child :money=&quot;total&quot;  v-on:updata:money=&quot;total= $event&quot;/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//爸爸在引用儿子的时候，先把自己的钱total给儿子money，在监听儿子的花钱事件updata：money，只要儿子花钱了，就把自己现在的钱total的金额=儿子想怎么花掉这钱$event。爸爸的total变了，儿子的money也变了</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//爸爸把total给儿子当他的money，要是儿子想改money就通知爸爸改爸爸的total</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#C792EA;">import</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Child</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">from</span><span style="color:#89DDFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./Child.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">default</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">data</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    return </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">total</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10000</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  components: </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">Child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Child </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.app {</span></span>
<span class="line"><span style="color:#A6ACCD;">  border: 3px solid red;</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 10px;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/style&gt;</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Child</span><span style="color:#89DDFF;"> :money=&quot;total&quot; v-on:updata:money=&quot;total= $event&quot;/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">等于</span></span>
<span class="line"><span style="color:#89DDFF;"> &lt;Child :money.sync=&quot;total&quot;/&gt; </span><span style="color:#676E95;font-style:italic;">//.sync</span></span></code></pre></div><h2 id="sync是个语法糖" tabindex="-1">.sync是个语法糖 <a class="header-anchor" href="#sync是个语法糖" aria-label="Permalink to &quot;.sync是个语法糖&quot;">​</a></h2>`,6),t=[o];function e(c,r,y,D,F,i){return n(),a("div",null,t)}const u=s(p,[["render",e]]);export{d as __pageData,u as default};
