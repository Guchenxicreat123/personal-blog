# ---------- 构建阶段 ----------
FROM node:22-alpine AS build
WORKDIR /app

# 可选：传入国内 npm 镜像加速（构建时 --build-arg NPM_REGISTRY=... ）
ARG NPM_REGISTRY=
# 先拷依赖清单，利用层缓存
COPY package.json package-lock.json* ./
RUN if [ -n "$NPM_REGISTRY" ]; then npm config set registry "$NPM_REGISTRY"; fi \
    && npm ci

# 拷源码并构建（astro build + pagefind 生成搜索索引）
COPY . .
RUN npm run build

# ---------- 运行阶段 ----------
FROM nginx:alpine

# nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 构建产物（静态文件 + pagefind 索引）
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
    CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
