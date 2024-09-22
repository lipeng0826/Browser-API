# 浏览器 API 主要是指浏览器为开发者提供的一组 编程接口，允许通过 JavaScript 来与浏览器的各种功能、设备、网络、UI 等进行交互。以下是一些常见的 浏览器 API 类型和例子

## 1.DOM API (Document Object Model)

DOM 是网页结构的编程接口，允许开发者动态操作和更新页面内容、样式、属性、事件等。
常用操作：获取元素、修改节点、添加/删除元素。
例子：
document.getElementById()
element.classList.add()
document.createElement()

## 2. BOM API (Browser Object Model)

BOM 涉及浏览器窗口和网页环境的操作，如控制浏览器窗口、访问浏览器历史、管理 cookies 等。
例子：
window.alert()
window.location.href
navigator.userAgent
history.back()

## 3. 网络 API

用于进行网络请求和处理响应。包括老的 XMLHttpRequest 以及现代的 Fetch API。
例子：
XMLHttpRequest：用于发起 AJAX 请求。
Fetch API：用于现代网络请求，支持 Promise 语法。
WebSocket API：用于建立全双工的实时通信连接。
Service Worker API：允许应用程序在后台处理网络请求、缓存和推送通知。

## 4. 存储 API

允许在浏览器中持久化数据存储。
例子：
LocalStorage：保存数据，除非用户手动清除，否则数据长期存在。
SessionStorage：只保存会话期间的数据，关闭页面或浏览器后清除。
IndexedDB：用于存储结构化数据，适合大规模存储和复杂查询。
Cookies：用于保存少量文本数据，通常用于用户会话或偏好设置。

## 5. 事件 API

浏览器的事件模型允许开发者监听用户交互事件并做出响应。
例子：
addEventListener()
click、keydown、resize 等事件。
CustomEvent：自定义事件。

## 6. 图形和多媒体 API

处理图像、音频、视频和其他媒体内容。
例子：
Canvas API：用于绘制 2D 图形和动画。
WebGL：用于在网页上渲染 3D 图形。
Media API：用于访问设备摄像头、麦克风和播放音频、视频内容。
WebRTC API：实现浏览器之间的实时音视频通信。

## 7. 设备 API

允许网页访问硬件设备的功能。
例子：
Geolocation API：获取用户的地理位置信息。
Battery API：获取设备电池状态。
DeviceOrientation API：检测设备方向、加速度等传感器数据。
Vibration API：控制设备振动功能。

## 8. 安全和权限 API

处理用户授权和安全管理。
例子：
Permissions API：用于检查或请求用户权限（如地理位置、通知、摄像头）。
Credential Management API：用于管理用户登录凭证。
Content Security Policy (CSP)：帮助检测和防止跨站脚本攻击。

## 9. 性能与分析 API

提供关于页面加载时间、资源消耗等性能数据。
例子：
Performance API：收集和分析性能数据。
Navigation Timing API：跟踪页面加载的时间。

## 10. 通知与推送 API

处理浏览器内的通知和推送消息。
例子：
Notifications API：显示系统级的通知。
Push API：在不活跃时向用户推送消息。

## 11. 文件和剪贴板 API

用于处理文件上传、下载和与剪贴板交互。
例子：
File API：允许用户上传和读取文件。
Clipboard API：用于访问剪贴板内容，复制和粘贴文本或其他数据。

## 12. 动画和交互 API

处理元素的动画、转换和用户交互。
例子：
Web Animations API：用于创建复杂的动画效果。
IntersectionObserver API：用于检测元素是否进入视口（常用于懒加载）。
