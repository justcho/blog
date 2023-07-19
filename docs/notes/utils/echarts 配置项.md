
# echarts 配置项
```
option = {
  // 标题组件，包含主标题和副标题
  title: {
    text: 'Stacked Line'
  },
  // 提示框组件
  tooltip: {
    //坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
    trigger: 'axis'
  },
  // 图例组件
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads','Search Engine']
  },
  // 直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴
  grid: {
    //grid 组件离容器左侧的距离。
    left: '3%',
    right: '4%',
    bottom: '3%',
    //grid 区域是否包含坐标轴的刻度标签 
    //  containLabel: true 这常用于『防止标签溢出』的场景，标签溢出指的是，标签长度动态变化时，可能会溢出容器或者覆盖其他组件
    containLabel: true
  },
  // 工具栏。
  //内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
  toolbox: {
    // 各工具配置项
    feature: {
      // 保存为图片
      saveAsImage: {}
    }
  },
  // 直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。
  xAxis: {
   // 'category' 类目轴，适用于离散的类目数据
    type: 'category',
    // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
    boundaryGap: false,
    // 默认为 true , 这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间
    // 如果没有设置 type，但是设置了 axis.data，则认为 type 是 'category'
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    // 'value' 数值轴，适用于连续数据
    type: 'value'
  },
  
  series: [
    // 折线图是用折线将各个数据点标志连接起来的图表，用于展现数据的变化趋势
    {
    // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列
      name: 'Email',
      type: 'line',
      //数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加。
      stack: 'Total',
      // 如果给 stack 指定不同值或者去掉这个属性则不会发生数据堆叠
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  ]
};

```
