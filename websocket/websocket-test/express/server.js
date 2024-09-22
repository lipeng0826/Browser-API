const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

// 加载 SSL/TLS 证书和私钥
const serverOptions = {
  cert: fs.readFileSync('../credit/server.crt'),
  key: fs.readFileSync('../credit/server.key')
};

const app = express();

// 设置静态文件夹
app.use(express.static(path.join(__dirname, 'public')));

// 启动 HTTPS 服务器并监听指定端口
https.createServer(serverOptions, app).listen(443, () => {
  console.log('HTTPS server is running on https://localhost');
});
