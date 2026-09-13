import { defineConfig } from 'astro/config';

// 站点地址：本地服务器 IP + 端口 1020
// 如果以后换了域名，改这里即可（影响 sitemap / 绝对链接生成）
export default defineConfig({
  site: 'http://localhost:1020',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  markdown: {
    // 代码高亮：双主题，随暗色模式切换（见 global.css 中的 --shiki 变量切换）
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: false,
    },
  },
});
