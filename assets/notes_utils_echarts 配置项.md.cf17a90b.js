import{_ as s,o as n,c as a,U as l}from"./chunks/framework.316ef557.js";const d=JSON.parse('{"title":"echarts 配置项","description":"","frontmatter":{},"headers":[],"relativePath":"notes/utils/echarts 配置项.md","filePath":"notes/utils/echarts 配置项.md","lastUpdated":1689776313000}'),p={name:"notes/utils/echarts 配置项.md"},e=l(`<h1 id="echarts-配置项" tabindex="-1">echarts 配置项 <a class="header-anchor" href="#echarts-配置项" aria-label="Permalink to &quot;echarts 配置项&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">option = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 标题组件，包含主标题和副标题</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    text: &#39;Stacked Line&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 提示框组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  tooltip: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用</span></span>
<span class="line"><span style="color:#A6ACCD;">    trigger: &#39;axis&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 图例组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  legend: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    data: [&#39;Email&#39;, &#39;Union Ads&#39;, &#39;Video Ads&#39;,&#39;Search Engine&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //grid 组件离容器左侧的距离。</span></span>
<span class="line"><span style="color:#A6ACCD;">    left: &#39;3%&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    right: &#39;4%&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    bottom: &#39;3%&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    //grid 区域是否包含坐标轴的刻度标签 </span></span>
<span class="line"><span style="color:#A6ACCD;">    //  containLabel: true 这常用于『防止标签溢出』的场景，标签溢出指的是，标签长度动态变化时，可能会溢出容器或者覆盖其他组件</span></span>
<span class="line"><span style="color:#A6ACCD;">    containLabel: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 工具栏。</span></span>
<span class="line"><span style="color:#A6ACCD;">  //内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具</span></span>
<span class="line"><span style="color:#A6ACCD;">  toolbox: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 各工具配置项</span></span>
<span class="line"><span style="color:#A6ACCD;">    feature: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 保存为图片</span></span>
<span class="line"><span style="color:#A6ACCD;">      saveAsImage: {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。</span></span>
<span class="line"><span style="color:#A6ACCD;">  xAxis: {</span></span>
<span class="line"><span style="color:#A6ACCD;">   // &#39;category&#39; 类目轴，适用于离散的类目数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &#39;category&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。</span></span>
<span class="line"><span style="color:#A6ACCD;">    boundaryGap: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 默认为 true , 这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 如果没有设置 type，但是设置了 axis.data，则认为 type 是 &#39;category&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    data: [&#39;Mon&#39;, &#39;Tue&#39;, &#39;Wed&#39;, &#39;Thu&#39;, &#39;Fri&#39;, &#39;Sat&#39;, &#39;Sun&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  yAxis: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // &#39;value&#39; 数值轴，适用于连续数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &#39;value&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  series: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 折线图是用折线将各个数据点标志连接起来的图表，用于展现数据的变化趋势</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &#39;Email&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      type: &#39;line&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      //数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加。</span></span>
<span class="line"><span style="color:#A6ACCD;">      stack: &#39;Total&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 如果给 stack 指定不同值或者去掉这个属性则不会发生数据堆叠</span></span>
<span class="line"><span style="color:#A6ACCD;">      data: [120, 132, 101, 134, 90, 230, 210]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span></code></pre></div>`,2),o=[e];function c(t,A,C,r,i,y){return n(),a("div",null,o)}const _=s(p,[["render",c]]);export{d as __pageData,_ as default};
