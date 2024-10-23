const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

// 加载 SSL/TLS 证书和私钥
const serverOptions = {
  cert: fs.readFileSync('../credit/server.crt'),
  key: fs.readFileSync('../credit/server.key')
};

const app = express();

// 使用 cors 中间件并允许所有来源的请求
app.use(cors());

app.use((req, res, next) => {
  // 设置跨域头，允许任意来源
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// 设置静态文件夹
app.use(express.static(path.join(__dirname, 'public')));

// 启动 HTTPS 服务器并监听指定端口
https.createServer(serverOptions, app).listen(443, () => {
  console.log('HTTPS server is running on https://localhost');
});
