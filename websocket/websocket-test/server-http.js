// 引入 ws 模块
const WebSocket = require('ws');

// 创建 WebSocket 服务器，监听 8080 端口
const wss = new WebSocket.Server({ port: 8080 });

// 当客户端连接时触发
wss.on('connection', function connection(ws) {
    console.log('Client connected.');

    // 监听客户端消息
    ws.on('message', function incoming(message) {
        console.log('Received message from client: %s', message);

        // 发送一条消息回客户端
        ws.send('Hello from server, you sent: ' + message);
    });

    // 连接建立后，向客户端发送一条欢迎消息
    ws.send('Welcome! You are connected to the WebSocket server.');
});

// 监听服务器启动
wss.on('listening', () => {
    console.log('WebSocket server is running on ws://localhost:8080');
});
