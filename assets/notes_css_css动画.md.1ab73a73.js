import{_ as s,o as a,c as n,U as l}from"./chunks/framework.316ef557.js";const F=JSON.parse('{"title":"css 动画","description":"","frontmatter":{},"headers":[],"relativePath":"notes/css/css动画.md","filePath":"notes/css/css动画.md","lastUpdated":1689776313000}'),p={name:"notes/css/css动画.md"},e=l(`<h1 id="css-动画" tabindex="-1">css 动画 <a class="header-anchor" href="#css-动画" aria-label="Permalink to &quot;css 动画&quot;">​</a></h1><h2 id="transform-允许你旋转-缩放-倾斜或平移给定元素" tabindex="-1">transform（允许你旋转，缩放，倾斜或平移给定元素） <a class="header-anchor" href="#transform-允许你旋转-缩放-倾斜或平移给定元素" aria-label="Permalink to &quot;transform（允许你旋转，缩放，倾斜或平移给定元素）&quot;">​</a></h2><h3 id="translate-位移" tabindex="-1">translate （位移） <a class="header-anchor" href="#translate-位移" aria-label="Permalink to &quot;translate （位移）&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// </span><span style="color:#FFCB6B;">length-percentage</span><span style="color:#A6ACCD;"> 长度或百分数 ? 表示可省略</span></span>
<span class="line"><span style="color:#A6ACCD;">// x 轴方向平移</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: translateX(&lt;</span><span style="color:#FFCB6B;">length-percentage</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// y轴方向平移</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: translateY(&lt;</span><span style="color:#FFCB6B;">length-percentage</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 两者结合</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: translate(&lt;</span><span style="color:#FFCB6B;">length-percentage</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">length-percentage</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">?)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 垂直于屏幕方向</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: translateZ(&lt;length</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">)且父容器perspective（原点/视点位置）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 加Z 需要使用 translate3d</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: translate3d(x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">z)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 经验：绝对定位元素的居中</span></span>
<span class="line"><span style="color:#A6ACCD;">top:50%</span></span>
<span class="line"><span style="color:#A6ACCD;">left: 50%</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: translate(-50%，-50%)</span></span></code></pre></div><h3 id="scale-缩放" tabindex="-1">scale (缩放) <a class="header-anchor" href="#scale-缩放" aria-label="Permalink to &quot;scale (缩放)&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// x轴方向改变大小</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: scaleX(&lt;number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// y轴方向改变大小</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: scaleY(&lt;number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 两者结合</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: scale(&lt;number</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;">&lt;number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">?)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 经验： 用的很少容易出现模糊</span></span></code></pre></div><h3 id="rotate-旋转" tabindex="-1">rotate(旋转) <a class="header-anchor" href="#rotate-旋转" aria-label="Permalink to &quot;rotate(旋转)&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// angle 表示角度 zero 点</span></span>
<span class="line"><span style="color:#A6ACCD;">// z 轴转</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: rotate( </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> &lt;angle&gt; </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> &lt;zero&gt; </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// x 轴转</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: rotateX( </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> &lt;angle&gt; </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> &lt;zero&gt; </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// y 轴转</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: rotateY( </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> &lt;angle&gt; </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> &lt;zero&gt; </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// z 轴转</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: rotateZ( </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> &lt;angle&gt; </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> &lt;zero&gt; </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">//经验： 一般用于制作loading</span></span></code></pre></div><h3 id="skew-倾斜" tabindex="-1">skew(倾斜) <a class="header-anchor" href="#skew-倾斜" aria-label="Permalink to &quot;skew(倾斜)&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// x 轴倾斜</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: skewX(</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> &lt;angle&gt; </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> &lt;zero&gt; </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// y 轴倾斜</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: skewY(</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> &lt;angle&gt; </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> &lt;zero&gt; </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 两者结合</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: skew(</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> &lt;angle&gt; </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> &lt;zero&gt; </span><span style="color:#89DDFF;">],[</span><span style="color:#A6ACCD;"> &lt;angle&gt; </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> &lt;zero&gt; </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">?);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 经验： 用的较少</span></span></code></pre></div><h3 id="组合-多种效果" tabindex="-1">组合（多种效果） <a class="header-anchor" href="#组合-多种效果" aria-label="Permalink to &quot;组合（多种效果）&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 组合使用</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: scale(0</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">5</span><span style="color:#A6ACCD;">) translate(-100%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> -100%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 取消所有</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: none</span></span></code></pre></div><h2 id="transition-过渡" tabindex="-1">transition(过渡) <a class="header-anchor" href="#transition-过渡" aria-label="Permalink to &quot;transition(过渡)&quot;">​</a></h2><h3 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h3><p>补充中间帧</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// transition: 属性名 时长 过渡方式 延迟</span></span>
<span class="line"><span style="color:#A6ACCD;">transsition: left 200ms linear</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 可以用逗号分隔两个不同属性</span></span>
<span class="line"><span style="color:#A6ACCD;">transition: left 200ms</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> top 400ms</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 可以用all 代表所有属性</span></span>
<span class="line"><span style="color:#A6ACCD;">transition: all 200ms</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 过渡方式(线性或非线性)</span></span>
<span class="line"><span style="color:#A6ACCD;">linear/ ease/ </span><span style="color:#FFCB6B;">ease-in</span><span style="color:#A6ACCD;">/ </span><span style="color:#FFCB6B;">ease-out</span><span style="color:#A6ACCD;">/</span><span style="color:#FFCB6B;">ease-in-out</span><span style="color:#A6ACCD;">/</span></span></code></pre></div>`,17),o=[e];function t(c,r,C,i,A,D){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{F as __pageData,h as default};
