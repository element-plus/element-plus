import{_ as n,c as s,o as a,e as t}from"./app.60521dad.js";const g='{"title":"\u4E3B\u9898","description":"","frontmatter":{"title":"\u4E3B\u9898","lang":"zh-CN"},"headers":[{"level":2,"title":"\u66F4\u6362\u4E3B\u9898\u8272","slug":"\u66F4\u6362\u4E3B\u9898\u8272"},{"level":3,"title":"\u901A\u8FC7 SCSS \u53D8\u91CF","slug":"\u901A\u8FC7-scss-\u53D8\u91CF"},{"level":3,"title":"\u5982\u4F55\u8986\u76D6\u5B83\uFF1F","slug":"\u5982\u4F55\u8986\u76D6\u5B83\uFF1F"},{"level":3,"title":"\u901A\u8FC7 CSS \u53D8\u91CF\u8BBE\u7F6E","slug":"\u901A\u8FC7-css-\u53D8\u91CF\u8BBE\u7F6E"}],"relativePath":"zh-CN/guide/theming.md","lastUpdated":null}',e={},p=t(`<h1 id="\u81EA\u5B9A\u4E49\u4E3B\u9898" tabindex="-1">\u81EA\u5B9A\u4E49\u4E3B\u9898 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u4E3B\u9898" aria-hidden="true">#</a></h1><p>Element Plus \u9ED8\u8BA4\u63D0\u4F9B\u4E00\u5957\u4E3B\u9898\uFF0CCSS \u547D\u540D\u91C7\u7528 BEM \u7684\u98CE\u683C\uFF0C\u65B9\u4FBF\u4F7F\u7528\u8005\u8986\u76D6\u6837\u5F0F\u3002 \u4F46\u662F\u5982\u679C\u9700\u8981\u5927\u89C4\u6A21\u66FF\u6362\u6837\u5F0F\uFF0C\u4F8B\u5982\uFF1A \u5C06\u4E3B\u9898\u989C\u8272\u4ECE\u84DD\u8272\u6539\u4E3A\u6A59\u8272\u6216\u7EFF\u8272\uFF0C\u4E5F\u8BB8\u4E00\u4E2A\u4E2A\u5C06\u5176\u8986\u76D6\u8D77\u6765\u4E0D\u662F\u4E00\u4E2A\u597D\u4E3B\u610F\u3002</p><p>\u6211\u4EEC\u63D0\u4F9B\u56DB\u79CD\u65B9\u6CD5\u6765\u6539\u53D8\u6837\u5F0F\u53D8\u91CF\u3002</p><h2 id="\u66F4\u6362\u4E3B\u9898\u8272" tabindex="-1">\u66F4\u6362\u4E3B\u9898\u8272 <a class="header-anchor" href="#\u66F4\u6362\u4E3B\u9898\u8272" aria-hidden="true">#</a></h2><p>\u4EE5\u4E0B\u662F\u81EA\u5B9A\u4E49\u4E3B\u9898\u7684\u4E00\u4E9B\u4F8B\u5B50\u3002</p><ul><li>\u5168\u90E8\u5BFC\u5165\uFF1A<a href="https://github.com/element-plus/element-plus-vite-starter" target="_blank" rel="noopener noreferrer">element-plus-vite-starter</a></li><li>\u6309\u9700\u5BFC\u5165\uFF1A<a href="https://github.com/element-plus/unplugin-element-plus" target="_blank" rel="noopener noreferrer">unplugin-element-plus/examples/vite</a></li></ul><h3 id="\u901A\u8FC7-scss-\u53D8\u91CF" tabindex="-1">\u901A\u8FC7 SCSS \u53D8\u91CF <a class="header-anchor" href="#\u901A\u8FC7-scss-\u53D8\u91CF" aria-hidden="true">#</a></h3><p><code>theme-chalk</code> \u4F7F\u7528SCSS\u7F16\u5199\u800C\u6210\u3002 \u4F60\u53EF\u4EE5\u5728 <a href="https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss" target="_blank" rel="noopener noreferrer"><code>packages/theme-chalk/src/common/var.scss</code></a> \u6587\u4EF6\u4E2D\u67E5\u627ESCSS\u53D8\u91CF\u3002</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>We use sass modules (<a href="https://sass-lang.com/documentation/values/maps" target="_blank" rel="noopener noreferrer">sass:map</a>...) and <code>@use</code> to refactor all SCSS variables.</p><blockquote><p><a href="https://css-tricks.com/introducing-sass-modules/" target="_blank" rel="noopener noreferrer">\u4ECB\u7ECDSass \u6A21\u5757 | CSS-TRICKS</a></p></blockquote><p>For example, We use <code>$colors</code> as a map to preserve different types of colors.</p><p><code>$notification</code> is a map where all variables of the <code>notification</code> component at.</p><p>In the future, we will write documentation for variables that can be customized for each component. You can also directly checkout the source <a href="https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss" target="_blank" rel="noopener noreferrer">var.scss</a>.</p></div><div class="language-scss"><pre><code><span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> map.<span class="token function">deep-merge</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span>
    <span class="token string">&#39;white&#39;</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">,</span>
    <span class="token string">&#39;black&#39;</span><span class="token punctuation">:</span> #000000<span class="token punctuation">,</span>
    <span class="token string">&#39;primary&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #409eff<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;success&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #67c23a<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;warning&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #e6a23c<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;danger&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #f56c6c<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #f56c6c<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;info&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #909399<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token variable">$colors</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u5982\u4F55\u8986\u76D6\u5B83\uFF1F" tabindex="-1">\u5982\u4F55\u8986\u76D6\u5B83\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u8986\u76D6\u5B83\uFF1F" aria-hidden="true">#</a></h3><p>If your project also uses SCSS, you can directly change Element Plus style variables. Create a new style file, e.g. <code>styles/element/index.scss</code>:</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You should use <code>@use &#39;xxx.scss&#39; as *;</code> instead of <code>@import &#39;xxx.scss&#39;;</code>.</p><p>Because the sass team said they will remove <code>@import</code> eventually.</p><blockquote><p><a href="https://sass-lang.com/documentation/at-rules/use" target="_blank" rel="noopener noreferrer">Sass: @use</a> vs <a href="https://sass-lang.com/documentation/at-rules/import" target="_blank" rel="noopener noreferrer">Sass: @import</a></p></blockquote></div><div class="language-scss"><pre><code><span class="token comment">// styles/element/index.scss</span>
<span class="token comment">/* \u53EA\u9700\u8981\u91CD\u5199\u4F60\u9700\u8981\u7684\u5373\u53EF */</span>
<span class="token keyword">@forward</span> <span class="token string">&#39;element-plus/theme-chalk/src/common/var.scss&#39;</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token string">&#39;primary&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> green<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5982\u679C\u53EA\u662F\u6309\u9700\u5BFC\u5165\uFF0C\u5219\u53EF\u4EE5\u5FFD\u7565\u4EE5\u4E0B\u5185\u5BB9\u3002</span>
<span class="token comment">// \u5982\u679C\u4F60\u60F3\u5BFC\u5165\u6240\u6709\u6837\u5F0F:</span>
<span class="token comment">// @use &quot;element-plus/theme-chalk/src/index.scss&quot; as *;</span>
</code></pre></div><p>Then in the entry file of your project, import this style file instead of Element&#39;s built CSS:</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Import <code>element/index.scss</code> before scss of element-plus to avoid the problem of sass mixed variables, because we need generate light-x by your custom variables.</p></div><p>Create a <code>element/index.scss</code> to combine your variables and variables of element-plus. (If you import them in ts, they will not be combined.)</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In addition, you should distinguish your scss from the element variable scss. If they are mixed together, each hot update of <code>element-plus</code> needs to compile a large number of scss files, resulting in slow speed.</p></div><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./styles/element/index.scss&#39;</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
</code></pre></div><p>If you are using vite, and you want to custom theme when importing on demand.</p><p>Use <code>scss.additionalData</code> to compile variables with scss of every component.</p><div class="language-ts"><pre><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token comment">// \u4F60\u540C\u6837\u53EF\u4EE5\u4F7F\u7528 unplugin-vue-components</span>
<span class="token comment">// import Components from &#39;unplugin-vue-components/vite&#39;</span>
<span class="token comment">// import { ElementPlusResolver } from &#39;unplugin-vue-components/resolvers&#39;</span>

<span class="token comment">// \u6216\u8005\u4F7F\u7528 unplugin-element-plus</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;unplugin-element-plus/vite&#39;</span>

<span class="token comment">// vite.config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;~/&#39;</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      scss<span class="token operator">:</span> <span class="token punctuation">{</span>
        additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@use &quot;~/styles/element/index.scss&quot; as *;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4F7F\u7528 unplugin-vue-components</span>
    <span class="token comment">// Components({</span>
    <span class="token comment">//   resolvers: [</span>
    <span class="token comment">//     ElementPlusResolver({</span>
    <span class="token comment">//       importStyle: &quot;sass&quot;,</span>
    <span class="token comment">//       // directives: true,</span>
    <span class="token comment">//       // version: &quot;1.2.0-beta.1&quot;,</span>
    <span class="token comment">//     }),</span>
    <span class="token comment">//   ],</span>
    <span class="token comment">// }),</span>
    <span class="token comment">// \u6216\u4F7F\u7528 unplugin-element-plus</span>
    <span class="token function">ElementPlus</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      useSource<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>If you are using webpack, and you want to custom theme when importing on demand.</p><div class="language-ts"><pre><code><span class="token comment">// webpack.config.ts</span>
<span class="token comment">// \u4F7F\u7528 unplugin-element-plus</span>

<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;unplugin-element-plus/webpack&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    loaderOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      scss<span class="token operator">:</span> <span class="token punctuation">{</span>
        additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@use &quot;~/styles/element/index.scss&quot; as *;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">ElementPlus</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      useSource<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u901A\u8FC7-css-\u53D8\u91CF\u8BBE\u7F6E" tabindex="-1">\u901A\u8FC7 CSS \u53D8\u91CF\u8BBE\u7F6E <a class="header-anchor" href="#\u901A\u8FC7-css-\u53D8\u91CF\u8BBE\u7F6E" aria-hidden="true">#</a></h3><p>CSS Variables is a very useful feature, already supported by almost all browsers. (IE: Wait?)</p><blockquote><p>Learn more from <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer">Using CSS custom properties (variables) | MDN</a></p></blockquote><p>We have used css variables to reconstruct the style system of almost all components. (Since <code>1.0.2-beta-70</code> <a href="https://github.com/element-plus/element-plus/issues/2242" target="_blank" rel="noopener noreferrer">#2242</a>)</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>It is compatible with the SCSS variable system. We use the function of SCSS to automatically generate css variables for use.</p></div><p>This means you can dynamically change individual variables inside the component to better customize it without having to modify scss and recompile it.</p><blockquote><p>In the future, the css variable names and role documentation for each component will be written to each component.</p></blockquote><p>Like this:</p><div class="language-css"><pre><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--el-color-primary</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If you just want to customize a particular component, just add inline styles for certain components individually.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tag</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--el-tag-bg-color</span><span class="token punctuation">:</span> red</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tag</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>For performance reasons, it is more recommended to custom css variables under a class rather than the global <code>:root</code>.</p><div class="language-css"><pre><code><span class="token selector">.custom-class</span> <span class="token punctuation">{</span>
  <span class="token property">--el-tag-bg-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If you want to control css var by script, try this:</p><div class="language-ts"><pre><code><span class="token comment">// document.documentElement \u662F\u5168\u5C40\u53D8\u91CF\u65F6</span>
<span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement
<span class="token comment">// const el = document.getElementById(&#39;xxx&#39;)</span>

<span class="token comment">// \u83B7\u53D6 css \u53D8\u91CF</span>
<span class="token function">getComputedStyle</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">--el-color-primary</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

<span class="token comment">// \u8BBE\u7F6E css \u53D8\u91CF</span>
el<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">&#39;--el-color-primary&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
</code></pre></div><p>If you want a more elegant way, check this out. <a href="https://vueuse.org/core/usecssvar/" target="_blank" rel="noopener noreferrer">useCssVar | VueUse</a></p>`,40),o=[p];function c(l,u,i,r,k,m){return a(),s("div",null,o)}var h=n(e,[["render",c]]);export{g as __pageData,h as default};
