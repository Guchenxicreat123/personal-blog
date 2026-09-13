# 个人技术博客（Astro 静态站点 · Docker 部署）

## 简介
基于 Astro 的个人技术博客，支持：
- Markdown 文章
- 标签页
- 简历页面（`src/data/resume.ts`）
- Docker 一键部署

## 启动
```bash
# 开发
npm install
npm run dev

# 生产
docker compose up -d --build
```

## 配置
- 端口：`4321`（容器内）
- 简历数据：编辑 `src/data/resume.ts` 后重建

## ⚠️ 脱敏提示
- `src/data/resume.ts` 已脱敏（姓名/手机/邮箱/学校/公司/GitHub 全部替换为占位符）
- 真实简历请勿上传，保留在本地