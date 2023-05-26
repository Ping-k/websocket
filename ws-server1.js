/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2022-09-08 10:33:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-26 13:24:06
 * 
 * 
 * npmjs：https://www.npmjs.com/package/nodejs-websocket
 * 
 */

var ws = require("nodejs-websocket")
const port = 5000;

// 创建一个服务server,每次用户链接，函数就会被执行，并给当前用户创建一个connect对象
var server = ws.createServer(connect => {
  // 每当接收到用户传递过来的数据，就会触发text事件，并传入数据
  connect.on("text", data => {
    // 给用户响应数据
    // connect.sendText(data.toUpperCase()+"!!!") //转换大小写并并拼接字符串
    // connect.send(data)

    // 群发广播
    server.connections.forEach(function (conn) {
      conn.sendText(data)
    })
  })

  //监听websocket断开链接
  connect.on("close", () => {
    console.log("websocket连接断开....")
  })

  //监听websocket异常信息
  connect.on("error", () => {
    console.log("websocket连接异常....")
  })
})

server.listen(port, () => {
  console.log("websocket running")
  console.log(`地址：ws://localhost:${port}`)
})
