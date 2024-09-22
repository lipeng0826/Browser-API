const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const sockjs = require('sockjs');
const cors = require('cors'); // 引入 cors

// 加载 SSL/TLS 证书和私钥
const serverOptions = {
  key: fs.readFileSync('./credit/server.key'),
  cert: fs.readFileSync('./credit/server.crt')
};

const app = express();

// 使用 cors 中间件
app.use(cors());

// 设置静态文件夹
app.use(express.static(path.join(__dirname, 'public')));

// 创建 HTTPS 服务器
const server = https.createServer(serverOptions, app);

// 创建 SockJS 服务器
const sockjs_opts = {sockjs_url: "https://cdn.jsdelivr.net/npm/sockjs-client/dist/sockjs.min.js"};
const echo = sockjs.createServer(sockjs_opts);

echo.on('connection', function(conn) {
  conn.on('data', function(message) {
    console.log("Received message:", message);
    conn.write(`Echo from server: ${message}`);
  });

  conn.on('close', function() {
    console.log("Connection closed");
  });
});

echo.installHandlers(server, {prefix:'/ws'});

// 启动服务器
server.listen(8080, () => {
  console.log('HTTPS and SockJS server is running on https://localhost:8080');
});
