import{_ as e,o as n,c as o,z as t,a as i}from"./chunks/framework.8d740aeb.js";const b=JSON.parse('{"title":"使用git clone 而不是 git init","description":"","frontmatter":{},"headers":[],"relativePath":"使用git-clone而不是git-init.md","filePath":"使用git-clone而不是git-init.md"}'),c={name:"使用git-clone而不是git-init.md"},a=t("h1",{id:"使用git-clone-而不是-git-init",tabindex:"-1"},[i("使用"),t("code",null,"git clone"),i(" 而不是 "),t("code",null,"git init"),i(),t("a",{class:"header-anchor",href:"#使用git-clone-而不是-git-init","aria-label":'Permalink to "使用`git clone` 而不是 `git init`"'},"​")],-1),l=t("p",null,"由于大多数情况下我们是要将本地仓库推送到远程Github仓库，所以推荐先在Github初始化好仓库，然后拷贝仓库地址，使用git clone。因为这样在本地的.git文件夹内就已经包含了远程地址，之后在本地完成编辑和提交后直接使用git push就可以推送到克隆的那个仓库。",-1),s=t("p",null,"如果使用git init，就要事先使用git remote添加远程仓库，而且很容易造成本地仓库和远程仓库的冲突。",-1),g=t("p",null,"因此，推荐使用git clone而不是git init。",-1),r=[a,l,s,g];function _(d,h,p,u,m,f){return n(),o("div",null,r)}const $=e(c,[["render",_]]);export{b as __pageData,$ as default};
