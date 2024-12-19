import{_ as s,o as a,c as n,U as l}from"./chunks/framework.316ef557.js";const D=JSON.parse('{"title":"常用 Git 命令清单","description":"","frontmatter":{},"headers":[],"relativePath":"notes/utils/常用 Git 命令清单.md","filePath":"notes/utils/常用 Git 命令清单.md","lastUpdated":1689776313000}'),p={name:"notes/utils/常用 Git 命令清单.md"},e=l(`<h1 id="常用-git-命令清单" tabindex="-1">常用 Git 命令清单 <a class="header-anchor" href="#常用-git-命令清单" aria-label="Permalink to &quot;常用 Git 命令清单&quot;">​</a></h1><blockquote><ul><li>Workspace：工作区</li><li>Index / Stage：暂存区</li><li>Repository：仓库区（或本地仓库）</li><li>Remote：远程仓库</li></ul></blockquote><h2 id="一、新建代码库" tabindex="-1">一、新建代码库 <a class="header-anchor" href="#一、新建代码库" aria-label="Permalink to &quot;一、新建代码库&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 在当前目录新建一个Git代码库</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git init</span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个目录，将其初始化为Git代码库</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git init [project-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 下载一个项目和它的整个代码历史</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git clone [url]</span></span></code></pre></div><h3 id="二、配置" tabindex="-1">二、配置 <a class="header-anchor" href="#二、配置" aria-label="Permalink to &quot;二、配置&quot;">​</a></h3><p>Git的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 显示当前的Git配置</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config --list</span></span>
<span class="line"><span style="color:#A6ACCD;"># 编辑Git配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config -e [--global]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置提交代码时的用户信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config [--global] user.name &quot;[name]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config [--global] user.email &quot;[email address]&quot;</span></span></code></pre></div><h3 id="三、增加-删除文件" tabindex="-1">三、增加/删除文件 <a class="header-anchor" href="#三、增加-删除文件" aria-label="Permalink to &quot;三、增加/删除文件&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 添加指定文件到暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add [file1] [file2] ...</span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加指定目录到暂存区，包括子目录</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add [dir]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加当前目录的所有文件到暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add .</span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加每个变化前，都会要求确认</span></span>
<span class="line"><span style="color:#A6ACCD;"># 对于同一个文件的多处变化，可以实现分次提交</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add -p</span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git rm [file1] [file2] ...</span></span>
<span class="line"><span style="color:#A6ACCD;"># 停止追踪指定文件，但该文件会保留在工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git rm --cached [file]</span></span>
<span class="line"><span style="color:#A6ACCD;">  git rm -r --cached [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 改名文件，并且将这个改名放入暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git mv [file-original] [file-renamed]</span></span></code></pre></div><h3 id="四、代码提交" tabindex="-1">四、代码提交 <a class="header-anchor" href="#四、代码提交" aria-label="Permalink to &quot;四、代码提交&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;"># 提交暂存区到仓库区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit -m [message]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 提交暂存区的指定文件到仓库区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit [file1] [file2] ... -m [message]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 提交工作区自上次commit之后的变化，直接到仓库区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit -a</span></span>
<span class="line"><span style="color:#A6ACCD;"># 提交时显示所有diff信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit -v</span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用一次新的commit，替代上一次提交</span></span>
<span class="line"><span style="color:#A6ACCD;"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit --amend -m [message]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 重做上一次commit，并包括指定文件的新变化</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit --amend [file1] [file2] ...</span></span></code></pre></div><h3 id="五、分支" tabindex="-1">五、分支 <a class="header-anchor" href="#五、分支" aria-label="Permalink to &quot;五、分支&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 列出所有本地分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch</span></span>
<span class="line"><span style="color:#A6ACCD;"># 列出所有远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -r</span></span>
<span class="line"><span style="color:#A6ACCD;"># 列出所有本地分支和远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -a</span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个分支，并切换到该分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout -b [branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个分支，指向指定commit</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch [branch] [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch --track [branch] [remote-branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 切换到指定分支，并更新工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 切换到上一个分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout -</span></span>
<span class="line"><span style="color:#A6ACCD;"># 建立追踪关系，在现有分支与指定的远程分支之间</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch --set-upstream [branch] [remote-branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 合并指定分支到当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git merge [branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 选择一个commit，合并进当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git cherry-pick [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -d [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push origin --delete [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -dr [remote/branch]</span></span></code></pre></div><h3 id="六、标签" tabindex="-1">六、标签 <a class="header-anchor" href="#六、标签" aria-label="Permalink to &quot;六、标签&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 列出所有tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git tag</span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个tag在当前commit</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git tag [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个tag在指定commit</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git tag [tag] [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除本地tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git tag -d [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除远程tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push origin :refs/tags/[tagName]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看tag信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git show [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 提交指定tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push [remote] [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 提交所有tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push [remote] --tags</span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout -b [branch] [tag]</span></span></code></pre></div><h3 id="七、查看信息" tabindex="-1">七、查看信息 <a class="header-anchor" href="#七、查看信息" aria-label="Permalink to &quot;七、查看信息&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;"># 显示有变更的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git status</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示当前分支的版本历史</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log --stat</span></span>
<span class="line"><span style="color:#A6ACCD;"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log -S [keyword]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示某个commit之后的所有变动，每个commit占据一行</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log [tag] HEAD --pretty=format:%s</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log [tag] HEAD --grep feature</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log --follow [file]</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git whatchanged [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log -p [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示过去5次提交</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log -5 --pretty --oneline</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示所有提交过的用户，按提交次数排序</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git shortlog -sn</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示指定文件是什么人在什么时间修改过</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git blame [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示暂存区和上一个commit的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff --cached [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff HEAD</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示两次提交之间的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff [first-branch]...[second-branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示今天你写了多少行代码</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff --shortstat &quot;@{0 day ago}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示某次提交的元数据和内容变化</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git show [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示某次提交发生变化的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git show --name-only [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示某次提交时，某个文件的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git show [commit]:[filename]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示当前分支的最近几次提交</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git reflog</span></span></code></pre></div><h3 id="八、远程同步" tabindex="-1">八、远程同步 <a class="header-anchor" href="#八、远程同步" aria-label="Permalink to &quot;八、远程同步&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 下载远程仓库的所有变动</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git fetch [remote]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示所有远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git remote -v</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示某个远程仓库的信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git remote show [remote]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 增加一个新的远程仓库，并命名</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git remote add [shortname] [url]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 取回远程仓库的变化，并与本地分支合并</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git pull [remote] [branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 上传本地指定分支到远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push [remote] [branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push [remote] --force</span></span>
<span class="line"><span style="color:#A6ACCD;"># 推送所有分支到远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push [remote] --all</span></span></code></pre></div><h3 id="九、撤销" tabindex="-1">九、撤销 <a class="header-anchor" href="#九、撤销" aria-label="Permalink to &quot;九、撤销&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 恢复暂存区的指定文件到工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 恢复某个commit的指定文件到暂存区和工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout [commit] [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 恢复暂存区的所有文件到工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout .</span></span>
<span class="line"><span style="color:#A6ACCD;"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 重置暂存区与工作区，与上一次commit保持一致</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset --hard</span></span>
<span class="line"><span style="color:#A6ACCD;"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset --hard [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset --keep [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个commit，用来撤销指定commit</span></span>
<span class="line"><span style="color:#A6ACCD;"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git revert [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 暂时将未提交的变化移除，稍后再移入</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git stash</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git stash pop</span></span></code></pre></div><h3 id="十、其他" tabindex="-1">十、其他 <a class="header-anchor" href="#十、其他" aria-label="Permalink to &quot;十、其他&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 生成一个可供发布的压缩包</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git archive</span></span></code></pre></div><h2 id="更换git远程仓库地址" tabindex="-1">更换git远程仓库地址 <a class="header-anchor" href="#更换git远程仓库地址" aria-label="Permalink to &quot;更换git远程仓库地址&quot;">​</a></h2><h3 id="通过命令直接修改远程仓库地址" tabindex="-1">通过命令直接修改远程仓库地址 <a class="header-anchor" href="#通过命令直接修改远程仓库地址" aria-label="Permalink to &quot;通过命令直接修改远程仓库地址&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote 查看所有远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote xxx 查看指定远程仓库地址</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote set-url origin 你新的远程仓库地址</span></span></code></pre></div><h3 id="先删除在添加你的远程仓库" tabindex="-1">先删除在添加你的远程仓库 <a class="header-anchor" href="#先删除在添加你的远程仓库" aria-label="Permalink to &quot;先删除在添加你的远程仓库&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote rm origin</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add origin 你的新远程仓库地址</span></span></code></pre></div>`,28),o=[e];function t(c,i,r,C,A,y){return a(),n("div",null,o)}const m=s(p,[["render",t]]);export{D as __pageData,m as default};
