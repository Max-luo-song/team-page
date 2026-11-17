# 独立科研团队主页

静态 GitHub Pages 模板。研究、成果和成员部分参考 [Arc Institute 的 Hsu Lab](https://arcinstitute.org/labs/hsulab)。

## 替换内容

在 GitHub 打开 `content.js`，点击铅笔图标编辑。修改后提交到 `main`，GitHub Pages 会重新部署。

- `name` 是网站名称，会同时更新导航栏、浏览器标题和页脚。
- `headline` 和 `intro` 是首页标题与团队介绍。
- `research` 和 `work` 分别填写研究方向与项目、论文、代码、数据或研究笔记。没有链接时，保留空字符串。
- `people` 中每个人各占一项。复制一项添加成员。上传照片后，把 `photo` 填成类似 `"./member-chen.jpg"` 的路径。`url` 可填写个人主页。
- `heroImage` 是首图路径。可替换成团队合照、实验图片，或留空使用渐变。
- `contact` 填写合作说明和团队公开邮箱。邮箱留空时隐藏联络按钮。

## 预览和部署

本地直接打开 `index.html` 即可预览。GitHub 仓库里打开 **Settings → Pages**，将发布来源选为 **Deploy from a branch**，选择 **main** 和 **/(root)**，然后保存。
