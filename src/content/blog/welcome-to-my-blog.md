---
title: '欢迎来到我的博客'
description: '这是一篇示例文章，介绍这个博客能做什么、怎么写新文章。'
pubDate: 2025-09-01
tags: ['公告', '随笔']
category: '关于'
---

欢迎来到我的个人博客！这是第一篇文章，用来演示这个站点能做什么。

## 这个博客能做什么

- **写技术文章**：用 Markdown，支持代码高亮、标签、分类
- **全文搜索**：基于 Pagefind，构建时生成索引，前端即时检索
- **暗色模式**：右上角一键切换，记忆你的偏好
- **简历页**：一份结构化的个人简历
- **Docker 部署**：一条命令跑在本地服务器，端口 1020

## 怎么写一篇新文章

在 `src/content/blog/` 下新建一个 `.md` 文件，开头用 frontmatter 声明元信息：

```markdown
---
title: '文章标题'
description: '一句话摘要，会显示在列表和搜索结果里'
pubDate: 2025-09-10
tags: ['前端', 'Astro']
category: '技术'
---

正文从这里开始，用标准 Markdown 语法即可。
```

保存后运行 `npm run build`，文章会自动出现在首页和博客列表里，并被打进搜索索引。

## 代码高亮示例

下面是一段 TypeScript，它会随暗色模式自动切换配色：

```typescript
interface Post {
  title: string;
  pubDate: Date;
  tags: string[];
}

function sortPosts(posts: Post[]): Post[] {
  return [...posts].sort(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime()
  );
}
```

更多技术内容持续更新中，敬请期待。
