# bug-free-robot

一个无需第三方依赖的 Node.js 基础网站，包含欢迎页、健康检查和 HTTP 集成测试。

## 开始使用

需要 Node.js 24 和 npm 11。云环境已经提供这两个工具，不需要数据库或 API 密钥。

在项目目录运行：

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm test
npm start
```

服务默认监听本机的 3000 端口。首页路径为 `/`，健康检查路径为 `/health`。
可用 `HOST` 和 `PORT` 环境变量修改监听地址；默认仅允许本机访问。

开发时运行 `npm run dev`，修改服务端文件后会自动重启。按 Ctrl+C 停止服务。
本项目直接运行源码，不需要构建步骤。

## 文件说明

- `public/index.html`：网站首页。
- `src/app.js`：HTTP 路由。
- `src/server.js`：服务启动入口。
- `test/app.test.js`：首页、健康检查、404、HEAD 和方法限制的测试。

## 云环境

使用现有 `/workspace/bug-free-robot` 检出目录。每个云任务已经隔离，无需另外创建 Git worktree。
文件和依赖可以保存在环境快照中，运行中的服务需要在新任务中重新启动。
请勿将密钥或 `.env` 文件提交到 Git。
