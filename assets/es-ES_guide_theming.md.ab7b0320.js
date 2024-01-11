import{o,c as p,b as s,a as e,d as n,e as t,_ as c}from"./app.f335c00d.js";const l=s("h1",{id:"tema-personalizado",tabindex:"-1"},[n("Tema personalizado "),s("a",{class:"header-anchor vp-link",href:"#tema-personalizado","aria-hidden":"true"},"#")],-1),i=s("p",null,"Element Plus utiliza la metodolog\xEDa BEM en CSS con la finalidad de que pueda sobrescribir los estilos f\xE1cilmente. Pero si necesita reemplazar estilos a gran escala, p.ej. cambiar el color del tema de azul a naranja o verde, tal vez sobreescribirlos uno por uno no es una buena idea.",-1),u=s("p",null,"Proporcionamos cuatro maneras de cambiar las variables de estilo.",-1),r=s("h2",{id:"cambia-el-color-del-tema",tabindex:"-1"},[n("Cambia el color del tema "),s("a",{class:"header-anchor vp-link",href:"#cambia-el-color-del-tema","aria-hidden":"true"},"#")],-1),k=s("p",null,"Estos son ejemplos sobre temas personalizados.",-1),d=n("Importaci\xF3n completa: [elemento-plus-vite-starter]("),m={href:"https://github",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},_=n("https://github"),g=n(". com/element-plus/element-plus-vite-starter)"),h=n("A demanda: [unplugin-element-plus/examples/vite]("),v={href:"https://github",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},b=n("https://github"),f=n(". com/element-plus/unplugin-element-plus)"),S=s("h3",{id:"por-variables-scss",tabindex:"-1"},[n("Por variables SCSS "),s("a",{class:"header-anchor vp-link",href:"#por-variables-scss","aria-hidden":"true"},"#")],-1),y=s("code",null,"theme-chalk",-1),C=n(" est\xE1 escrito en SCSS. Puede encontrar las variables SCSS en "),w={href:"https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},x=s("code",null,"packages/theme-chalk/src/common/var.scss",-1),P=n("."),q={class:"warning custom-block"},T=s("p",{class:"custom-block-title"},"WARNING",-1),E=n("Utilizamos m\xF3dulos sass ("),z={href:"https://sass-lang.com/documentation/values/maps",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},A=n("sass:map"),I=n("...) y "),j=s("code",null,"@use",-1),V=n(" para refactorizar todas las variables SCSS. Y usar "),N=s("code",null,"@use",-1),D=n(" para todas las variables SCSS, resuelve el problema de salida duplicada causado por "),R=s("code",null,"@import",-1),U=n("."),$={href:"https://css-tricks.com/introducing-sass-modules/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},B=n("Introducci\xF3n de los m\xF3dulos Sass | CSS-TRICKS"),W=s("p",null,[n("Por ejemplo, usamos "),s("code",null,"$colors"),n(" como mapa para preservar diferentes tipos de colores.")],-1),O=s("p",null,[s("code",null,"$notification"),n(" es un mapa donde todas las variables del componente "),s("code",null,"notification"),n(".")],-1),G=n("En el futuro, escribiremos documentaci\xF3n para variables que pueden ser personalizadas para cada componente. Tambi\xE9n puede consultar directamente el c\xF3digo fuente "),L={href:"https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},M=n("var.scss"),Y=n("."),H=t(`<div class="language-scss"><pre><code><span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
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
</code></pre></div><h3 id="\xBFcomo-anularlo" tabindex="-1">\xBFC\xF3mo anularlo? <a class="header-anchor vp-link" href="#\xBFcomo-anularlo" aria-hidden="true">#</a></h3><p>Si su proyecto tambi\xE9n utiliza SCSS, puede cambiar directamente las variables de estilo Element Plus. Cree un nuevo archivo de estilo, p. ej., <code>styles/element/index.scss</code>:</p>`,3),K={class:"warning custom-block"},F=s("p",{class:"custom-block-title"},"WARNING",-1),J=s("p",null,[n("Deber\xEDa usar "),s("code",null,"@use 'xxx.scss' as *;"),n(" en lugar de "),s("code",null,"@import 'xxx.scss';"),n(".")],-1),Q=s("p",null,[n("Debido a que el equipo de sass dijo que eliminar\xE1n "),s("code",null,"@import"),n(" eventualmente.")],-1),X={href:"https://sass-lang.com/documentation/at-rules/use",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},Z=n("Sass: @use"),ss=n(" vs "),ns={href:"https://sass-lang.com/documentation/at-rules/import",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},as=n("Sass: @import"),es=t(`<div class="language-scss"><pre><code><span class="token comment">// styles/element/index.scss</span>
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
</code></pre></div><h3 id="por-variables-css" tabindex="-1">Por variables CSS <a class="header-anchor vp-link" href="#por-variables-css" aria-hidden="true">#</a></h3><p>Las variables CSS son una caracter\xEDstica muy \xFAtil, ya soportada por casi todos los navegadores. (IE: Wait?)</p>`,13),ts=n("Aprenda m\xE1s de [Uso de propiedades personalizadas (variables) en CSS | MDN]("),os={href:"https://developer",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},ps=n("https://developer"),cs=n(". mozilla. org/es/docs/Web/CSS/Using_CSS_custom_properties)"),ls=t(`<p>Hemos utilizado variables css para reconstruir el sistema de estilo de casi todos los componentes.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Es compatible con el sistema de variables SCSS. Utilizamos la funci\xF3n de SCSS para generar autom\xE1ticamente variables CSS para su uso.</p></div><p>Esto significa que puede cambiar din\xE1micamente variables individuales dentro del componente para personalizarlo mejor sin tener que modificar scss y recompilarlo.</p><blockquote><p>En el futuro, se escribir\xE1n en cada componente los nombres de variables y la documentaci\xF3n del rol de cada componente.</p></blockquote><p>Como esto:</p><div class="language-css"><pre><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
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
</code></pre></div>`,12),is=n("Si desea una forma m\xE1s elegante, compruebe esto. "),us={href:"https://vueuse.org/core/usecssvar/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},rs=n("useCssVar | VueUse"),hs='{"title":"Theming","description":"","frontmatter":{"title":"Theming","lang":"es-ES"},"headers":[{"level":2,"title":"Cambia el color del tema","slug":"cambia-el-color-del-tema"},{"level":3,"title":"Por variables SCSS","slug":"por-variables-scss"},{"level":3,"title":"\xBFC\xF3mo anularlo?","slug":"\xBFcomo-anularlo"},{"level":3,"title":"Por variables CSS","slug":"por-variables-css"}],"relativePath":"es-ES/guide/theming.md","lastUpdated":null}',ks={},vs=Object.assign(ks,{__name:"theming",setup(ds){return(ms,_s)=>{const a=c;return o(),p("div",null,[l,i,u,r,k,s("ul",null,[s("li",null,[d,s("a",m,[_,e(a,{class:"link-icon"})]),g]),s("li",null,[h,s("a",v,[b,e(a,{class:"link-icon"})]),f])]),S,s("p",null,[y,C,s("a",w,[x,e(a,{class:"link-icon"})]),P]),s("div",q,[T,s("p",null,[E,s("a",z,[A,e(a,{class:"link-icon"})]),I,j,V,N,D,R,U]),s("blockquote",null,[s("p",null,[s("a",$,[B,e(a,{class:"link-icon"})])])]),W,O,s("p",null,[G,s("a",L,[M,e(a,{class:"link-icon"})]),Y])]),H,s("div",K,[F,J,Q,s("blockquote",null,[s("p",null,[s("a",X,[Z,e(a,{class:"link-icon"})]),ss,s("a",ns,[as,e(a,{class:"link-icon"})])])])]),es,s("blockquote",null,[s("p",null,[ts,s("a",os,[ps,e(a,{class:"link-icon"})]),cs])]),ls,s("p",null,[is,s("a",us,[rs,e(a,{class:"link-icon"})])])])}}});export{hs as __pageData,vs as default};
