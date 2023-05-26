/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2022-09-08 13:21:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-26 13:20:46
 * 
 * 
 * npmjs：https://www.npmjs.com/package/ws
 * 
 */

var websocket = require("ws");

const port = 5001;
var server = new websocket.Server({
  port: port,
}, () => {
  console.log("websocket running")
  console.log(`地址：ws://localhost:${port}`)
});

server.on("open", () => {
  console.log("open");
});

server.on("close", () => {
  console.log("close");
});

server.on("connection", (ws, req) => {
  console.log("connection连接成功");
  // 监听消息
  ws.on("message", (data) => {
    // data: 接收信息
    server.clients.forEach((item) => {
      if (item.readyState === ws.OPEN) {
        console.log("原始消息：", data);
        console.log("转换后消息：", data.toString()); // 转字符串，默认是二进制流 Buffer
        // 推送消息
        item.send(data.toString()); // 类型转换，默认是二进制流 Buffer
      }
    });
  });
});

