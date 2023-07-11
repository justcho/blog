// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import comment from "./components/comment.vue";
import "./index.scss";
export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      "doc-after": () => h(comment),
    });
  },
  // @ts-ignore
  enhanceApp({ app, router, siteData }) {
    app.component("Comment", comment);
  },
};
