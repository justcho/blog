import{d as c,N as m,u as d,a3 as g,h as f,z as h,o as r,c as _,b as y,l as v,L as A,e as C,a4 as u,V as i,a5 as b,j as P,A as w,a6 as D,a7 as E,a8 as R,a9 as x,aa as I,ab as V,ac as j,ad as k,ae as L,af as O,ag as T,ah as B,ai as N}from"./chunks/framework.316ef557.js";import{t as p}from"./chunks/theme.78ee9aae.js";const S={class:"comments"},z=c({name:"comment",setup(e){const a=m(),{title:n}=d(),t=g({repo:"justcho/blog",repoId:"R_kgDOJ5hV5g",category:"Announcements",categoryId:"DIC_kwDOJ5hV5s4CXxex",mapping:"title",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:"light",lang:"zh-CN",loading:"lazy"}),s=f(!0);return h(()=>a.path,()=>{s.value=!1,setTimeout(()=>{s.value=!0},200)},{immediate:!0}),(H,U)=>(r(),_("div",S,[s.value?(r(),y(A("script"),{src:"https://giscus.app/client.js",key:v(n),"data-repo":t.repo,"data-repo-id":t.repoId,"data-category":t.category,"data-category-id":t.categoryId,"data-mapping":t.mapping,"data-strict":t.strict,"data-reactions-enabled":t.reactionsEnabled,"data-emit-metadata":t.emitMetadata,"data-input-position":t.inputPosition,"data-lang":t.lang,"data-theme":t.theme,"data-loading":t.loading},null,8,["data-repo","data-repo-id","data-category","data-category-id","data-mapping","data-strict","data-reactions-enabled","data-emit-metadata","data-input-position","data-lang","data-theme","data-loading"])):C("",!0)]))}});const F={...p,Layout:()=>u(p.Layout,null,{}),enhanceApp({app:e,router:a,siteData:n}){e.component("Comment",z)}};function l(e){if(e.extends){const a=l(e.extends);return{...a,...e,async enhanceApp(n){a.enhanceApp&&await a.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const o=l(F),M=c({name:"VitePressApp",setup(){const{site:e}=d();return P(()=>{w(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),D(),E(),R(),o.setup&&o.setup(),()=>u(o.Layout)}});async function $(){const e=G(),a=J();a.provide(x,e);const n=I(e.route);return a.provide(V,n),a.component("Content",j),a.component("ClientOnly",k),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:L}),{app:a,router:e,data:n}}function J(){return O(M)}function G(){let e=i,a;return T(n=>{let t=B(n);return t?(e&&(a=t),(e||a===t)&&(t=t.replace(/\.js$/,".lean.js")),i&&(e=!1),N(()=>import(t),[])):null},o.NotFound)}i&&$().then(({app:e,router:a,data:n})=>{a.go().then(()=>{b(a.route,n.site),e.mount("#app")})});export{$ as createApp};
