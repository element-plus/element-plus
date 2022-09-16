import{o as s,c as n,e as a}from"./app.fd11312f.js";const e=a(`<h1 id="tema-personalizado" tabindex="-1">Tema personalizado <a class="header-anchor" href="#tema-personalizado" aria-hidden="true">#</a></h1><p>Element Plus utiliza la metodolog\xEDa BEM en CSS con la finalidad de que pueda sobrescribir los estilos f\xE1cilmente. Pero si necesita reemplazar estilos a gran escala, p.ej. cambiar el color del tema de azul a naranja o verde, tal vez sobreescribirlos uno por uno no es una buena idea.</p><p>Proporcionamos cuatro maneras de cambiar las variables de estilo.</p><h2 id="cambia-el-color-del-tema" tabindex="-1">Cambia el color del tema <a class="header-anchor" href="#cambia-el-color-del-tema" aria-hidden="true">#</a></h2><p>Estos son ejemplos sobre temas personalizados.</p><ul><li>Importaci\xF3n completa: [elemento-plus-vite-starter](<a href="https://github" target="_blank" rel="noopener noreferrer">https://github</a>. com/element-plus/element-plus-vite-starter)</li><li>A demanda: [unplugin-element-plus/examples/vite](<a href="https://github" target="_blank" rel="noopener noreferrer">https://github</a>. com/element-plus/unplugin-element-plus)</li></ul><h3 id="por-variables-scss" tabindex="-1">Por variables SCSS <a class="header-anchor" href="#por-variables-scss" aria-hidden="true">#</a></h3><p><code>theme-chalk</code> est\xE1 escrito en SCSS. Puede encontrar las variables SCSS en <a href="https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss" target="_blank" rel="noopener noreferrer"><code>packages/theme-chalk/src/common/var.scss</code></a>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Utilizamos m\xF3dulos sass (<a href="https://sass-lang.com/documentation/values/maps" target="_blank" rel="noopener noreferrer">sass:map</a>...) y <code>@use</code> para refactorizar todas las variables SCSS. Y usar <code>@use</code> para todas las variables SCSS, resuelve el problema de salida duplicada causado por <code>@import</code>.</p><blockquote><p><a href="https://css-tricks.com/introducing-sass-modules/" target="_blank" rel="noopener noreferrer">Introducci\xF3n de los m\xF3dulos Sass | CSS-TRICKS</a></p></blockquote><p>Por ejemplo, usamos <code>$colors</code> como mapa para preservar diferentes tipos de colores.</p><p><code>$notification</code> es un mapa donde todas las variables del componente <code>notification</code>.</p><p>En el futuro, escribiremos documentaci\xF3n para variables que pueden ser personalizadas para cada componente. Tambi\xE9n puede consultar directamente el c\xF3digo fuente <a href="https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss" target="_blank" rel="noopener noreferrer">var.scss</a>.</p></div><div class="language-scss"><pre><code><span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
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
</code></pre></div><h3 id="\xBFcomo-anularlo" tabindex="-1">\xBFC\xF3mo anularlo? <a class="header-anchor" href="#\xBFcomo-anularlo" aria-hidden="true">#</a></h3><p>Si su proyecto tambi\xE9n utiliza SCSS, puede cambiar directamente las variables de estilo Element Plus. Cree un nuevo archivo de estilo, p. ej., <code>styles/element/index.scss</code>:</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Deber\xEDa usar <code>@use &#39;xxx.scss&#39; as *;</code> en lugar de <code>@import &#39;xxx.scss&#39;;</code>.</p><p>Debido a que el equipo de sass dijo que eliminar\xE1n <code>@import</code> eventualmente.</p><blockquote><p><a href="https://sass-lang.com/documentation/at-rules/use" target="_blank" rel="noopener noreferrer">Sass: @use</a> vs <a href="https://sass-lang.com/documentation/at-rules/import" target="_blank" rel="noopener noreferrer">Sass: @import</a></p></blockquote></div><div class="language-scss"><pre><code><span class="token comment">// styles/element/index.scss</span>
<span class="token comment">/* just override what you need */</span>
<span class="token keyword">@forward</span> <span class="token string">&#39;element-plus/theme-chalk/src/common/var.scss&#39;</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token string">&#39;primary&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> green<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// If you just import on demand, you can ignore the following content.</span>
<span class="token comment">// if you want to import all styles:</span>
<span class="token comment">// @use &quot;element-plus/theme-chalk/src/index.scss&quot; as *;</span>
</code></pre></div><p>Luego, en el archivo de entrada de su proyecto, importe este archivo de estilo en lugar del CSS construido por Element:</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Importe <code>element/index.scss</code> antes del scss de element-plus para evitar el problema de las variables mixtas sass porque necesitamos generar light-x para sus variables personalizadas.</p></div><p>Cree un <code>element/index.scss</code> para combinar sus variables y variables de element-plus. (Si los importa en ts, no se combinar\xE1n.)</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Adem\xE1s, hay que distinguir su scss de las variables de los elementos scss. Si se combinan entre s\xED, cada actualizaci\xF3n caliente de <code>element-plus</code> necesita compilar un gran n\xFAmero de archivos scss, lo que resulta ser un proceso lento.</p></div><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./styles/element/index.scss&#39;</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
</code></pre></div><p>Si est\xE1 utilizando vite, y desea personalizar el tema al importar bajo demanda.</p><p>Use <code>scss.additionalData</code> para compilar variables con scss de cada componente.</p><div class="language-ts"><pre><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token comment">// You can also use unplugin-vue-components</span>
<span class="token comment">// import Components from &#39;unplugin-vue-components/vite&#39;</span>
<span class="token comment">// import { ElementPlusResolver } from &#39;unplugin-vue-components/resolvers&#39;</span>

<span class="token comment">// or use unplugin-element-plus</span>
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
    <span class="token comment">// use unplugin-vue-components</span>
    <span class="token comment">// Components({</span>
    <span class="token comment">//   resolvers: [</span>
    <span class="token comment">//     ElementPlusResolver({</span>
    <span class="token comment">//       importStyle: &quot;sass&quot;,</span>
    <span class="token comment">//       // directives: true,</span>
    <span class="token comment">//       // version: &quot;2.1.5&quot;,</span>
    <span class="token comment">//     }),</span>
    <span class="token comment">//   ],</span>
    <span class="token comment">// }),</span>
    <span class="token comment">// or use unplugin-element-plus</span>
    <span class="token function">ElementPlus</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      useSource<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Si est\xE1 utilizando webpack, y desea personalizar el tema al importar bajo demanda.</p><div class="language-ts"><pre><code><span class="token comment">// webpack.config.ts</span>
<span class="token comment">// use unplugin-element-plus</span>

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
</code></pre></div><h3 id="por-variables-css" tabindex="-1">Por variables CSS <a class="header-anchor" href="#por-variables-css" aria-hidden="true">#</a></h3><p>Las variables CSS son una caracter\xEDstica muy \xFAtil, ya soportada por casi todos los navegadores. (IE: Wait?)</p><blockquote><p>Aprenda m\xE1s de [Uso de propiedades personalizadas (variables) en CSS | MDN](<a href="https://developer" target="_blank" rel="noopener noreferrer">https://developer</a>. mozilla. org/es/docs/Web/CSS/Using_CSS_custom_properties)</p></blockquote><p>Hemos utilizado variables css para reconstruir el sistema de estilo de casi todos los componentes.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Es compatible con el sistema de variables SCSS. Utilizamos la funci\xF3n de SCSS para generar autom\xE1ticamente variables CSS para su uso.</p></div><p>Esto significa que puede cambiar din\xE1micamente variables individuales dentro del componente para personalizarlo mejor sin tener que modificar scss y recompilarlo.</p><blockquote><p>En el futuro, se escribir\xE1n en cada componente los nombres de variables y la documentaci\xF3n del rol de cada componente.</p></blockquote><p>Como esto:</p><div class="language-css"><pre><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--el-color-primary</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Si s\xF3lo desea personalizar un componente en particular, simplemente a\xF1ada estilos en l\xEDnea para ciertos componentes individualmente.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tag</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--el-tag-bg-color</span><span class="token punctuation">:</span> red</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tag</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Por razones de rendimiento, es m\xE1s recomendable personalizar las variables css bajo una clase que el global <code>:root</code>.</p><div class="language-css"><pre><code><span class="token selector">.custom-class</span> <span class="token punctuation">{</span>
  <span class="token property">--el-tag-bg-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Si desea controlar las variables css por script, pruebe esto:</p><div class="language-ts"><pre><code><span class="token comment">// document.documentElement is global</span>
<span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement
<span class="token comment">// const el = document.getElementById(&#39;xxx&#39;)</span>

<span class="token comment">// get css var</span>
<span class="token function">getComputedStyle</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">--el-color-primary</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

<span class="token comment">// set css var</span>
el<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">&#39;--el-color-primary&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
</code></pre></div><p>Si desea una forma m\xE1s elegante, compruebe esto. <a href="https://vueuse.org/core/usecssvar/" target="_blank" rel="noopener noreferrer">useCssVar | VueUse</a></p>`,40),t=[e],r='{"title":"Theming","description":"","frontmatter":{"title":"Theming","lang":"es-ES"},"headers":[{"level":2,"title":"Cambia el color del tema","slug":"cambia-el-color-del-tema"},{"level":3,"title":"Por variables SCSS","slug":"por-variables-scss"},{"level":3,"title":"\xBFC\xF3mo anularlo?","slug":"\xBFcomo-anularlo"},{"level":3,"title":"Por variables CSS","slug":"por-variables-css"}],"relativePath":"es-ES/guide/theming.md","lastUpdated":null}',p={},i=Object.assign(p,{__name:"theming",setup(o){return(c,l)=>(s(),n("div",null,t))}});export{r as __pageData,i as default};
