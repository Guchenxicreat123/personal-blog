---
title: '用 Astro + Docker 把博客部署到本地服务器'
description: '一份从零到部署的实操指南：构建静态站点、用 nginx 托管、Docker Compose 一键启动，端口 1020。'
pubDate: 2025-09-05
tags: ['Astro', 'Docker', '部署', 'Nginx']
category: '技术'
---

这篇记录这个博客站本身的部署方案：用 Astro 构建纯静态文件，塞进 nginx 镜像，用 Docker Compose 跑在本地服务器上。

## 整体思路

1. `astro build` 产出静态文件到 `dist/`
2. `pagefind --site dist` 给 `dist/` 生成搜索索引
3. 把 `dist/` 拷进 `nginx:alpine` 镜像
4. `docker compose up -d` 映射 `1020:80` 端口

## 多阶段 Dockerfile

构建与运行分离，最终镜像只含 nginx 和静态文件，体积很小：

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build          # astro build && pagefind

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## nginx 静态路由

Astro 默认按目录输出 HTML（`/blog/foo/` → `dist/blog/foo/index.html`）。对应的 nginx 路由：

```nginx
location / {
    try_files $uri $uri/ $uri.html =404;
}
```

`$uri/` 让目录请求命中其下的 `index.html`，`$uri.html` 兼容无尾斜杠的旧链接。

## 一键启动

```bash
# 构建 + 启动
docker compose up -d --build

# 访问
curl http://服务器IP:1020
```

## 日常更新文章

```bash
# 写完新 .md 后，重新构建并重启
docker compose up -d --build
```

因为用了多阶段构建，每次改动都会在容器内重新 `npm ci` + 构建，所以更新很省心。
