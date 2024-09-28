# 搭建一个支持https和websocket的前后端项目

## 1.https证书

    1.安装hombebrew
        https://juejin.cn/post/7257740918432792632?searchId=20240920162409239B79F15161A2790FEC
        这个地方用到的是别人的工具，因为国内安装homebrew下载不下来；
    2.使用homebrew安装
        到chatGpt上搜一下https教程，后面的直接按照教程来就ok；
```shell
# 生成私钥（2048 位 RSA）
openssl genpkey -algorithm RSA -out server_with_pass.key -aes256
openssl rsa -in server_with_pass.key -out server.key
密码：123456   重要

# 生成证书签名请求 (CSR)
openssl req -new -key server.key -out server.csr

# 使用 CSR 和私钥生成自签名证书，有效期为 365 天
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt

```
    3.证书目录
        /credit

## 搭建node环境

    1.按照当前app的node依赖搭建项目&安装依赖
    2.在server-https中引入和加载证书
    3.启动服务端项目

## 搭建前端静态页面

    1.搭建一个express服务
        文件目录： ./express目录下
    2.在服务中引入https证书
    3.在public中增加静态页面
    4.启动前端项目

## 基于以上内容就搭建了一个支持https的websocket环境

## 启动服务端

    cd websocket-test
    node ./server-https.js

## 启动浏览器端

    cd websocket-test/express
    node ./server.js
    打开：https://localhost/index-http.html