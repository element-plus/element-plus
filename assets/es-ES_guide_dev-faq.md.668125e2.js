import{o as e,c as n,e as s}from"./app.8668ef0f.js";const a=s(`<h1 id="development-faq" tabindex="-1">Development FAQ <a class="header-anchor" href="#development-faq" aria-hidden="true">#</a></h1><p>Here are the problems that are easy to encounter in development.</p><h2 id="if-you-encounter-dependency-related-issues" tabindex="-1">If you encounter dependency related issues <a class="header-anchor" href="#if-you-encounter-dependency-related-issues" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token function">rm</span> -fr node_modules
<span class="token function">pnpm</span> i
</code></pre></div><h2 id="link-local-dependencies" tabindex="-1">Link local dependencies <a class="header-anchor" href="#link-local-dependencies" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token comment"># get dist</span>
<span class="token function">pnpm</span> build
<span class="token builtin class-name">cd</span> dist/element-plus
<span class="token comment"># set cur element-plus to global \`node_modules\`</span>
<span class="token function">pnpm</span> <span class="token function">link</span> --global
<span class="token comment"># for esm we also need link element-plus for dist</span>
<span class="token function">pnpm</span> <span class="token function">link</span> --global element-plus

<span class="token comment"># go to your project, link to \`element-plus\`</span>
<span class="token builtin class-name">cd</span> your-project
<span class="token function">pnpm</span> <span class="token function">link</span> --global element-plus
</code></pre></div><blockquote><p>More info see <a href="https://pnpm.io/cli/link" target="_blank" rel="noopener noreferrer">pnpm link</a>.</p></blockquote><h2 id="theme" tabindex="-1">Theme <a class="header-anchor" href="#theme" aria-hidden="true">#</a></h2><p>We should not write Chinese comments in scss files.</p><p>It will generate warning <code>@charset &quot;UTF-8&quot;;</code> in the header of css file when built with vite.</p><blockquote><p>More info see <a href="https://github.com/element-plus/element-plus/issues/3219" target="_blank" rel="noopener noreferrer">#3219</a>.</p></blockquote>`,11),t=[a],r='{"title":"Development FAQ","description":"","frontmatter":{},"headers":[{"level":2,"title":"If you encounter dependency related issues","slug":"if-you-encounter-dependency-related-issues"},{"level":2,"title":"Link local dependencies","slug":"link-local-dependencies"},{"level":2,"title":"Theme","slug":"theme"}],"relativePath":"en-US/guide/dev-faq.md","lastUpdated":1663304725000}',o={},d=Object.assign(o,{__name:"dev-faq",setup(l){return(c,p)=>(e(),n("div",null,t))}});export{r as __pageData,d as default};
