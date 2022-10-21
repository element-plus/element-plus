import{o as a,c as o,b as t,a as s,d as e,e as i,_ as l}from"./app.b35c1fbb.js";const p=t("hr",null,null,-1),c=t("p",null,"title: Commit Examples lang: en-US",-1),r=t("hr",null,null,-1),m=t("h1",{id:"commit-examples",tabindex:"-1"},[e("Commit Examples "),t("a",{class:"header-anchor vp-link",href:"#commit-examples","aria-hidden":"true"},"#")],-1),u=t("h2",{id:"why-this-chapter-exists",tabindex:"-1"},[e("Why this chapter exists "),t("a",{class:"header-anchor vp-link",href:"#why-this-chapter-exists","aria-hidden":"true"},"#")],-1),h=e("Please refer to "),d={href:"https://www.conventionalcommits.org/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},_=e("Conventional Commits"),k=e(" for more information."),g=i(`<p>A good commit message enables us:</p><ol><li>To understand what the contributor is trying to do</li><li>Automatically generates change log</li></ol><h3 id="rule-for-writing-commit-message" tabindex="-1">Rule for writing commit message <a class="header-anchor vp-link" href="#rule-for-writing-commit-message" aria-hidden="true">#</a></h3><div class="language-md"><pre><code><span class="token title important"><span class="token punctuation">#</span> (If applied, this commit will...) &lt;subject&gt; (Max 72 characters)</span>

<span class="token title important"><span class="token punctuation">#</span> |&lt;---- Using a Maximum Of 72 Characters ----&gt;|</span>

<span class="token title important"><span class="token punctuation">#</span> Explain why this change is being made</span>

<span class="token title important"><span class="token punctuation">#</span> |&lt;---- Try To Limit Each Line to a Maximum Of 72 Characters ----&gt;|</span>

<span class="token title important"><span class="token punctuation">#</span> Provide links or keys to any relevant tickets, articles or other resources</span>

<span class="token title important"><span class="token punctuation">#</span> Use issues and merge requests&#39; full URLs instead of short references,</span>

<span class="token title important"><span class="token punctuation">#</span> as they are displayed as plain text outside of GitLab</span>

<span class="token title important"><span class="token punctuation">#</span> --- COMMIT END ---</span>

<span class="token title important"><span class="token punctuation">#</span> --------------------</span>

<span class="token title important"><span class="token punctuation">#</span> Remember to</span>

<span class="token title important"><span class="token punctuation">#</span> Capitalize the subject line</span>

<span class="token title important"><span class="token punctuation">#</span> Use the imperative mood in the subject line</span>

<span class="token title important"><span class="token punctuation">#</span> Do not end the subject line with a period</span>

<span class="token title important"><span class="token punctuation">#</span> Subject must contain at least 3 words</span>

<span class="token title important"><span class="token punctuation">#</span> Separate subject from body with a blank line</span>

<span class="token title important"><span class="token punctuation">#</span> Commits that change 30 or more lines across at least 3 files should</span>

<span class="token title important"><span class="token punctuation">#</span> describe these changes in the commit body</span>

<span class="token title important"><span class="token punctuation">#</span> Do not use Emojis</span>

<span class="token title important"><span class="token punctuation">#</span> Use the body to explain what and why vs. how</span>

<span class="token title important"><span class="token punctuation">#</span> Can use multiple lines with &quot;-&quot; for bullet points in body</span>

<span class="token title important"><span class="token punctuation">#</span> For more information: https://chris.beams.io/posts/git-commit/</span>

<span class="token title important"><span class="token punctuation">#</span> --------------------</span>
</code></pre></div><h3 id="template-for-commit-messages" tabindex="-1">Template for commit messages <a class="header-anchor vp-link" href="#template-for-commit-messages" aria-hidden="true">#</a></h3><p>Below is a template commit message for your reference.</p><div class="language-md"><pre><code>feat(components): [button] I did something with button

Blank between subject and body is expected.(period is expected)
Describes your change in one line or multi-line.
Capitalize your first letter when starting a new line
Please do not exceeds 72 characters per line, because that would be harder to comprehend.

<span class="token list punctuation">-</span> You can also add bullet list symbol for better layout
</code></pre></div><p>For the subject header, the format is:</p><div class="language-"><pre><code>[type](scope): [messages]
</code></pre></div>`,9),f=e("You can checkout the allowed values for "),b=t("strong",null,"type",-1),x=e(" and "),w=t("strong",null,"scope",-1),y=e(" in "),v={href:"https://github.com/element-plus/element-plus/blob/c2ee36a7fc72b17742d43ecdff4e2912c416141d/commitlint.config.js#L57",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},C=e("commitlint.config.js"),T=e(","),j=t("h3",{id:"useful-links",tabindex:"-1"},[e("Useful links "),t("a",{class:"header-anchor vp-link",href:"#useful-links","aria-hidden":"true"},"#")],-1),E={href:"https://about.gitlab.com/blog/2018/06/07/keeping-git-commit-history-clean/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},U=e("Keeping git commit history clean"),A='{"title":"Commit Examples","description":"","frontmatter":{},"headers":[{"level":2,"title":"Why this chapter exists","slug":"why-this-chapter-exists"},{"level":3,"title":"Rule for writing commit message","slug":"rule-for-writing-commit-message"},{"level":3,"title":"Template for commit messages","slug":"template-for-commit-messages"},{"level":3,"title":"Useful links","slug":"useful-links"}],"relativePath":"es-ES/guide/commit-examples.md","lastUpdated":null}',S={},B=Object.assign(S,{__name:"commit-examples",setup(D){return(N,P)=>{const n=l;return a(),o("div",null,[p,c,r,m,u,t("p",null,[h,t("a",d,[_,s(n,{class:"link-icon"})]),k]),g,t("p",null,[f,b,x,w,y,t("a",v,[C,s(n,{class:"link-icon"})]),T]),j,t("p",null,[t("a",E,[U,s(n,{class:"link-icon"})])])])}}});export{A as __pageData,B as default};
