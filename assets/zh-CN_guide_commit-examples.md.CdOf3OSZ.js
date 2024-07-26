import{_ as l}from"./chunks/theme.B80B4RRr.js";import{c as t,a as s,y as a,X as i,aG as e,o as h}from"./chunks/framework.lYNz_Rcs.js";const p=s("h1",{id:"提交示例",tabindex:"-1"},[i("提交示例 "),s("a",{class:"header-anchor vp-link",href:"#提交示例","aria-label":'Permalink to "提交示例"'},"​")],-1),o=s("h2",{id:"为什么存在这个章节",tabindex:"-1"},[i("为什么存在这个章节? "),s("a",{class:"header-anchor vp-link",href:"#为什么存在这个章节","aria-label":'Permalink to "为什么存在这个章节?"'},"​")],-1),k=i("详情请参阅 "),d={href:"https://www.conventionalcommits.org/",class:"vp-link",target:"_blank",rel:"noreferrer"},c=i("通用惯例"),g=i("。"),r=e(`<p>一个好的 Git 提交信息能够使我们：</p><ol><li>了解贡献者试图做什么</li><li>自动生成更改日志</li></ol><h3 id="写入提交消息的规则" tabindex="-1">写入提交消息的规则 <a class="header-anchor vp-link" href="#写入提交消息的规则" aria-label="Permalink to &quot;写入提交消息的规则&quot;">​</a></h3><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># (如果通过, 当前提交会实现...) &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">subject</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">&gt; (最多 72 个字符)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># |&lt;---- 使用最多 72 个字符 ----&gt;|</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 解释清楚为什么要作出此修改</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># |&lt;---- 尝试将每一行控制在 72 个字符以内 ----&gt;|</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 提供链接、相关标签关键词、文章或其他资源信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 使用issue和合并请求的全链接地址替代部分链接</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 因为它们在GitLab之外显示为纯文本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># --- 提交结束 ---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># --------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 不要忘记</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 将主题行大写(英文标题)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 主题行使用命令式语气</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 不要在主题行末尾带有一段时间</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 主题行至少包含 3 个单词</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 主题和空行之间使用空行隔开</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 当提交的更改行数超过30行或至少3个文件需要发生修改时</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 应在提交的主体信息中说明修改的详情</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 不要使用 Emojis 表情符号</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 在主体信息中解释提交的是什么内容, 为什么提交, 如何实现</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 每行以 &quot;-&quot; 开头, 写入多行可描述信息要点</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 详见: https://chris.beams.io/posts/git-commit/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># --------------------</span></span></code></pre></div><h3 id="提交消息的模板" tabindex="-1">提交消息的模板 <a class="header-anchor vp-link" href="#提交消息的模板" aria-label="Permalink to &quot;提交消息的模板&quot;">​</a></h3><p>下面是供参考的模板提交消息。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">feat(components): [</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] 我用按钮实现了某些功能</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">主体行和主体内容之间用空白行隔开(可以有预期时间)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">通过一行或多行描述你的修改信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">每一行的首字母大写</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">且每一行的总字符数限制在72个以内最优, 超过了将不易于他人理解</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 你也可以通过添加子项列表符号来为内容布局</span></span></code></pre></div><p>主题标题的格式是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[type](scope 域): [messages]</span></span></code></pre></div>`,9),b=i("关于"),_=s("strong",null,"type",-1),f=i(" 和 "),C=s("strong",null,"scope",-1),m=i("属性允许的值可以在 "),u={href:"https://github.com/element-plus/element-plus/blob/c2ee36a7fc72b17742d43ecdff4e2912c416141d/commitlint.config.js#L57",class:"vp-link",target:"_blank",rel:"noreferrer"},w=i("commitlint.config.js"),F=i(" 文件内查看"),y=s("h3",{id:"相关链接",tabindex:"-1"},[i("相关链接 "),s("a",{class:"header-anchor vp-link",href:"#相关链接","aria-label":'Permalink to "相关链接"'},"​")],-1),E={href:"https://about.gitlab.com/blog/2018/06/07/keeping-git-commit-history-clean/",class:"vp-link",target:"_blank",rel:"noreferrer"},v=i("保持 git 提交历史简洁"),V=JSON.parse('{"title":"提交示例","description":"","frontmatter":{"title":"提交示例","lang":"zh-CN"},"headers":[{"level":2,"title":"为什么存在这个章节?","slug":"为什么存在这个章节","link":"#为什么存在这个章节","children":[{"level":3,"title":"写入提交消息的规则","slug":"写入提交消息的规则","link":"#写入提交消息的规则","children":[]},{"level":3,"title":"提交消息的模板","slug":"提交消息的模板","link":"#提交消息的模板","children":[]},{"level":3,"title":"相关链接","slug":"相关链接","link":"#相关链接","children":[]}]}],"relativePath":"zh-CN/guide/commit-examples.md","filePath":"zh-CN/guide/commit-examples.md","lastUpdated":null}'),B={name:"zh-CN/guide/commit-examples.md"},j=Object.assign(B,{setup(x){return(N,P)=>{const n=l;return h(),t("div",null,[p,o,s("p",null,[k,s("a",d,[c,a(n,{class:"link-icon"})]),g]),r,s("p",null,[b,_,f,C,m,s("a",u,[w,a(n,{class:"link-icon"})]),F]),y,s("p",null,[s("a",E,[v,a(n,{class:"link-icon"})])])])}}});export{V as __pageData,j as default};
