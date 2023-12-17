import{o as t,c as o,b as e,a as s,d as n,e as i,_ as l}from"./app.52f3ddb1.js";const c=e("h1",{id:"ejemplos-de-commit",tabindex:"-1"},[n("Ejemplos de Commit "),e("a",{class:"header-anchor vp-link",href:"#ejemplos-de-commit","aria-hidden":"true"},"#")],-1),p=e("h2",{id:"por-que-existe-este-capitulo",tabindex:"-1"},[n("Por qu\xE9 existe este cap\xEDtulo "),e("a",{class:"header-anchor vp-link",href:"#por-que-existe-este-capitulo","aria-hidden":"true"},"#")],-1),r=n("Consulte "),u={href:"https://www.conventionalcommits.org/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},m=n("Compromisos Convencionales"),d=n(" para obtener m\xE1s informaci\xF3n."),_=i(`<p>Un buen mensaje de confirmaci\xF3n nos sirve para:</p><ol><li>Para entender lo que el colaborador est\xE1 intentando hacer</li><li>Genera autom\xE1ticamente el registro de cambios</li></ol><h3 id="regla-para-escribir-mensaje-de-confirmacion" tabindex="-1">Regla para escribir mensaje de confirmaci\xF3n <a class="header-anchor vp-link" href="#regla-para-escribir-mensaje-de-confirmacion" aria-hidden="true">#</a></h3><div class="language-md"><pre><code><span class="token title important"><span class="token punctuation">#</span> (Si se aplica, este commit har\xE1...) &lt;subject&gt; (Max 72 caracteres)</span>

<span class="token title important"><span class="token punctuation">#</span> |&lt;---- Usando un m\xE1ximo de 72 caracteres----&gt;|</span>

<span class="token title important"><span class="token punctuation">#</span> Explicar por qu\xE9 se est\xE1 haciendo este cambio</span>

<span class="token title important"><span class="token punctuation">#</span> |&lt;---- Intentar limitar cada l\xEDnea a un m\xE1ximo de 72 caracteres ----&gt;|</span>

<span class="token title important"><span class="token punctuation">#</span> Proporcionar enlaces o claves a cualquier ticket relevante, art\xEDculos u otros recursos</span>

<span class="token title important"><span class="token punctuation">#</span> Utilice issues y las URL completas de las solicitudes de fusi\xF3n en lugar de referencias cortas,</span>

<span class="token title important"><span class="token punctuation">#</span> ya que se muestran como texto plano fuera de GitLab</span>

<span class="token title important"><span class="token punctuation">#</span> --- COMMIT END ---</span>

<span class="token title important"><span class="token punctuation">#</span> --------------------</span>

<span class="token title important"><span class="token punctuation">#</span> Recuerde</span>

<span class="token title important"><span class="token punctuation">#</span> Capitalizar la l\xEDnea del asunto</span>

<span class="token title important"><span class="token punctuation">#</span> Usar el modo imperativo en la l\xEDnea del asunto</span>

<span class="token title important"><span class="token punctuation">#</span> No termine la l\xEDnea del asunto con un punto</span>

<span class="token title important"><span class="token punctuation">#</span> El asunto debe contener al menos 3 palabras</span>

<span class="token title important"><span class="token punctuation">#</span> Separar el tema del cuerpo con una l\xEDnea en blanco</span>

<span class="token title important"><span class="token punctuation">#</span> Commits que cambian 30 o m\xE1s l\xEDneas en al menos 3 archivos deben</span>

<span class="token title important"><span class="token punctuation">#</span> describir estos cambios en el cuerpo del commit</span>

<span class="token title important"><span class="token punctuation">#</span> No use Emojis</span>

<span class="token title important"><span class="token punctuation">#</span> Utilice el cuerpo para explicar qu\xE9 y por qu\xE9 en vez de c\xF3mo</span>

<span class="token title important"><span class="token punctuation">#</span> Puede usar m\xFAltiples l\xEDneas con &quot;-&quot; para incluir puntos en el cuerpo</span>

<span class="token title important"><span class="token punctuation">#</span> Para m\xE1s informaci\xF3n: https://chris.beams.io/posts/git-commit/</span>

<span class="token title important"><span class="token punctuation">#</span> --------------------</span>
</code></pre></div><h3 id="plantilla-para-mensajes-de-confirmacion" tabindex="-1">Plantilla para mensajes de confirmaci\xF3n <a class="header-anchor vp-link" href="#plantilla-para-mensajes-de-confirmacion" aria-hidden="true">#</a></h3><p>A continuaci\xF3n se muestra un mensaje de confirmaci\xF3n de plantilla para su referencia.</p><div class="language-md"><pre><code>feat(components): [button] Hice algo con bot\xF3n

Se espera un espacio en blanco entre el asunto y el cuerpo.(se espera un punto)
Describe tu cambio en una o varias l\xEDneas.
Capitaliza tu primera letra al iniciar una nueva l\xEDnea
Por favor, no exceda 72 caracteres por l\xEDnea, porque ser\xEDa m\xE1s dif\xEDcil de entender.

<span class="token list punctuation">-</span> Tambi\xE9n puedes a\xF1adir el s\xEDmbolo de lista para una mejor disposici\xF3n
</code></pre></div><p>Para el encabezado del tema, el formato es:</p><div class="language-"><pre><code>[type](scope): [messages]
</code></pre></div>`,9),k=n("Puede revisar los valores permitidos para "),h=e("strong",null,"type",-1),b=n(" y "),f=e("strong",null,"scope",-1),g=n(" en "),v={href:"https://github.com/element-plus/element-plus/blob/c2ee36a7fc72b17742d43ecdff4e2912c416141d/commitlint.config.js#L57",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},x=n("commitlint.config.js"),j=n(","),q=e("h3",{id:"enlaces-utiles",tabindex:"-1"},[n("Enlaces \xFAtiles "),e("a",{class:"header-anchor vp-link",href:"#enlaces-utiles","aria-hidden":"true"},"#")],-1),P={href:"https://about.gitlab.com/blog/2018/06/07/keeping-git-commit-history-clean/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},E=n("Manteniendo limpio el historial de git commit"),U='{"title":"Commit Examples","description":"","frontmatter":{"title":"Commit Examples","lang":"es-ES"},"headers":[{"level":2,"title":"Por qu\xE9 existe este cap\xEDtulo","slug":"por-que-existe-este-capitulo"},{"level":3,"title":"Regla para escribir mensaje de confirmaci\xF3n","slug":"regla-para-escribir-mensaje-de-confirmacion"},{"level":3,"title":"Plantilla para mensajes de confirmaci\xF3n","slug":"plantilla-para-mensajes-de-confirmacion"},{"level":3,"title":"Enlaces \xFAtiles","slug":"enlaces-utiles"}],"relativePath":"es-ES/guide/commit-examples.md","lastUpdated":null}',C={},V=Object.assign(C,{__name:"commit-examples",setup(S){return(T,y)=>{const a=l;return t(),o("div",null,[c,p,e("p",null,[r,e("a",u,[m,s(a,{class:"link-icon"})]),d]),_,e("p",null,[k,h,b,f,g,e("a",v,[x,s(a,{class:"link-icon"})]),j]),q,e("p",null,[e("a",P,[E,s(a,{class:"link-icon"})])])])}}});export{U as __pageData,V as default};
