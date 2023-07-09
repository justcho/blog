// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {});
  },
  // @ts-ignore
  enhanceApp({ app, router, siteData }) {},
};
