import{o as e,c as o,b as n,a,d as t,e as p,_ as i}from"./app.96c7576e.js";const l=n("h1",{id:"\u63D0\u4EA4\u793A\u4F8B",tabindex:"-1"},[t("\u63D0\u4EA4\u793A\u4F8B "),n("a",{class:"header-anchor vp-link",href:"#\u63D0\u4EA4\u793A\u4F8B","aria-hidden":"true"},"#")],-1),c=n("h2",{id:"\u4E3A\u4EC0\u4E48\u5B58\u5728\u8FD9\u4E2A\u7AE0\u8282",tabindex:"-1"},[t("\u4E3A\u4EC0\u4E48\u5B58\u5728\u8FD9\u4E2A\u7AE0\u8282? "),n("a",{class:"header-anchor vp-link",href:"#\u4E3A\u4EC0\u4E48\u5B58\u5728\u8FD9\u4E2A\u7AE0\u8282","aria-hidden":"true"},"#")],-1),r=t("\u8BE6\u60C5\u8BF7\u53C2\u9605 "),u={href:"https://www.conventionalcommits.org/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},_=t("\u901A\u7528\u60EF\u4F8B"),d=t("\u3002"),k=p(`<p>\u4E00\u4E2A\u597D\u7684 Git \u63D0\u4EA4\u4FE1\u606F\u80FD\u591F\u4F7F\u6211\u4EEC\uFF1A</p><ol><li>\u4E86\u89E3\u8D21\u732E\u8005\u8BD5\u56FE\u505A\u4EC0\u4E48</li><li>\u81EA\u52A8\u751F\u6210\u66F4\u6539\u65E5\u5FD7</li></ol><h3 id="\u5199\u5165\u63D0\u4EA4\u6D88\u606F\u7684\u89C4\u5219" tabindex="-1">\u5199\u5165\u63D0\u4EA4\u6D88\u606F\u7684\u89C4\u5219 <a class="header-anchor vp-link" href="#\u5199\u5165\u63D0\u4EA4\u6D88\u606F\u7684\u89C4\u5219" aria-hidden="true">#</a></h3><div class="language-md"><pre><code><span class="token title important"><span class="token punctuation">#</span> (\u5982\u679C\u901A\u8FC7, \u5F53\u524D\u63D0\u4EA4\u4F1A\u5B9E\u73B0...) &lt;subject&gt; (\u6700\u591A 72 \u4E2A\u5B57\u7B26)</span>

<span class="token title important"><span class="token punctuation">#</span> |&lt;---- \u4F7F\u7528\u6700\u591A 72 \u4E2A\u5B57\u7B26 ----&gt;|</span>

<span class="token title important"><span class="token punctuation">#</span> \u89E3\u91CA\u6E05\u695A\u4E3A\u4EC0\u4E48\u8981\u4F5C\u51FA\u6B64\u4FEE\u6539</span>

<span class="token title important"><span class="token punctuation">#</span> |&lt;---- \u5C1D\u8BD5\u5C06\u6BCF\u4E00\u884C\u63A7\u5236\u5728 72 \u4E2A\u5B57\u7B26\u4EE5\u5185 ----&gt;|</span>

<span class="token title important"><span class="token punctuation">#</span> \u63D0\u4F9B\u94FE\u63A5\u3001\u76F8\u5173\u6807\u7B7E\u5173\u952E\u8BCD\u3001\u6587\u7AE0\u6216\u5176\u4ED6\u8D44\u6E90\u4FE1\u606F</span>

<span class="token title important"><span class="token punctuation">#</span> \u4F7F\u7528issue\u548C\u5408\u5E76\u8BF7\u6C42\u7684\u5168\u94FE\u63A5\u5730\u5740\u66FF\u4EE3\u90E8\u5206\u94FE\u63A5</span>

<span class="token title important"><span class="token punctuation">#</span> \u56E0\u4E3A\u5B83\u4EEC\u5728GitLab\u4E4B\u5916\u663E\u793A\u4E3A\u7EAF\u6587\u672C</span>

<span class="token title important"><span class="token punctuation">#</span> --- \u63D0\u4EA4\u7ED3\u675F ---</span>

<span class="token title important"><span class="token punctuation">#</span> --------------------</span>

<span class="token title important"><span class="token punctuation">#</span> \u4E0D\u8981\u5FD8\u8BB0</span>

<span class="token title important"><span class="token punctuation">#</span> \u5C06\u4E3B\u9898\u884C\u5927\u5199(\u82F1\u6587\u6807\u9898)</span>

<span class="token title important"><span class="token punctuation">#</span> \u4E3B\u9898\u884C\u4F7F\u7528\u547D\u4EE4\u5F0F\u8BED\u6C14</span>

<span class="token title important"><span class="token punctuation">#</span> \u4E0D\u8981\u5728\u4E3B\u9898\u884C\u672B\u5C3E\u5E26\u6709\u4E00\u6BB5\u65F6\u95F4</span>

<span class="token title important"><span class="token punctuation">#</span> \u4E3B\u9898\u884C\u81F3\u5C11\u5305\u542B 3 \u4E2A\u5355\u8BCD</span>

<span class="token title important"><span class="token punctuation">#</span> \u4E3B\u9898\u548C\u7A7A\u884C\u4E4B\u95F4\u4F7F\u7528\u7A7A\u884C\u9694\u5F00</span>

<span class="token title important"><span class="token punctuation">#</span> \u5F53\u63D0\u4EA4\u7684\u66F4\u6539\u884C\u6570\u8D85\u8FC730\u884C\u6216\u81F3\u5C113\u4E2A\u6587\u4EF6\u9700\u8981\u53D1\u751F\u4FEE\u6539\u65F6</span>

<span class="token title important"><span class="token punctuation">#</span> \u5E94\u5728\u63D0\u4EA4\u7684\u4E3B\u4F53\u4FE1\u606F\u4E2D\u8BF4\u660E\u4FEE\u6539\u7684\u8BE6\u60C5</span>

<span class="token title important"><span class="token punctuation">#</span> \u4E0D\u8981\u4F7F\u7528 Emojis \u8868\u60C5\u7B26\u53F7</span>

<span class="token title important"><span class="token punctuation">#</span> \u5728\u4E3B\u4F53\u4FE1\u606F\u4E2D\u89E3\u91CA\u63D0\u4EA4\u7684\u662F\u4EC0\u4E48\u5185\u5BB9, \u4E3A\u4EC0\u4E48\u63D0\u4EA4, \u5982\u4F55\u5B9E\u73B0</span>

<span class="token title important"><span class="token punctuation">#</span> \u6BCF\u884C\u4EE5 &quot;-&quot; \u5F00\u5934, \u5199\u5165\u591A\u884C\u53EF\u63CF\u8FF0\u4FE1\u606F\u8981\u70B9</span>

<span class="token title important"><span class="token punctuation">#</span> \u8BE6\u89C1: https://chris.beams.io/posts/git-commit/</span>

<span class="token title important"><span class="token punctuation">#</span> --------------------</span>
</code></pre></div><h3 id="\u63D0\u4EA4\u6D88\u606F\u7684\u6A21\u677F" tabindex="-1">\u63D0\u4EA4\u6D88\u606F\u7684\u6A21\u677F <a class="header-anchor vp-link" href="#\u63D0\u4EA4\u6D88\u606F\u7684\u6A21\u677F" aria-hidden="true">#</a></h3><p>\u4E0B\u9762\u662F\u4F9B\u53C2\u8003\u7684\u6A21\u677F\u63D0\u4EA4\u6D88\u606F\u3002</p><div class="language-md"><pre><code>feat(components): [button] \u6211\u7528\u6309\u94AE\u5B9E\u73B0\u4E86\u67D0\u4E9B\u529F\u80FD

\u4E3B\u4F53\u884C\u548C\u4E3B\u4F53\u5185\u5BB9\u4E4B\u95F4\u7528\u7A7A\u767D\u884C\u9694\u5F00(\u53EF\u4EE5\u6709\u9884\u671F\u65F6\u95F4)
\u901A\u8FC7\u4E00\u884C\u6216\u591A\u884C\u63CF\u8FF0\u4F60\u7684\u4FEE\u6539\u4FE1\u606F
\u6BCF\u4E00\u884C\u7684\u9996\u5B57\u6BCD\u5927\u5199
\u4E14\u6BCF\u4E00\u884C\u7684\u603B\u5B57\u7B26\u6570\u9650\u5236\u572872\u4E2A\u4EE5\u5185\u6700\u4F18, \u8D85\u8FC7\u4E86\u5C06\u4E0D\u6613\u4E8E\u4ED6\u4EBA\u7406\u89E3

<span class="token list punctuation">-</span> \u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0\u5B50\u9879\u5217\u8868\u7B26\u53F7\u6765\u4E3A\u5185\u5BB9\u5E03\u5C40
</code></pre></div><p>\u4E3B\u9898\u6807\u9898\u7684\u683C\u5F0F\u662F\uFF1A</p><div class="language-"><pre><code>[type](scope \u57DF): [messages]
</code></pre></div>`,9),h=t("\u5173\u4E8E"),m=n("strong",null,"type",-1),g=t(" \u548C "),f=n("strong",null,"scope",-1),b=t("\u5C5E\u6027\u5141\u8BB8\u7684\u503C\u53EF\u4EE5\u5728 "),v={href:"https://github.com/element-plus/element-plus/blob/c2ee36a7fc72b17742d43ecdff4e2912c416141d/commitlint.config.js#L57",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},x=t("commitlint.config.js"),N=t(" \u6587\u4EF6\u5185\u67E5\u770B"),T=n("h3",{id:"\u76F8\u5173\u94FE\u63A5",tabindex:"-1"},[t("\u76F8\u5173\u94FE\u63A5 "),n("a",{class:"header-anchor vp-link",href:"#\u76F8\u5173\u94FE\u63A5","aria-hidden":"true"},"#")],-1),V={href:"https://about.gitlab.com/blog/2018/06/07/keeping-git-commit-history-clean/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},j=t("\u4FDD\u6301 git \u63D0\u4EA4\u5386\u53F2\u7B80\u6D01"),B='{"title":"\u63D0\u4EA4\u793A\u4F8B","description":"","frontmatter":{"title":"\u63D0\u4EA4\u793A\u4F8B","lang":"zh-CN"},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u5B58\u5728\u8FD9\u4E2A\u7AE0\u8282?","slug":"\u4E3A\u4EC0\u4E48\u5B58\u5728\u8FD9\u4E2A\u7AE0\u8282"},{"level":3,"title":"\u5199\u5165\u63D0\u4EA4\u6D88\u606F\u7684\u89C4\u5219","slug":"\u5199\u5165\u63D0\u4EA4\u6D88\u606F\u7684\u89C4\u5219"},{"level":3,"title":"\u63D0\u4EA4\u6D88\u606F\u7684\u6A21\u677F","slug":"\u63D0\u4EA4\u6D88\u606F\u7684\u6A21\u677F"},{"level":3,"title":"\u76F8\u5173\u94FE\u63A5","slug":"\u76F8\u5173\u94FE\u63A5"}],"relativePath":"zh-CN/guide/commit-examples.md","lastUpdated":null}',C={},E=Object.assign(C,{__name:"commit-examples",setup(S){return(w,y)=>{const s=i;return e(),o("div",null,[l,c,n("p",null,[r,n("a",u,[_,a(s,{class:"link-icon"})]),d]),k,n("p",null,[h,m,g,f,b,n("a",v,[x,a(s,{class:"link-icon"})]),N]),T,n("p",null,[n("a",V,[j,a(s,{class:"link-icon"})])])])}}});export{B as __pageData,E as default};
