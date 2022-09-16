import{o as t,c as e,e as n}from"./app.8668ef0f.js";const a=n(`<h1 id="commit-examples" tabindex="-1">Commit Examples <a class="header-anchor" href="#commit-examples" aria-hidden="true">#</a></h1><h2 id="why-this-chapter-exists" tabindex="-1">Why this chapter exists <a class="header-anchor" href="#why-this-chapter-exists" aria-hidden="true">#</a></h2><p>Please refer to <a href="https://www.conventionalcommits.org/" target="_blank" rel="noopener noreferrer">Conventional Commits</a> for more information.</p><p>A good commit message enables us:</p><ol><li>To understand what the contributor is trying to do</li><li>Automatically generates change log</li></ol><h3 id="rule-for-writing-commit-message" tabindex="-1">Rule for writing commit message <a class="header-anchor" href="#rule-for-writing-commit-message" aria-hidden="true">#</a></h3><div class="language-md"><pre><code><span class="token title important"><span class="token punctuation">#</span> (If applied, this commit will...) &lt;subject&gt; (Max 72 characters)</span>

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
</code></pre></div><h3 id="template-for-commit-messages" tabindex="-1">Template for commit messages <a class="header-anchor" href="#template-for-commit-messages" aria-hidden="true">#</a></h3><p>Below is a template commit message for your reference.</p><div class="language-md"><pre><code>feat(components): [button] I did something with button

Blank between subject and body is expected.(period is expected)
Describes your change in one line or multi-line.
Capitalize your first letter when starting a new line
Please do not exceeds 72 characters per line, because that would be harder to comprehend.

<span class="token list punctuation">-</span> You can also add bullet list symbol for better layout
</code></pre></div><p>For the subject header, the format is:</p><div class="language-"><pre><code>[type](scope): [messages]
</code></pre></div><p>You can checkout the allowed values for <strong>type</strong> and <strong>scope</strong> in <a href="https://github.com/element-plus/element-plus/blob/c2ee36a7fc72b17742d43ecdff4e2912c416141d/commitlint.config.js#L57" target="_blank" rel="noopener noreferrer">commitlint.config.js</a>,</p><h3 id="useful-links" tabindex="-1">Useful links <a class="header-anchor" href="#useful-links" aria-hidden="true">#</a></h3><p><a href="https://about.gitlab.com/blog/2018/06/07/keeping-git-commit-history-clean/" target="_blank" rel="noopener noreferrer">Keeping git commit history clean</a></p>`,15),s=[a],c='{"title":"Commit Examples","description":"","frontmatter":{},"headers":[{"level":2,"title":"Why this chapter exists","slug":"why-this-chapter-exists"},{"level":3,"title":"Rule for writing commit message","slug":"rule-for-writing-commit-message"},{"level":3,"title":"Template for commit messages","slug":"template-for-commit-messages"},{"level":3,"title":"Useful links","slug":"useful-links"}],"relativePath":"en-US/guide/commit-examples.md","lastUpdated":1663304725000}',o={},m=Object.assign(o,{__name:"commit-examples",setup(i){return(p,l)=>(t(),e("div",null,s))}});export{c as __pageData,m as default};
