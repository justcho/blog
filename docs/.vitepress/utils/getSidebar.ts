export enum TAB {
  VUE3 = "/notes/vue3/",
  REACT = "/notes/react/",
  VUE = "/notes/vue/",
  HTML = "/notes/html/",
  CSS = "/notes/css/",
  NODEJS = "/notes/nodejs/",
  JAVASCRIPT = "/notes/javascript/",
  UTILS = "/notes/utils/",
  SURPRISING = "/notes/surprising/",
  PERSONAL = "/notes/personal/",
}

export interface Items {
  text: string;
  items?: [];
}
export interface SideBar {
  [TAB.VUE3]: Items;
  [TAB.REACT]: Items;
  [TAB.VUE]: Items;
  [TAB.HTML]: Items;
  [TAB.CSS]: Items;
  [TAB.NODEJS]: Items;
  [TAB.JAVASCRIPT]: Items;
  [TAB.UTILS]: Items;
  [TAB.SURPRISING]: Items;
  [TAB.PERSONAL]: Items;
}
export const getSidebar = () => {
  const list: SideBar = {
    "/notes/vue3/": [
      {
        text: "Vue3",
        items: [
          {
            text: "vu3新特性",
            link: "/notes/vue3/新特性",
          },
        ],
      },
    ],
    "/notes/react/": [
      {
        text: "React",
        items: [
          {
            text: "React入门",
            link: "/notes/react/React入门",
          },
          {
            text: "React组件",
            link: "/notes/react/React组件",
          },
          {
            text: "React Clsaa组件详解",
            link: "/notes/react/Class组件",
          },
          {
            text: "React 函数组件详解",
            link: "/notes/react/函数组件",
          },
          {
            text: "React中常见的TS使用",
            link: "/notes/react/TS使用",
          },
        ],
      },
    ],
    "/notes/vue/": [
      {
        text: "Vue",
        items: [
          {
            text: "Hello,Vue",
            link: "/notes/vue/hello",
          },
          {
            text: "Vue的Options",
            link: "/notes/vue/options",
          },
          {
            text: "Vue的数据响应式",
            link: "/notes/vue/数据响应式",
          },
          {
            text: "Computed & Watch",
            link: "/notes/vue/computed&watch",
          },
          {
            text: "sync 修饰符",
            link: "/notes/vue/sync 修饰符",
          },
          {
            text: "Vue 构造选项",
            link: "/notes/vue/构造选项",
          },
          {
            text: "v-model",
            link: "/notes/vue/v-model",
          },
          {
            text: "vue-router 使用",
            link: "/notes/vue/vueRouter",
          },
        ],
      },
    ],
    "/notes/html/": [
      {
        text: "HTML",
        items: [
          {
            text: "HTML的元素和分类",
            link: "/notes/html/元素和分类",
          },
          {
            text: "HTML重点标签",
            link: "/notes/html/重点标签",
          },
          {
            text: "viewport",
            link: "/notes/html/viewport",
          },
          {
            text: "Emmet快捷写html",
            link: "/notes/html/Emmet快捷写html",
          },
          {
            text: "HTML 汇总",
            link: "/notes/html/html汇总",
          },
        ],
      },
    ],
    "/notes/css/": [
      {
        text: "CSS",
        items: [
          {
            text: "CSS 动画",
            link: "/notes/css/css动画",
          },
          {
            text: "CSS 总结",
            link: "/notes/css/css总结",
          },
          {
            text: "垂直居中的七种方法",
            link: "/notes/css/垂直居中的七种方法",
          },
          {
            text: "小知识",
            link: "/notes/css/小知识",
          },
          {
            text: "旋转动画",
            link: "/notes/css/旋转动画",
          },
          {
            text: "CSS 汇总",
            link: "/notes/css/css汇总",
          },
        ],
      },
    ],
    "/notes/nodejs/": [
      {
        text: "NodeJS",
        items: [
          {
            text: "Event Loop",
            link: "/notes/nodejs/Event Loop",
          },
        ],
      },
    ],
    "/notes/javascript/": [
      {
        text: "JavaScript",
        items: [
          {
            text: "原始类型和两特殊值",
            link: "/notes/javascript/Javascript数据类型-原始类型和两特殊值",
          },
          {
            text: "Object",
            link: "/notes/javascript/Javascript数据类型-Object",
          },
          {
            text: "数组对象",
            link: "/notes/javascript/Javascript数据类型-数组",
          },
          {
            text: "函数对象",
            link: "/notes/javascript/Javascript数据类型-函数",
          },
          {
            text: "Javascript运算符",
            link: "/notes/javascript/Javascript运算符",
          },
          {
            text: "DOM 事件机制&事件委托",
            link: "/notes/javascript/DOM 事件机制&事件委托",
          },
          {
            text: "JS 的继承",
            link: "/notes/javascript/JS 的继承",
          },
          {
            text: "我眼中的闭包",
            link: "/notes/javascript/我眼中的闭包",
          },
          {
            text: "Promise",
            link: "/notes/javascript/Promise",
          },
          {
            text: "函数的防抖跟节流",
            link: "/notes/javascript/函数的防抖跟节流",
          },
          {
            text: "ES6 语法",
            link: "/notes/javascript/ES6 语法",
          },
          {
            text: "call、apply、bind 的用法",
            link: "/notes/javascript/call、apply、bind 的用法",
          },
          {
            text: "jQuery",
            link: "/notes/javascript/jQuery",
          },
          {
            text: "跨域",
            link: "/notes/javascript/跨域",
          },
          {
            text: "常见的this指向的问题",
            link: "/notes/javascript/常见的this指向的问题",
          },
          {
            text: "原型链",
            link: "/notes/javascript/原型链",
          },
          {
            text: "JS的new做了什么",
            link: "/notes/javascript/JS的new做了什么",
          },
        ],
      },
    ],
    "/notes/utils/": [
      {
        text: "工具",
        items: [
          {
            text: "前端开发规范",
            link: "/notes/utils/前端开发规范",
          },
          {
            text: "git 提交备注规范",
            link: "/notes/utils/Git提交备注规范",
          },
          {
            text: "常用 Git 命令清单",
            link: "/notes/utils/常用 Git 命令清单",
          },
          {
            text: "终端命令行",
            link: "/notes/utils/终端命令行",
          },
          {
            text: "VSCode : Keyboard shortcuts for Windows",
            link: "/notes/utils/VSCode Keyboard shortcuts for Windows",
          },
          {
            text: "Axios 速查表",
            link: "/notes/utils/Axios 速查表",
          },
          {
            text: "pnpm的安装与使用",
            link: "/notes/utils/pnpm的安装与使用",
          },
          {
            text: "echarts 配置项",
            link: "/notes/utils/echarts 配置项",
          },
          {
            text: "three.js 常用api",
            link: "/notes/utils/three.js 常用api",
          },
        ],
      },
    ],
    "/notes/surprising/": [
      {
        text: "骚操作",
        items: [
          {
            text: "浅析 MVC",
            link: "/notes/surprising/浅析 MVC",
          },
          {
            text: "表驱动编程",
            link: "/notes/surprising/表驱动编程",
          },
          {
            text: "SVG的引入历程",
            link: "/notes/surprising/SVG的引入历程",
          },
          {
            text: "新东西",
            link: "/notes/surprising/新东西",
          },
          {
            text: "Just Devise",
            link: "/notes/surprising/Just Devise",
          },
        ],
      },
    ],
    "/notes/personal/": [
      {
        text: "回顾",
        items: [
          {
            text: "SAS签名Azure上传封装",
            link: "/notes/personal/SAS签名微软云Azure前端文件上传封装",
          },
          {
            text: "工具函数",
            link: "/notes/personal/工具函数",
          },
          {
            text: "vue-native-websocket 使用",
            link: "/notes/personal/vue-native-websocket使用",
          },
          {
            text: "wordClound封装",
            link: "/notes/personal/wordClound封装",
          },
          {
            text: "TRTC",
            link: "/notes/personal/TRTC",
          },
          {
            text: "画板封装",
            link: "/notes/personal/画板封装",
          },
          {
            text: "number相关",
            link: "/notes/personal/number相关",
          },
          {
            text: "string相关",
            link: "/notes/personal/string相关",
          },
          {
            text: "object相关",
            link: "/notes/personal/object相关",
          },
          {
            text: "array相关",
            link: "/notes/personal/array相关",
          },

          {
            text: "大屏相关",
            link: "/notes/personal/大屏相关",
          },
          {
            text: "常用的数组方法",
            link: "/notes/personal/常用的数组方法",
          },
          {
            text: "数组去重",
            link: "/notes/personal/数组去重",
          },
          {
            text: "平时积累",
            link: "/notes/personal/小tips",
          },
          {
            text: "聚合扫码",
            link: "/notes/personal/聚合扫码",
          },
          {
            text: "自己封装的axios",
            link: "/notes/personal/自己封装的axios",
          },
          {
            text: "uni.request封装",
            link: "/notes/personal/uni.request封装",
          },
          {
            text: "高德定位封装",
            link: "/notes/personal/高德定位封装",
          },
          {
            text: "日历组件封装",
            link: "/notes/personal/日历组件封装",
          },
          {
            text: "html2canvas使用",
            link: "/notes/personal/html2canvas",
          },
          {
            text: "页面表格转换word",
            link: "/notes/personal/页面表格转换word",
          },
          {
            text: "html2canvas + jspdf",
            link: "/notes/personal/html2canvas + jspdf",
          },
        ],
      },
    ],
  };
  return list;
};
