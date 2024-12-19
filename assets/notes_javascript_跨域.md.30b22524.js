import{_ as a,o as e,c as r,U as t}from"./chunks/framework.316ef557.js";const m=JSON.parse('{"title":"跨域","description":"","frontmatter":{},"headers":[],"relativePath":"notes/javascript/跨域.md","filePath":"notes/javascript/跨域.md","lastUpdated":1689776313000}'),i={name:"notes/javascript/跨域.md"},o=t('<h1 id="跨域" tabindex="-1">跨域 <a class="header-anchor" href="#跨域" aria-label="Permalink to &quot;跨域&quot;">​</a></h1><h2 id="什么是同源" tabindex="-1">什么是同源 <a class="header-anchor" href="#什么是同源" aria-label="Permalink to &quot;什么是同源&quot;">​</a></h2><p>两个url的源必须一模一样，就说这两个url就是同源的</p><h3 id="同源策略" tabindex="-1">同源策略 <a class="header-anchor" href="#同源策略" aria-label="Permalink to &quot;同源策略&quot;">​</a></h3><ul><li>浏览器故意规定：如果一个JS文件运行在源A里，那么就只能获取到源A的数据。不能获取到其他源的数据，即不允许跨域</li><li>不同源的页面之间不允许互相访问数据</li><li>目的：保护用户隐私</li></ul><h2 id="什么是跨域" tabindex="-1">什么是跨域 <a class="header-anchor" href="#什么是跨域" aria-label="Permalink to &quot;什么是跨域&quot;">​</a></h2><p>一般来说，当一个请求url的<strong>协议、域名、端口</strong>三者之间任意一个与当前页面地址不同即为跨域。最常见的就是在一个域名下的网页中，调用另一个域名中的资源。</p><h2 id="jsonp-跨域" tabindex="-1">JSONP 跨域 <a class="header-anchor" href="#jsonp-跨域" aria-label="Permalink to &quot;JSONP 跨域&quot;">​</a></h2><p>我们在跨域的时候，由于当前浏览器不支持CROS，或者因为某些原因不支持CROS，那我们就必须用 JSONP来跨域。于是请求一个JS文件，这个JS文件会执行一个回调，回调里面就有我们的数据。我们当前网站创建一个script标签去请求另外一个网站的JS，JS里面会夹带我要的数据，而且这个JS会调用我写的一个全局函数来运行，就可以把数据给我了.这个回调的名字是我们随机生成的随机数，我们把这个回调的名字以callback的参数传给后台，后台就会把这个函数返回给我们，再执行</p><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ul><li>兼容IE</li><li>跨域</li></ul><h3 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h3><ul><li>因为script标签引用，得不到详细信息：状态码、header，只知道成功失败。</li><li>因为是script标签，只可以发get请求，当然不能支持POST</li></ul><h2 id="cors-跨域" tabindex="-1">CORS 跨域 <a class="header-anchor" href="#cors-跨域" aria-label="Permalink to &quot;CORS 跨域&quot;">​</a></h2><p>CORS，全称Cross-Origin Resource Sharing ，是一种允许当前域（domain）的资源（比如html/js/web service）被其他域（domain）的脚本请求访问的机制，通常由于同域安全策略（the same-origin security policy）浏览器会禁止这种跨域请求。</p><h3 id="详细做法" tabindex="-1">详细做法 <a class="header-anchor" href="#详细做法" aria-label="Permalink to &quot;详细做法&quot;">​</a></h3><p>Access-Control-Allow-Origin: <a href="http://foo.example" target="_blank" rel="noreferrer">http://foo.example</a></p>',17),l=[o];function s(n,h,c,d,p,u){return e(),r("div",null,l)}const b=a(i,[["render",s]]);export{m as __pageData,b as default};
