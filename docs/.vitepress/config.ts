import { getSidebar } from "./utils/getSidebar";
import { defineConfig } from "vitepress";
export default defineConfig({
  // 网站标题
  title: "didididi",
  // 网站描述
  description: " ",
  dest: "./dist",
  base: "/blog/",
  // 头部head
  head: [
    // 添加图标
    ["link", { rel: "ico", href: "/favicon.ico" }],
  ],
  lastUpdated: true,
  lang: "zh-CH", //语言

  // 主题配置
  themeConfig: {
    smoothScroll: true, // 启动页面丝滑滚动
    outline: [2, 3], // 识别<h2>-<h4>的标题
    outlineTitle: "本页目录", // aside第一行显示的文本
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
    darkModeSwitchLabel: "深色模式",
    // socialLinks: [{ icon: "github", link: "https://github.com/justcho" }],
    lastUpdatedText: "最近更新时间",
    // docFooter: { prev: "上一篇", next: "下一篇" },
    // search: {
    //   provider: "local",
    // },
    // editLink: {
    //   pattern: "https://github.com/justcho/blog/blob/main/docs/:path",
    //   text: "在GitHub上编辑此页",
    // },
    // @ts-ignore
    // sidebar: getSidebar(),
    // footer: {
    //   copyright: "Copyright©2023 JustCho. All rights reserved.",
    // },
  },
});
