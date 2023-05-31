import{_ as a,o as t,c as s,O as e}from"./chunks/framework.8d740aeb.js";const m=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"安装.md","filePath":"安装.md"}'),o={name:"安装.md"},l=e(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><h2 id="命令行工具和图形界面的选择" tabindex="-1">命令行工具和图形界面的选择 <a class="header-anchor" href="#命令行工具和图形界面的选择" aria-label="Permalink to &quot;命令行工具和图形界面的选择&quot;">​</a></h2><p>要使用Git有两种方式：使用命令行和使用图形界面。笔者更推荐使用命令行工具，原因如下：</p><ul><li><p>命令行的命令是不变的、通用的，而图形界面有很多，或许我们碰到了一个更好的图形界面又要去再次学习，这是浪费精力的。</p></li><li><p>学习命令行能够让我们“知其所以然”，了解版本控制的核心原理。这条原则对其它的软件也同样适用。</p></li><li><p>命令行效率更高。很多人可能觉得图形界面的效率更高，其实不然，与其满屏幕的移动鼠标、寻找按钮，不如一行命令或一个脚本来得轻快。当然，这条原则对其它软件可能不适用。</p></li></ul><h2 id="安装git" tabindex="-1">安装Git <a class="header-anchor" href="#安装git" aria-label="Permalink to &quot;安装Git&quot;">​</a></h2><p>前面我们决定使用Git命令行，现在就需要安装Git了。</p><p>访问 <code>https://git-scm.com/</code>，在页面的明显位置有<strong>Download for Windows</strong>按钮，点击下载安装包，然后一步步使用默认设置安装即可。</p><p>可以选择安装完整版或便携版，如果安装便携版，需要解压之后将git.exe所在的目录添加到PATH环境变量，不过由于我们之后会频繁的用到Git命令，所以更推荐安装完整版。</p><h2 id="检查" tabindex="-1">检查 <a class="header-anchor" href="#检查" aria-label="Permalink to &quot;检查&quot;">​</a></h2><p>安装好Git之后，打开终端工具，例如Powershell，输入如下几个命令检测是否安装成功：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 查看帮助</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 查看git版本号</span></span></code></pre></div><p>如果没有错误信息，则表示安装成功。</p>`,12),n=[l];function i(p,r,c,d,h,_){return t(),s("div",null,n)}const C=a(o,[["render",i]]);export{m as __pageData,C as default};
